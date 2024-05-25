import { useState } from 'react';
import './App.css';
import mw from 'mw';
import type { IGetUserPoapsResult } from '@game/db';
import { WalletMode } from '@paima/sdk/providers';

function App() {
  const [poaps, setPoaps] = useState<IGetUserPoapsResult[]>([]);
  const [wallet, setWallet] = useState('');

  const fetchPoaps = async (userWallet: string) => {
    const response = await mw.getOwnedPoaps(userWallet);
    if (!response.success) {
      console.log('Failed to fetch your POAPs');
    } else {
      setPoaps(response.result.poaps);
    }
  };

  const poapAppendEventData = async (poap: IGetUserPoapsResult) => {
    const response = await mw.appendEventData(poap.address, poap.nft_id);
    console.log({ response });
    if (response.success) {
      const newPoaps = poaps.map(c =>
        c.nft_id === poap.nft_id ? response.result.poap : c
      );
      setPoaps(newPoaps);
    } else {
      console.log('Failed to append data of new event to poap:', response.errorMessage, response.errorCode);
      fetchPoaps(wallet);
    }
  };

  async function userWalletLogin() {
    const response = await mw.userWalletLogin({
      mode: WalletMode.EvmInjected,
      preferBatchedMode: false,
    });
    if (!response.success) {
      console.log('Error while logging in address:', response.errorMessage, response.errorCode);
    } else {
      const { walletAddress } = response.result;
      console.log('Successfully logged in address:', walletAddress);
      setWallet(walletAddress);
      fetchPoaps(walletAddress);
    }
  }

  const hasPoaps = poaps.length > 0;

  return (
    <div className="container">
      <header>
        <h1>Stateful POAP</h1>
      </header>
      <main>
        <div>
          {wallet ? <p>Wallet: {wallet}</p> : <p>Wallet: No wallet connected</p>}
          <div className="button-group">
            <button onClick={userWalletLogin}>User Wallet Login</button>
            <button onClick={() => fetchPoaps(wallet)}>Refresh</button>
          </div>
        </div>
        {wallet && (
          <>
            {hasPoaps ? (
              <div className="poaps">
                {poaps.map(poap => (
                  <div key={poap.nft_id} className={`poap poap-${poap.type}`}>
                    <p>
                      {poap.type} lvl. {poap.level}
                    </p>
                    <button onClick={() => poapAppendEventData(poap)}>Lvl Up</button>
                  </div>
                ))}
              </div>
            ) : (
              <p>
                You don't own any characters. Look into <code>frontend-nft-sale</code> directory to
                test buying some.
              </p>
            )}
          </>
        )}
      </main>
    </div>
  );
}

export default App;
