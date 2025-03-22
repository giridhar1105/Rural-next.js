"use client";

import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";

export const connectPhantom = async () => {
  if ("solana" in window) {
    const provider = window.solana;
    if (provider.isPhantom) {
      try {
        const response = await provider.connect();
        return response.publicKey.toString();
      } catch (err) {
        console.error("User rejected the connection", err);
      }
    }
  } else {
    window.open("https://phantom.app/", "_blank");
  }
};

export const getConnection = () => {
  return new Connection(clusterApiUrl("devnet"), "confirmed");
};

export const getBalance = async (publicKey: string) => {
  const connection = getConnection();
  const balance = await connection.getBalance(new PublicKey(publicKey));
  return balance / 1000000000; // Convert lamports to SOL
};