// import Manager from "../lib/encryption";
import React, { useEffect, useState } from "react";
import { data } from "../data";

export default function OrderBook() {
  const [loading, setLoading] = useState(false);
  const [newData, setNewData] = useState(data);

  return <div>OrderBook</div>;
}
