# Websockets with NodeJS and Socket.io

This repository contains a small demo application with a small [NodeJS](https://nodejs.org/en/about/) + [Socket.io](https://socket.io/) backend and a vanilla JS + Socket.io frontend client. I tlaso integrates a small Local Storage demo.

## Getting started

### Requirements

> In order to run this demo, you need to have a newer version of [NodeJS](https://nodejs.org/en/) (v12+) installed.

#### 1. Clone the repository and install the packages

You can clone the repository from the commandline with
```
# clone the repository
$ git clone https://github.com/JanTrichter/Node_Websockets.git

# move into the server directory
$ cd server/

# install packages (npm)
$ npm i
```

#### 2. Start the server
Now you can start the server.
```
# run the server
$ node .
```
> Console should print: `Server is listening on http://localhost:8080`

#### 3. Open the webclient
Now you can open the `index.html` which is located in the `client` folder.

#### 4. Open a new the file with another browser
You should open the `index.html` with another browser or in an incognito tab to get a better demonstration. If you just duplicate the browser window the messages will have the same sender because the sender is stored in the browser's Local Storage.
