const {RichEmbed} = require("discord.js");
const {basename} = require("path");

class RicherEmbed extends RichEmbed {
    /**
     * @param {Channel} channelObj - Discord.js Channel instance for which the embed is being created
     * @param {Object} options - Additional properties to add to embed. An existing embed can also be inserted to turn it into a RicherEmbed instance (may be buggy).
     * @returns {RicherEmbed} Returns itself
     */
    constructor(channelObj, options) {
        super();
        this.channel = channelObj;

        if (options) {
            for (var prop in options) { //Merge in all embed object props
                if (options.hasOwnProperty(prop)) {
                    this[prop] = options[prop];
                }

            }
        }
		return this;
    };

    /**
     * Personalises the embed for a User by changing the title and the thumbnail
     * @param {User} authorObj - User to personalise
     * @returns {RicherEmbed} Returns itself
     */
    personalise(authorObj) {
        this
            .setThumbnail(authorObj.displayAvatarURL)
            .setTitle(authorObj.username);
        return this;
    };

    /**
     * Attaches a local image as a thumbnail for the embed
     * @param {String} pathName - Path to image. Relative paths are relative to entry file
     * @returns {RicherEmbed} Returns itself
     */
    setLocalThumbnail(pathName) {
        this
            .attachFiles([pathName])
            .setThumbnail("attachment://" + basename(pathName));
        return this;
    };

    /**
     * Attaches a local image as the main image for the embed
     * @param {String} pathName - Path to image. Relative paths are relative to entry file
     * @returns {RicherEmbed} Returns itself
     */
    setLocalImage(pathName) {
        this
            .attachFiles([pathName])
            .setImage("attachment://" + basename(pathName));
        return this;
    };

    /**
     * Sets content for the embed
     * @param {String} title - Title of embed
     * @param {String} content - Content of embed, to be set embed.description
     * @returns {RicherEmbed} Returns itself
     */
    setContent(title, content) {
        this
            .setTitle(title)
            .setDescription(content);
        return this;
    };

    /**
     * Replaces a message with this embed
     * @param {Message} messageToReplace - The message to replace. Note that this overrides the message channel previously set of the new provided is in a different channel
     */

    replace(messageToReplace) {
        messageToReplace.channel.send({embed: this})
            .then(res => messageToReplace.delete(1000))
            .catch(console.log);
    };

    /**
     * Send the message to the channel in embed.channel
     */
    send() {
        this.channel.send({embed: this});
    }

    /**
     * Turns the embed into a chat embed, to be used by a bot command
     * @param {User} authorObj - Author of chat command
     * @param {String} command - Exact command in the form of "commandName parameters more_parameters". The first word is excluded from the embed's content.
     * @param {String} imageUrl - Url of main image
     * @returns {RicherEmbed} Returns itself
     */
    chat(authorObj, command, imageUrl) {
        this.personalise(authorObj).setImage(imageUrl).setDescription(command.split(" ").slice(1).join(" ")); // Evaluates to a RichEmbed instance since setDescription is defined in parent class!
        return this;
    };
}

exports.RicherEmbed = RicherEmbed;