# react-rtc-pd

## Notes

### socket.io

#### What is socket.io

socket.io is a library which enables –

- Real-time
- Bidirectional
- Event-based

communication between browser and the server

It consists of – Node JS Server `[socket.io]` and a JavaScript client library for the browser `[socket.io-client]`

#### Main Features

Reliability –

- Connections are established even in the presence of –
  - Proxies and Load balancers
  - Personal firewall and antivirus software
-For this purpose it relies on Engine.IO

What is Engine.IO?

- Implementation of transport-based cross-browser/cross-device bi-directional communication layer for socket.io
- For more information - `https://github.com/socketio/engine.io`

Auto reconnection support –

- A disconnected client will try to reconnect

Disconnection detection –

- Engine.IO implements a heartbeat mechanism
- Allows both server and client to know when the other one is not responding

Binary support –

- It supports any serializable data structure like – ArrayBuffer and Blob
 In Node JS as well as browser

Multiplexing support –

- You can create number of namespaces and use as separate communication channels which will share the same connection

Room support –

- The arbitrary channel in the namespace is called Room
- Sockets can join and leave the room
- You can broadcast the messages to all the sockets which have joined the room

#### What should not be expected

- Socket.IO is not a WebSocket implementation
- Whenever possible, socket.io will use WebSocket as a transport
- Socket.IO protocol adds –
- Metadata, package type, namespace and packet id when an acknowledge is needed
- That is why –
  - WebSocket client will not be able to connect Socket.IO server successfully and socket.io-client to WebSocket server
