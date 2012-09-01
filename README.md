Narad.js
=====

A pusher like nodejs implementation built on top of socect.io

A server library to build real time apps.


Start the server 
node server.js




Publish data to server
======================

Sent post request to

/publish/:channel_name/:event_name
data = {}


Subscribe to Channels
=====================

include the following javascript files at client
replace host:port by the host and port where you would run naiad

<script src="host:port/socket.io/socket.io.js"></script>
<script src="host:port/narad.js"></script>

Subscribing to channels
=======================
var channelName = "event";
var eventName = "chat_room"
var channel = narad.subscribe(channelName);channel.bind(eventName, function (data) {        console.log("data: ", data);});



Running in Daemon mode
======================

use the forever library

npm install forever -g
(https://github.com/nodejitsu/forever)
in the naiad directory

forever start server.js
forever stop server.js




Pending Items
=============

Adding npm
Securtiy: Channel authentication
Scalability
Logging


