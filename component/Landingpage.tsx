"use client"
import { generateMnemonic } from "bip39";
import {EthWallet} from "./EthWallet"
import { SolanaWallet } from "./SolanaWallet" 
import { useState } from "react";

export const LnadingPage = () => {
    const [mnemonic, SetMnemonic] = useState("")

    return <div className="flex justify-center flex-col items-center space-y-10">
         <div className="pt-32 space-x-5 flex items-center">
            <div className="border">
               <div className="w-[200px] h-[100px] text-white font-bold bg-black/55 p-1">
                  {mnemonic}
               </div>
            </div>
            <button className="rounded-2xl px-3 h-10 bg-green-800 text-white" onClick={() => {
               const mn =  generateMnemonic()
               SetMnemonic(mn)
            }}
                        
            >Generate Seed Phrase</button>
         </div>
         {mnemonic && <EthWallet mnemonic={mnemonic} />}
         {mnemonic && <SolanaWallet  mnemonic={mnemonic}/>}
    </div>
}