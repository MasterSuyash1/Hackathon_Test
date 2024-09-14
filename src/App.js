import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import UsersPage from './components/UsersPage';
import FriendPage from './components/FriendPage';
import ChatPage from './components/ChatPage';
import Footer from './components/Footer';
import './App.css'; // Include your CSS file for styling

function App() {
  const [walletAddress, setWalletAddress] = useState(null);

  const connectWallet = async () => {
    if (window.ethereum) {
      try {
        const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
        setWalletAddress(accounts[0]);
      } catch (error) {
        console.error("Wallet connection failed:", error);
      }
    } else {
      alert("MetaMask is not installed. Please install it to use this DApp.");
    }
  };

  return (
    <>
      <Navbar connectWallet={connectWallet} walletAddress={walletAddress} />
      <Hero />
      <Features />
      <section id="users">
        <UsersPage />
      </section>
      <section id="friend">
        {walletAddress ? <FriendPage /> : <p>Please connect your wallet to see your friends.</p>}
      </section>
      <section id="chat">
        <ChatPage />
      </section>
      <Footer />
    </>
  );
}

export default App;

