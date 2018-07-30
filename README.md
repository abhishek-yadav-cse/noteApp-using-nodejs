# noteApp-using-nodejs
A nodejs application for working with notes.

# Running application

`$ npm install`

`$ node app.js  <operation>`

There are four operation that can be performed with noteApp.

- Add note<br>
  `$ node app.js add --title= <some title> --body= <some body for note>`
  
- Remove note<br>
  `$ node app.js remove --title= <title of the note that has to be removed>`

- Read note<br>
  `$ node app.js read --title= <title of the note that has to be read> `
  
- List notes (list all the notes in our note application)<br>
  `$ node app.js list`


# Things learned from the project

+ Using require
+ Using third party module
+ Getting input from user
+ Simplifying input using 'Yargs' module
+ Working with JSON
+ Debugging nodejs application

