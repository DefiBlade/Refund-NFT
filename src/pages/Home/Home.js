import "./Home.scss";
import NavBar from "../../components/NavBar/NavBar";
import Intro from "../../components/Intro/Intro";
import Specs from "../../components/Specs/Specs";
import Club from "../../components/Club/Club";
import BathRoom from "../../components/BathRoom/BathRoom";
import Gallery from "../../components/Gallery/Gallery";
import RoadMap from "../../components/RoadMap/RoadMap";
import Team from "../../components/Team/Team";
import Footer from "../../components/Footer/Footer";
import { useState, useEffect } from "react";
import { mintNFT, mintFeeNFT } from "../../helpers/interact";
import { connectWallet, getCurrentWalletConnected } from "../../helpers/wallet";
import { getIsWhiteList } from "../../helpers/contract";
import { NotificationManager } from "react-notifications";

export const Home = () => {
  const [isWhiteList, setIsWhiteList] = useState(false);
  const [mintLoading, setMintLoading] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [status, setStatus] = useState("");

  useEffect(() => {
    const initDatas = async () => {
      if (window.ethereum) {
        const { address, status } = await getCurrentWalletConnected();
        setWalletAddress(address);
        setStatus(status);
        onChangeWalletListener();
        onConnectWalletHandler();
      }
    };

    initDatas();
  }, []);

  const onConnectWalletHandler = async () => {
    if (window.ethereum) {
      const walletResponse = await connectWallet();
      setStatus(walletResponse.status);
      setWalletAddress(walletResponse.address);
      // await onWhiteListHandler(walletResponse.address);
    } else {
      NotificationManager.success(
        "🦊 You must install Metamask in your browser"
      );
    }
  };

  const onChangeWalletListener = () => {
    if (window.ethereum) {
      window.ethereum.on("accountsChanged", (accounts) => {
        if (accounts.length) {
          setWalletAddress(accounts[0]);
          // onWhiteListHandler(accounts[0]);
          setStatus("Get your Refund, 0.01ETH");
        } else {
          setWalletAddress("");
          setStatus("Connect Metamask");
        }
      }); 

      window.ethereum.on("chainChanged", (chainId) => {
        onConnectWalletHandler();
      });
    } else {
      setStatus(
        <p>
          🦊 You must install Metamask, a virtual Ethereum wallet, in your
          browser.(https://metamask.io/download.html)
        </p>
      );
    }
  };

  const onWhiteListHandler = async (walletAddress) => {
    const whiteNum = await getIsWhiteList(walletAddress);
    setIsWhiteList(whiteNum > 0 ? true : false);
  };

  const onMintHandler = async (amount) => {
    if (!!walletAddress) {
      setMintLoading(true);

        const { success, status } = await mintNFT(
          walletAddress,
          setMintLoading,
          amount
        );
        if (success) {
          setStatus("Congratulations", "Refund is successfully minted !");
          NotificationManager.success(
            "Congratulations. Refund is successfully minted!"
          );
        } else if (status.indexOf("insufficient fund") >= 0) {
          setStatus("Info", "You don't have enough eths to mint Refund!");
          NotificationManager.info("You don't have enough eths to mint Refund!");
        } else if (status.indexOf("presale is not open") >= 0) {
          NotificationManager.info("Presale is not open!");
        } else if (
          status.indexOf("this address is not whitelisted for the presale") >= 0
        ) {
          NotificationManager.info(
            "This address is not whitelisted for the presale!"
          );
        } else if (
          status.indexOf(
            "this address is not allowed to mint that many during the presale"
          ) >= 0
        ) {
          NotificationManager.info(
            "This address is not allowed to mint that many during the presale!"
          );
        } else {
          NotificationManager.info("Transaction is failed!");
        }
      
    }
  };

  return (
    <div>
      <NavBar />

      <div className="container">
        <Intro
          walletAddress={walletAddress}
          onConnectWalletHandler={onConnectWalletHandler}
          mintLoading={mintLoading}
          onMintHandler={onMintHandler}
        />
        <RoadMap />

        <Specs />
        {/* <Club /> */}
        <Gallery />
        <Team />
      </div>

      <Footer />
    </div>
  );
};

export default Home;
