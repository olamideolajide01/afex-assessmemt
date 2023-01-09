import OrderNav from "../components/OrderNav";
import { useState } from "react";

export default function OrderLayout({ children }) {
  const [activeTab, setActiveTab] = useState(2);
  return (
    <div className='overflow-hidden'>
      <div className='flex h-screen bg-[#e5e5e5]'>
        {/* <CssBaseline /> */}

        <div className='h-screen w-full mx-auto overflow-y-hidden mt-[5px]  overflow-x-hidden'>
          <div className={`flex gap-2 max-h-full `}>
            <aside className='  bg-white'>
              <OrderNav setActiveTab={setActiveTab} activeTab={activeTab} />
            </aside>
            {activeTab === 2 && <div>{children}</div>}
          </div>
        </div>
      </div>
    </div>
  );
}
