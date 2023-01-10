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
    <section className='mt-[5px]'>
      <label
        htmlFor='default-search'
        className='mb-2 px-1 text-sm font-medium text-[#D6D6D6] sr-only'
      >
        Search
      </label>
      <div className='relative'>
        <div className='absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none'>
          <svg
            aria-hidden='true'
            className='w-5 h-5 text-gray-500 dark:text-gray-400'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              stroke-linecap='round'
              stroke-linejoin='round'
              stroke-width='2'
              d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
            ></path>
          </svg>
        </div>
        <input
          type='search'
          id='default-search'
          className='block w-full p-2 pl-10 text-sm text-[#D6D6D6] border border-[#D6D6D6] rounded-[2px] bg-[#F8FAFB]  focus:border-[#D6D6D6] focus:outline-none'
          placeholder='Search '
          required
        />
      </div>
      {orders.map((tab, idx) => (
        <div
          key={idx}
          onClick={() => setActiveTab(tab.id)}
          className={`cursor-pointer flex items-center px-2 gap-[15px] py-4 ${
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
