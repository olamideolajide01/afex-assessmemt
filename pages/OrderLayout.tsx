import OrderNav from "../components/OrderNav";
import { useState } from "react";

export default function OrderLayout({ children }) {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div className='h-screen max-w-full  overflow-y-hidden mt-[5px]  overflow-x-hidden'>
      <div className={`flex flex-row gap-2 max-h-full w-full justify-between`}>
        <aside className='w-[207px] bg-white'>
          <OrderNav setActiveTab={setActiveTab} activeTab={activeTab} />
        </aside>

        {activeTab === 2 && <div className='w-full'>{children}</div>}
      </div>
    </div>
  );
}
