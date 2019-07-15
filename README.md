# richer-embed

An extension of Discord.js's RichEmbed class, with more functionality such as setting local images as embed.image and embed.thumbnail and personalizing the embed with a User's profile picture and name. Made for [farazkaleemmalik/phoenixwright](https://github.com/farazkaleemmalik/phoenixwright), a bot made with Discord.js.

<a name="RicherEmbed"></a>

## RicherEmbed
**Kind**: global class  

* [RicherEmbed](#RicherEmbed)
    * [new RicherEmbed(channelObj, options)](#new_RicherEmbed_new)
    * [.personalise(authorObj)](#RicherEmbed+personalise) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
    * [.setLocalThumbnail(pathName)](#RicherEmbed+setLocalThumbnail) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
    * [.setLocalImage(pathName)](#RicherEmbed+setLocalImage) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
    * [.setContent(title, content)](#RicherEmbed+setContent) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
    * [.replace(messageToReplace)](#RicherEmbed+replace)
    * [.send()](#RicherEmbed+send)
    * [.chat(authorObj, command, imageUrl)](#RicherEmbed+chat) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)

<a name="new_RicherEmbed_new"></a>

### new RicherEmbed(channelObj, options)
**Returns**: [<code>RicherEmbed</code>](#RicherEmbed) - Returns itself  

| Param | Type | Description |
| --- | --- | --- |
| channelObj | <code>Channel</code> | Discord.js Channel instance for which the embed is being created |
| options | <code>Object</code> | Additional properties to add to embed. An existing embed can also be inserted to turn it into a RicherEmbed instance (may be buggy). |

<a name="RicherEmbed+personalise"></a>

### richerEmbed.personalise(authorObj) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
Personalises the embed for a User by changing the title and the thumbnail

**Kind**: instance method of [<code>RicherEmbed</code>](#RicherEmbed)  
**Returns**: [<code>RicherEmbed</code>](#RicherEmbed) - Returns itself  

| Param | Type | Description |
| --- | --- | --- |
| authorObj | <code>User</code> | User to personalise |

<a name="RicherEmbed+setLocalThumbnail"></a>

### richerEmbed.setLocalThumbnail(pathName) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
Attaches a local image as a thumbnail for the embed

**Kind**: instance method of [<code>RicherEmbed</code>](#RicherEmbed)  
**Returns**: [<code>RicherEmbed</code>](#RicherEmbed) - Returns itself  

| Param | Type | Description |
| --- | --- | --- |
| pathName | <code>String</code> | Path to image. Relative paths are relative to entry file |

<a name="RicherEmbed+setLocalImage"></a>

### richerEmbed.setLocalImage(pathName) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
Attaches a local image as the main image for the embed

**Kind**: instance method of [<code>RicherEmbed</code>](#RicherEmbed)  
**Returns**: [<code>RicherEmbed</code>](#RicherEmbed) - Returns itself  

| Param | Type | Description |
| --- | --- | --- |
| pathName | <code>String</code> | Path to image. Relative paths are relative to entry file |

<a name="RicherEmbed+setContent"></a>

### richerEmbed.setContent(title, content) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
Sets content for the embed

**Kind**: instance method of [<code>RicherEmbed</code>](#RicherEmbed)  
**Returns**: [<code>RicherEmbed</code>](#RicherEmbed) - Returns itself  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>String</code> | Title of embed |
| content | <code>String</code> | Content of embed, to be set embed.description |

<a name="RicherEmbed+replace"></a>

### richerEmbed.replace(messageToReplace)
Replaces a message with this embed

**Kind**: instance method of [<code>RicherEmbed</code>](#RicherEmbed)  

| Param | Type | Description |
| --- | --- | --- |
| messageToReplace | <code>Message</code> | The message to replace. Note that this overrides the message channel previously set of the new provided is in a different channel |

<a name="RicherEmbed+send"></a>

### richerEmbed.send()
Send the message to the channel in embed.channel

**Kind**: instance method of [<code>RicherEmbed</code>](#RicherEmbed)  
<a name="RicherEmbed+chat"></a>

### richerEmbed.chat(authorObj, command, imageUrl) ⇒ [<code>RicherEmbed</code>](#RicherEmbed)
Turns the embed into a chat embed, to be used by a bot command

**Kind**: instance method of [<code>RicherEmbed</code>](#RicherEmbed)  
**Returns**: [<code>RicherEmbed</code>](#RicherEmbed) - Returns itself  

| Param | Type | Description |
| --- | --- | --- |
| authorObj | <code>User</code> | Author of chat command |
| command | <code>String</code> | Exact command in the form of "commandName parameters more_parameters". The first word is excluded from the embed's content. |
| imageUrl | <code>String</code> | Url of main image |

