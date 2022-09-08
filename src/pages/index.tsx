import type { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import Modal from '../components/Modal';

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modal practice</title>
      </Head>
      <Modal />
      <Link href='/modal'>
        <a className='flex justify-center my-10 text-5xl'>modalページへ</a>
      </Link>
    </>
  );
};

export default Home;
