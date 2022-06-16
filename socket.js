function listenEvents(socket) {
    console.log('A user connected');
  
    socket.on('disconnect', function () {
       console.log('A user disconnected');
    });
  
    socket.on('new-event',  function (data) {
      console.log(data);
   })
}

module.exports = listenEvents;