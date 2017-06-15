# Angular App for the Dublin Rock Band Night Blind

## Overview

### What is this app for?
This is website to publicise the Dublin Rock Band Night Blind

### What does it do?

This app will allow users to:
- read the history of the band
- see upcoming events and releases by the band
- read band member information
- see Photo Galleries
- listen to the band's music recordings
- look at the band's music videos
- contact the band

### How Does it work

Currently, this is a fully client-side application where factory is used to retrieve hard-coded data about band members

## Features

### Existing Features
- Home page showing band activity
- About the Band section
- Gallery
- Music Section
- Video Section
- Contact Information

### Features left to Implement
- Contact form for availabiliity and quotes

## Tech Used
- [AngularJS](http://angularjs.org/)
	- We use **AngularJS** to handle page routing, we also use it to make calls to the REST API and build custom directives
- [Bootstrap](http://getbootstrap.com/)
	- We use **Bootstrap** to give our project a simple responsive layout
- [npm](https://www.npmjs.com/)
	- We use **nm** to help manage some of the dependencies in our application
- [bower](https://bower.io/)
	- **Bower** is used to manage the installation of our libraries and frameworks

## Contributing

### Getting the code up and running
1. Firstly you will need to clone this repository by running the ''' git clone <project's GITHUB URL>
2. After that you'll need to make sure that you have **npm** and **bower** installed
	1. You can get **npm** by installing Node from [here](https://nodejs.org/en/)
	2. Once you've done this you'll need to run the following command:
		'npm install -g bower # this may require sudo on Mac/Linux'
	3. Once **npm** and **bower** are installed, you'll need to install all of the dependecies in *package.json* and *bower.json*
  ```
  npm install

  bower install
  ```

4. After those dependencies have been installed you'll need to make sure that you have **http-server** installed. You can install this by running the following: ```npm install -g http-server # this also may require sudo on Mac/Linux```
5. Once **http-server** is installed run ```http-server```
6. The project will now run on [localhost](http://127.0.0.1:8080)
