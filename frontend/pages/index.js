import "../styles/index.scss";
import Head from "next/head";
import web3 from "../src/web3";
import SimpleDropbox from "../src/SimpleDropbox";
import { useEffect, useState } from "react";
import Header from "../components/Header";
import Loading from "./../components/Loading";

export default function Home() {
  const [user, setUser] = useState("");
  const [loading, setLoading] = useState(false);
  const [owner, setOwner] = useState("");
  const [filesCount, setFilesCount] = useState(0);

  useEffect(() => {
    loadBlockchain();
  }, []);

  const loadBlockchain = async () => {
    setLoading(true);
    // Load web3 to connect with metamask
    if (web3) {
      const users = await web3.eth.getAccounts();
      setUser(users[0]);
    }

    // Fetch Owner
    const owner = await SimpleDropbox.methods.owner().call();
    setOwner(owner);

    // Fetch the number of files
    const count = await SimpleDropbox.methods.getLength().call();
    setFilesCount(count);

    setLoading(false);
  };

  return (
    <>
      <Head>
        <title>Simple Dropbox by Akash</title>
        <meta
          name='description'
          content='This is a simple dropbox created using IPFS technology where anybody can store files and read them at anytime. For this, one has to be connected to Ethereum rinkeby testnet.'
        />
      </Head>

      <main className='body'>
        {loading && <Loading />}
        <Header user={user} />
        <div className='container'>
          <p>Owner: {owner}</p>
          <p>My files: {filesCount} files</p>
        </div>
      </main>
    </>
  );
}
