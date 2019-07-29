# Team Retrospect Bot

Welcome to our team collaboration bot, to help us make our life easier by making us more lazy.

Before you start you need to have:
*Latest version of Node Js
*Latest version of NPM (should get installed with node)
*Optional (Visual Studio Code as an editor, very nice and organized, has it's own terminal)

##Steps to run bot to test new features

1) Open this link and create a 'New Application' (if you don't have one): 
https://discordapp.com/developers/applications/

2) Give a name to your app.
3) On the right hand side you will have a column with options select 'Bot'.
4) Add new bot.
5) Copy the Token Code and keep it safe you will need it later.
6) Go to this link and select the permissions your bot will need, the CLIENT ID you need will be in the General Information of your APP
https://discordapi.com/permissions.html

7) After you finished selecting permissions and added the client id information click the link generated at the bottom and this will open a new page where you will be able to add the bot to the server you like. (You need to have at least MOD permission to be able to add to the server)   - I recommend doing a Test server for testing purposes, this way you will not bother other      people when testing your commands.

8) Once you hit add, you can head to discord and make sure your bot joined your server.

###Downloading Code and Installing Dependencies
9) Head to the github link, clone/download the ZipFile and place it in your workspace.
https://github.com/JahnCarlo/championggdiscordbot

10) Open a Terminal window and navigate to the folder.
    - Example:  cd /User/Documents/GitHub/championggdiscordbot
11) Here you need to create a a new file called botsettings.json
    touch botsettings.json
12) in this file you need to pace this code including the brackets and add the Token from step 5 inside the quotation marks:
{
    "token": "Token From Step 5",
    "prefix": "!"
}
13) Next you need to connect to the git repository (look it up online, lel)
14) Once you connect to git, you need to install your dependencies
    npm install discord.js-commando --save
    npm install discord.js --save

    These two will install necesary dependecies for now.

After this you should be able to run your code/bot by doing 'node .' in the terminal this will activate the bot in the server






############################################################################


Cada vez que vayas a hacer un cambio ->
1) git pull
2) git checkout -b [branch_name] //Name of the branch should be related to the change you're making

Aqui vas a estar en tu branch y puedes hacer cambios sin miedo. Cuando termines de probar y quieras pushear:
1) git push --set-upstream origin branch_name //Esto setea tu "push" a que sea a tu branch que creaste
2) git add .
3) git commit -m "mensaje related a tu cambio"
4) git push

Los cambios van a estar en tu branch. Para subirlos al master hay que hacer un merge request. Esto se hace facil desde el mismo website. Antes de hacer merge se va a chequear si hay conflictos y eso; y los puedes controlar por ahi


