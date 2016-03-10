# simple-static-server
A repo to help beginners create a development environment on their the own computer

## Welcome newcomers!
Have you been playing around with JavaScript and not know how to get started making things on your own computer? Would you like to be able to build applications outside of a sandbox you found online?

This repo will walk you through the steps to get started as simply as possible.
In this repo we will cover the following:
  * Text Editor
  * Homebrew
  * Git
  * Node
  * http-server
  * Basic app architecture

Attention: This Repo assumes OS X. Users of other platforms please refer to [this link](https://www.google.com)

## Step one: Downloading required software

#### Text Editor
You will want to have a text editor to work and write your code in. There is much debate about what editor is best and I believe it is purely preferential. With that said, here are the two most commonly used for development:
  * [Atom](https://www.atom.io) - a hackable text editor
for the 21st Century
  * [Sublime](https://www.sublimetext.com) - a sophisticated text editor for code, markup and prose.

#### Homebrew

First we need to install [Homebrew](http://www.brew.sh) - The missing package manager for OS X

Homebrew allows us to easily install software from the command line. If the command line is something that instils fear I will include links and directions to install directly from the the official sites. The terminal will be mandatory for a small portion of this tutorial and nothing in too complicated. I also highly encourage you to get familiar with your command line, here is some useful links that helped me get familiar with it:
* [The Command Line Crash Course ](http://cli.learncodethehardway.org/book/)
* [The Command Line Cheat Sheet ](https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-)
* [The Command Line Help ](http://www.explainshell.com/)
* [The Command Line Mystery Game ](https://github.com/veltman/clmystery/)

#### Node.js
For my command line users, open a new terminal window and enter the following command to install node on your computer:
```
$ brew install node
```
If you are not using the command line, [you can download node here ](https://nodejs.org/en/)

#### http-server
In your terminal window, run this command:
```
$ npm install http-server -g
```
If you are not using the command line, source code can be viewed and [downloaded here ](https://github.com/indexzero/http-server/)

## Step two: Building our application

#### Basic App Architecture
I will introduce a very basic architecture. You can put all of your CSS styling and JavaScript scripts inside of your HTML but this is considered bad practice. The modularity and organization of code is important in modern day development and can be extremely complicated architectures. It is best that you begin practicing these techniques now as it will become beneficial in the future.

A common and basic application architecture consists of three files in one parent "application" folder, a HTML file `file_name.html`, a CSS file `file_name.css` and a JavaScript file `file_name.js`. For our example app we will call three files:
* [index.html ](https://github.com/0nn0/terminal-mac-cheatsheet/wiki/Terminal-Cheatsheet-for-Mac-(-basics-)
* [style.css](http://www.explainshell.com/)
* [app.js](https://github.com/veltman/clmystery/)

Create a folder that you will put all of your development files and move into that folder. For myself I call mine "dev" but you are welcome to name it whatever fits for you.
```
$ mkdir dev
$ cd dev
```
If your are not using the command line, we are doing the same thing as creating folders and files in finder.

Next make another folder to contain your application.
```
$ mkdir whatever_app_name_you_want
$ cd whatever_app_name_you_want
```
From this folder we will now add our three files.
```
$ touch index.html style.css app.js
```
Now open every file in your current working directory (folder you are in). If you chose atom as your text editor you can do this from the terminal with the following command:
```
$ atom .
```
Otherwise, you can open the files directly through your text editor.


#### Adding code
First go into your `index.html` file and copy/paste this code in:
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8">
    <title>Practice App</title>
    <link rel="stylesheet" href="style.css">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
    <script type="text/javascript" src="app.js"></script>
  </head>
  <body>
    <header>
      <h1>Hellow World!</h1>
    </header>
    <main>
      <input id="name_input" type="text" placeholder="Enter your name here">
      <button id="submit_name" type="button">Submit</button>
    </main>
  </body>
</html>
```
Next in your `style.css` file, copy/paste this code:
```css
body {
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
  background-color: #272822;
  color: #F5F5F5;
}

main {
   display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

p {
  font-size: 20px;
}

input {
  width: 400px;
  height: 30px;
}

button {
  width: 100px;
  height: 30px;
}
```
Lastly in your `app.js` file, copy/paste this code:
```javascript
// tell the browser to wait to run this code until everything is loaded/ready
$(document).ready(function() {
  // tell the browser to run this function when the button with the id of submit_name is clicked
  $( "#submit_name" ).click(function() {
    // set the value of the input box to a variable
    var name = $( "#name_input" ).val();
    // clear all html from anything inside of the main tag
    $( "main" ).html("");
    // insert html into main, string concatination allows us to insert variables like name
    $( "main" ).append( "<p>My name is " + name + "</p>" );
    // add a button that users can click to run the app again
    $( "main" ).append( "<button id='refresh'>Go again</button>" );
    // when the button with the id of refresh is clicked, run this function
    $( "#refresh" ).click(function() {
      // refresh the page which restarts the application
      location.reload();
    })
  })
});
```
