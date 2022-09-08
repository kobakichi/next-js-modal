import type { NextPage } from "next";
import Head from "next/head";
import Modal from "../components/Modal";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Modal practice</title>
      </Head>
      <Modal />
    </>
  );
};

export default Home;
