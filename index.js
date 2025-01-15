
import Head from 'next/head';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-800 text-white flex flex-col items-center justify-center">
      <Head>
        <title>Datasphere</title>
        <meta name="description" content="Datasphere - Your gateway to Solana Web3" />
      </Head>
      <h1 className="text-5xl font-bold mb-6">Welcome to Datasphere</h1>
      <p className="text-xl text-gray-300 mb-4">Explore the Solana-powered Web3 world.</p>
      <button className="px-6 py-3 bg-blue-600 rounded-md hover:bg-blue-700">Connect Wallet</button>
    </div>
  );
}
