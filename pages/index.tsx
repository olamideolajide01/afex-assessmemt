import Head from "next/head";
import DashboardLayout from "../components/DashboardLayout";
import SideNav from "../components/SideNav";
import OrderLayout from "./OrderLayout";
import OrderBook from "../components/OrderBook";

export default function Dashbord() {
  return (
    <>
      <Head>
        <title>Afex Assessment</title>
        <meta name='description' content='Comx trade, buying and selling farm products' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <DashboardLayout>
          <section className='flex gap-2'>
            <OrderLayout>
              <OrderBook />
            </OrderLayout>
          </section>
        </DashboardLayout>
      </main>
    </>
  );
}
