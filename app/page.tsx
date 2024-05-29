"use client"
import Head from 'next/head';
import BackgroundVideo from '../components/BackgroundVideo';

const Home = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <Head>
        <title>Next.js Background Video</title>
        <meta name="description" content="Background video example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <BackgroundVideo videoId="HlEuo9aR7Qo" />

      <div className="relative z-10 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
        <h1 className="text-4xl text-white">Hello, World!</h1>
      </div>
    </div>
  );
};

export default Home;
