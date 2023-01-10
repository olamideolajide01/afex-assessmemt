/* eslint-disable @next/next/no-img-element */
export default function AppBar() {
  return (
    <section className='bg-[white] flex flex-row items-center'>
      <div className='basis-1/2'>
        <div className='flex items-center justify-between pr-10'>
          <img src='/logo.svg' alt='' />

          <label className='switch'>
            <input type='checkbox' className='checkbox' />
            <span className='toggle-thumb'>
              <span className='text-[7px]'>light</span>
              <span></span>
            </span>
          </label>
        </div>
      </div>

      <div className='basis-1/2'>
        <div className='flex  justify-between items-center'>
          <span className='h-[50px]  border-l-2 border-[#EDEDED]'></span>
          <div className='basis-3/4 flex justify-around px-[18px]'>
            <img src='/chevron-right.svg' alt='' />
            <div>
              <p className='text-[10px]'>CASH BALANCE</p>
            </div>
            <div>
              <p className='text-[10px]'>WALLET BALANCE</p>
            </div>
            <div>
              <p className='text-[10px]'>LOAN BALANCE</p>
            </div>
          </div>
          <span className='h-[52px]  border-l-2 border-[#EDEDED]'></span>
          <div className='basis-1/4'>
            <div className='flex gap-[8px] justify-end'>
              <p className='text-[10px] text-white p-1 font-bold bg-[#1E1E1E]'>DEMO</p>
              <img src='/chevron-down.svg' alt='' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
