/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

export default function SideNav() {
  const router = useRouter();
  const [active, setActive] = useState(1);

  const menu = [
    {
      id: 1,
      path: "/",
      title: "Market",
      icon: "/nav-drawer/market-error.svg",
      iconInactive: "/nav-drawer/market.svg",
      page: "market",
    },
  ];
  const menu2 = [
    {
      title: "Overview",
      icon: "/nav-drawer/overview.svg",
    },

    {
      title: "Portfolio",
      icon: "/nav-drawer/briefcase.svg",
    },
    {
      title: "Community",
      icon: "/nav-drawer/community.svg",
    },
    {
      title: "Report",
      icon: "/nav-drawer/report.svg",
    },
    {
      title: "Setting",
      icon: "/nav-drawer/settings.svg",
    },
  ];

  return (
    <section className='h-full px-[17px] '>
      <div className=''>
        <div className='flex flex-col justify-center items-center pt-10 mb-10'>
          <img src='/nav-drawer/overview.svg' alt='' />
          <h2 className='text-text text-xs mt-[9px]'>Overview</h2>
        </div>
        {menu?.map((menu) => (
          <Link key={menu.id} href={menu.path}>
            {active === menu.id && (
              <div className='flex flex-col justify-center items-center mt-10'>
                <div className=' h-auto'>
                  {router.pathname == menu.path || router.pathname.includes(menu.page) ? (
                    <img src={menu.icon} alt='' />
                  ) : (
                    <img src={menu.iconInactive} alt='' />
                  )}
                </div>
                <div className='mt-[9px]'>
                  <h2
                    className={`text-xs ${
                      router.pathname == menu.path || router.pathname.includes(menu.page)
                        ? "text-error"
                        : "text-text"
                    }`}
                  >
                    {menu.title}
                  </h2>
                </div>
              </div>
            )}
          </Link>
        ))}

        {menu2?.map((menu, i) => (
          <div key={i}>
            <div className='flex flex-col justify-center items-center mt-10'>
              <div className=' h-auto'>
                <img src={menu.icon} alt='' />
              </div>
              <div className='mt-[9px]'>
                <h2 className={`text-xs text-text`}>{menu.title}</h2>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
