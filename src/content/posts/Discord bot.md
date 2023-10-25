---
layout: ../../layouts/PostLayout.astro # Always use this layout, it's so the post gets properly styled
title: How to code a discord bot?
excerpt: In this post you will learn how to code your discord bot to reply with `pong` when an user types `ping` with discord.js
author: Zemerik
createdAt: October 24, 2023
---

# How to Code a Discord bot?

## 👍Prerequisites: 

Coding a discord bot might interest you and sound fun, there are some prerequisites to it. In order to code a discord bot with discord.js, you require a fairly decent grasp 
of JavaScript itself. Although, it is possible to code a discord bot with no or very little information about JavaScript, doing so may result in you taking unnecessary time to 
solve basic errors in your code and end up frustrated.

So it is highly suggested, you learn some JavaScript basics before moving ahead. 

## 💻STEP 1 - Setting up your workspace: 

### Note:
If you are using app/website like Replit or Glitch, you can simply skip this step and move on to step 2. 

### Creating your package.json file
- Head over to the terminal of your project or open the folder in which you are going to store your files into command prompt. After that type, `npm init` in your terminal and the 
following should come up. 
```
This utility will walk you through creating a package.json file.
It only covers the most common items, and tries to guess sensible defaults.

See `npm help init` for definitive documentation on these fields
and exactly what they do.

Use `npm install <pkg>` afterwards to install a package and
save it as a dependency in the package.json file.

Press ^C at any time to quit.
package name: (The name of your folder)
```

- Right now the computer is asking you to enter the name of your package, which can be anything you want just as "my first discord bot", "I love bots", etc. If you press enter on
your keyboard, the package name will automatically be named whatever is written in the brackets. 

- After you have typed your package name or if you want your package name the same as default, press enter on your keyboard. 

- You should now be prompted to enter the version you want, by default it will be `1.0.0` if you do not enter anything. There is no need for you to enter the version or
description. The description will be blank by default.  

- When you get to the entry point, you can enter anyname you want as long as it ends with .js. The entry point is the main file of your project. You can call it whatever you like
as long as it ends with .js. If you leave it blank, the main entry point will be automatically be index.js. 

- You can skip all of the rest inputs and leave them to default as you are just starting out. 

The last option you will get is, 
```
Is this OK? (yes)
```

- When this comes up, simply press enter and the process should be complete. A `package.json` file should automatically be created in your folder and it will contain all the data
such as your package name and entry point. 

- Now create a new file the same place where the `package.json` has been created and name it the name of your entry point. If you did not change the default, then your main entry point will be `index.js`. 

## 😃Step 2 - Add the Code: 

- Copy Paste the following code in your entry point, 

```js
const express = require('express')
const Discord = require('discord.js')
const app = express();

app.listen(3000, () => {
  console.log("Project is running!");
})

const client = new Discord.Client({ intents: 32767 }) 

client.on('messageCreate', async (message) => {
  if (message.content === "ping") {
    message.channel.send('pong')
  }
})

client.login('YOUR BOT TOKEN HERE')
```

- Remember to replace **YOUR BOT TOKEN HERE** with the actual token of your bot which can be obtained from [the developer portal](https://discord.com/developers/applications)

## 🥇Step 3 - Running your project

- You are now ready to run your project. As soon as your run your project, your discord bot should appear online and send `pong` whenever someone types `ping`. 

##

<h4 align = "center">Thats all for this project. Hope you had fun while coding your discord bot and found this post helpful. </h4>
<h5 align = "center">Thanks for visiting</h5>
