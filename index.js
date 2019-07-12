const {RichEmbed} = require("discord.js");
const {basename} = require("path");

class RicherEmbed extends RichEmbed {
    constructor(channelObj, embedObj, options) {
        super();
        this.channel = channelObj;

        if (embedObj) {
            for (var prop in embedObj) { //Merge in all embed object props
                this[prop] = embedObj[prop];
            }
        }
		
		if (options) {
            for (var prop in options) { //Merge in all options object props
                this[prop] = options[prop];
            }
        }
    };
    personalise(authorObj) {
        this
            .setThumbnail(authorObj.displayAvatarURL)
            .setTitle(authorObj.username);
        return this;
    };

    setLocalThumbnail(pathName) {
        this
            .attachFiles([pathName])
            .setThumbnail("attachment://" + basename(pathName));
        return this;
    };

    setLocalImage(pathName) {
        this
            .attachFiles([pathName])
            .setImage("attachment://" + basename(pathName));
        return this;
    };

    setContent(title, chat) {
        this
            .setTitle(title)
            .setDescription(chat);
        return this;
    };

    replace(messageToReplace) {
        return messageToReplace.channel.send({embed: this})
            .then(res => messageToReplace.delete(1000))
            .catch(console.log);
    };

    send() {
        return this.channel.send({embed: this});
    }

    chat(authorObj, command, url) {
        this.personalise(authorObj).setImage(url).setDescription(command.split(" ").slice(1).join(" "));
        return this;
    };
}

exports.RicherEmbed = RicherEmbed;