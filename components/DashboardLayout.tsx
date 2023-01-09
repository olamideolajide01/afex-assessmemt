import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
// import SideNav from "./SideNav";
import AppBar from "./AppBar";
import FooterSection from "./FooterSection";
import SideNav from "./SideNav";

function DashboardLayout(props) {
  useEffect(() => {}, []);

  return (
    <div className='overflow-hidden'>
      <div className='flex h-screen bg-[#e5e5e5]'>
        {/* <CssBaseline /> */}

        <div className='h-screen w-full mx-auto overflow-y-hidden   overflow-x-hidden'>
          <div className='bg-white top-0 z-60 px-[17px]'>
            <AppBar />
          </div>

          <div className={`flex flex-row gap-2 max-h-full w-full`}>
            <aside className=' h-screen  bg-white'>
              <SideNav />
            </aside>
            <div className=' h-screen w-full'>{props.children}</div>
          </div>
          <div className='bottom-0 bg-white fixed w-full  z-50'>
            <FooterSection />
          </div>
        </div>
      </div>
    </div>
  );
}

DashboardLayout.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default DashboardLayout;
