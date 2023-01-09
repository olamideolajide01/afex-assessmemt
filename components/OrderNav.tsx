/* eslint-disable @next/next/no-img-element */

export default function OrderNav({ setActiveTab, activeTab }) {
  const orders = [
    {
      id: 1,
      title: "Product View",
      icon: "/sub-sidenav/trending-up.svg",
    },
    {
      id: 2,
      title: "Order Book",
      icon: "/sub-sidenav/order-book.svg",
    },

    {
      id: 3,
      title: "Price History",
      icon: "/sub-sidenav/price-history.svg",
    },
    {
      id: 4,
      title: "Open Orders",
      icon: "/sub-sidenav/open-order.svg",
    },
    {
      id: 5,
      title: "Closed Trades",
      icon: "/sub-sidenav/close-trade.svg",
    },
    {
      id: 6,
      title: "Cancelled Trades",
      icon: "/sub-sidenav/cancel-trade.svg",
    },
  ];

  return (
    <section className=' mt-[5px]'>
      {orders.map((tab, idx) => (
        <div
          key={idx}
          onClick={() => setActiveTab(tab.id)}
          className={`cursor-pointer flex items-center gap-[15px] px-[30px] py-4 ${
            tab.id == activeTab ? "bg-[#F8FAFB]  " : ""
          }`}
        >
          <img src={tab.icon} alt='' />
          <h2
            className={`text-sm ${tab.id == activeTab ? "text-error font-medium " : "text-text"}`}
          >
            {tab.title}
          </h2>
        </div>
      ))}
    </section>
  );
}
