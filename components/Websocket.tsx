import React, { useState } from "react";
import Manager from "../lib/encryption";

const CryptoJS = require("crypto-js");
const manager = new Manager({
  key: process.env.KEY,
  vector: process.env.VECTOR,
});

export default function WebSocketDemo() {
  const [val, setVal] = useState(null);
  //   // Create WebSocket connection.
  //   const socket = new WebSocket("wss://comx-sand-api.afexnigeria.com/stream/trades");

  //   // Change binary type from "blob" to "arraybuffer"
  //   socket.binaryType = "arraybuffer";

  //   // Listen for messages
  //   socket.addEventListener("message", (event) => {
  //     if (event.data instanceof ArrayBuffer) {
  //       // binary frame
  //       const view = new DataView(event.data);
  //       console.log(view.getInt32(0));
  //     } else {
  //       // text frame
  //       console.log("MY EVENT", event.data);
  //     }
  //   });

  React.useEffect(() => {
    // // Create WebSocket connection.
    // const socket = new WebSocket("wss://comx-sand-api.afexnigeria.com/stream/trades");

    // // Change binary type from "blob" to "arraybuffer"
    // socket.binaryType = "arraybuffer";

    // // Listen for messages
    // socket.addEventListener("message", (event) => {
    //   if (event.data instanceof ArrayBuffer) {
    //     // binary frame
    //     const view = new DataView(event.data);
    //     console.log(view.getInt32(0));
    //   } else {
    //     // text frame
    //     console.log("MY EVENT", event.data);
    //   }
    // });

    const websocket = new WebSocket("wss://comx-sand-api.afexnigeria.com/stream/trades");

    websocket.onopen = () => {
      console.log("connected");
    };

    websocket.onmessage = (event) => {
      const ress = event.data;
      const data = manager.decrypt(ress);
      const res = data?.toString(CryptoJS.enc.Utf8);
      setVal(res);
      console.log("MY DATA", res);
    };

    return () => {
      websocket.close();
    };
  }, []);
  return <div>{val}</div>;
}
