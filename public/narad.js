var narad = {};
narad.url = 'http://192.168.0.46:3000'; // replace 192.168.0.46 with your host


narad.lisentingChannels = {}

var socket = io.connect(narad.url);

function Channel(channelName) {
    this.channelName = channelName; //serviceObject is the object of 

    this.events = {};
};

Channel.prototype.bind = function (event, callback) {

    this.events[event] = callback;

};

narad.subscribe = function (channelName)
{
    var channel = new Channel(channelName)
    this.lisentingChannels[channelName] = channel;
   

    socket.on(channelName, this.callbackBuilder(channel))

    return this.lisentingChannels[channelName];
}

narad.callbackBuilder = function (channel)
{

    return function (data)
    {
        var callback = channel.events[data["event"]];
        callback(data.data);
    }

}
