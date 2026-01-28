"use client"
import { generateMnemonic } from "bip39";
import {EthWallet} from "./EthWallet"
import { useState } from "react";

export const LnadingPage = () => {
    const [mnemonic, SetMnemonic] = useState("")

    return <div className="flex justify-center">
         <div className="pt-32">
            <input className="border" type="text" value={mnemonic} />
            <button onClick={() => {
               const mn =  generateMnemonic()
               SetMnemonic(mn)
            }}
                        
            >Generate Seed Phrase</button>


            {mnemonic && <EthWallet mnemonic={mnemonic} />}
         </div>
    </div>
}