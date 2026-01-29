"use client"
import { mnemonicToSeed } from "bip39"
import { derivePath } from "ed25519-hd-key";
import { Keypair } from "@solana/web3.js"
import nacl from "tweetnacl"
import { useState } from "react";

export function SolanaWallet  ({mnemonic}) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [publicAddress, SetpublicAddress] = useState([]);
    
    return <div>
        <button className="rounded-2xl px-3 h-10 bg-pink-800 text-white" onClick={async () => {
            const seed = await mnemonicToSeed(mnemonic);
            const path = `m/44'/501'/${currentIndex}'/0'`;
            const derivedSeed = derivePath(path,seed.toString("hex")).key;
            const secret = nacl.sign.keyPair.fromSeed(derivedSeed).secretKey;
            const keypair = Keypair.fromSecretKey(secret);
            setCurrentIndex(currentIndex + 1);
            SetpublicAddress([...publicAddress, keypair.publicKey]);
        }}>
            Add SOL Wallet
        </button>

        {publicAddress.map((p, index) => <div key={index}>
            {p.toBase58()}  
        </div>)}
    </div>
}