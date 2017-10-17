# Angular 2 create and delpoy for first time
 First time creating and deploying angular2 app

### Getting Started

These instructions teach you how to create and deploy angular2 using Firebase and Angular2 CLI

Prerequisites

What things you need to install the software and how to install them

<ul>
<li>
nodejs
</li>
<li>
npm
</li>
<li>
git
</li>
<li>
angular2 CLI
</li>
</ul>

### Installing

<b>A step by step</b>
download and install this links

<ul>
<li>
<a href="https://nodejs.org/en/download/">nodejs & npm</a>
</li>
<li>
<a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">git</a>
</li>
</ul>

<b><i>cause you install git and node js, your computer know nom command</i></b>

### NPM Install

write following line to cmd:
npm install angular-cli -g (angular2 CLI)

<hr>

## Create your app
Create app: 
<br>$ ng new my-app

Enter app directory: 
<br>$ cd my-app

Run app: 
<br>$ ng serve

goto [http://localhost:4200] and see if app works.

## Deployment

build app for deploy: <br>$ ng build --prod

goto <a href="https://console.firebase.google.com/">firebase</a> and create a new Firebase project.

install firebase tools: <br>$ npm install -g firebase-tools

deploy to firebase: <br>$ firebase login

after authentication, run: <br>$ firebase init

<i>
First of all you're being asked which of the Firebase client features you want to use. Select the option Hosting: Configure and deploy Firebase Hosting site. Next the Firebase client will ask which folder to use for deployment. Type in dist. That is important because that is the location where our production build is stored.

Next the question is ask if this app is a single page app and if it should rewrite all URLs to index.html. In our case we need to answer yes.

Last question is if Firebase should over write file index.html. The answer to that question is no.
</i>
now run: <br>$ firebase deploy

