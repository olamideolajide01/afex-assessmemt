// import Manager from "../lib/encryption";
import React, { useEffect, useState } from "react";
import { data } from "../data";
import WebSocketDemo from "./Websocket";

export default function OrderBook() {
  const [activeBoard, setActiveBoard] = useState(1);
  const [activeProduct, setActiveProduct] = useState(1);
  const [newData, setNewData] = useState(data);

  const boards = [
    {
      id: 1,
      title: "X-traded",
    },
    {
      id: 2,
      title: "OTC",
    },
    {
      id: 3,
      title: "FI",
    },
    {
      id: 4,
      title: "Derivatives",
    },
  ];
  const products = [
    {
      id: 1,
      title: "All",
    },
    {
      id: 2,
      title: "SMAZ",
    },
    {
      id: 3,
      title: "SBBS",
    },
    {
      id: 4,
      title: "SPRL",
    },
    {
      id: 5,
      title: "SGNG",
    },
    {
      id: 6,
      title: "SSGM",
    },
    {
      id: 7,
      title: "FETC",
    },
    {
      id: 8,
      title: "SCOC",
    },
  ];

  return (
    <section>
      <div>
        <div className='flex  gap-4 bg-white pl-4 py-4'>
          <p className='self-center'>Board</p>
          {boards.map((tab) => (
            <div key={tab.id} onClick={() => setActiveBoard(tab.id)}>
              <p
                className={`text-sm ${
                  tab.id == activeBoard
                    ? "text-white bg-[#D71E0E] p-[9px] rounded-[18px] font-medium "
                    : "text-text p-[9px] bg-[#F8FAFB] rounded-[18px]"
                }`}
              >
                {tab.title}
              </p>
            </div>
          ))}
        </div>
        <div className='flex  gap-4 bg-white pl-4 pb-4'>
          <p className='self-center'>Products</p>
          {products.map((tab) => (
            <div key={tab.id} onClick={() => setActiveProduct(tab.id)}>
              <p
                className={`text-sm ${
                  tab.id == activeProduct
                    ? "text-white bg-[#D71E0E] py-[9px] px-[14px] rounded-[18px] font-medium "
                    : "text-text p-[9px] bg-[#F8FAFB] rounded-[18px] py-[9px] px-[10px]"
                }`}
              >
                {tab.title}
              </p>
            </div>
          ))}
        </div>

        <WebSocketDemo />
      </div>
    </section>
  );
}
