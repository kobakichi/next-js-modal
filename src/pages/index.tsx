import type { NextPage } from 'next';
import Head from 'next/head';
import Modal from '../components/Modal';
import Sidebar from '../components/Sidebar';
import { handleLink } from './modal';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modal practice</title>
      </Head>
      <Sidebar />
      <Modal />
      <div className='flex md:flex-col justify-center items-center'>
        <button
          onClick={() => handleLink('/modal')}
          className='flex justify-center my-10 text-2xl bg-green-500  border-solid  border-2 border-slate-500 rounded-md px-6 h-12 items-center'
        >
          modalページへ
        </button>
      </div>
    </>
  );
};

export default Home;
