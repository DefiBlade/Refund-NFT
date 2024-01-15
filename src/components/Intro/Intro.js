import { NotificationManager } from "react-notifications";

import "./Intro.scss";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

import img1 from "../../assets/images/ape1.png";
import img2 from "../../assets/images/ape2.png";
import img3 from "../../assets/images/ape3.png";
import img4 from "../../assets/images/ape4.png";

import back from "../../assets/images/bayc-mutant-hero.gif";
import MinusBtn from "../../assets/images/minus-rectangle_1.svg";
import PlusBtn from "../../assets/images/plus-rectangle_1.svg";

export const Intro = ({
  walletAddress,
  onConnectWalletHandler,
  mintLoading,
  onMintHandler,
}) => {
  const [number, setNumber] = useState(1);
  const [total, setTotal] = useState(0.01);
  const actionMinus = () => {
    let index = number - 1;
    setNumber(index);
    setTotal(index * 0.01);
  };

  const actionPlus = () => {
    let index = number + 1;
    setNumber(index);
    setTotal(index * 0.01);
  };

  const buyAPE = () => {
    NotificationManager.success("Success!");
  };

  const mintAction = () => {
    onMintHandler(number);
  };

  return (
    <section className="intro" id="intro">
      <div className="intro__back">
        <img alt="back" src={back}></img>
      </div>

      <div className="contentWrapper">
        <div className="intro__fair" id="buy">
          <div className="intro__fair__title">Mint a Refund </div>
          <div className="intro__fair__mint">
            <div className="intro__fair__mint__title">
              <button
                className="navBar__btn__connect"
                onClick={() => onConnectWalletHandler()}
              >
                {walletAddress === "" ? "Connect Wallet" : walletAddress}
              </button>
            </div>
            <div className="intro__fair__mint__counter">
              <button onClick={() => (number > 1 ? actionMinus() : null)}>
                <img src={MinusBtn} alt="pic1"></img>
              </button>
              <div>{number}</div>
              <button onClick={() => (number < 20 ? actionPlus() : null)}>
                <img src={PlusBtn} alt="pic1"></img>
              </button>
            </div>
            <div className="intro__fair__mint__wrapper">
              <button
                type="button"
                onClick={() => {
                  if (!mintLoading) mintAction();
                }}
              >
                {mintLoading && (
                  <FontAwesomeIcon
                    className="mint-spinner"
                    icon={faSpinner}
                    size="1x"
                  />
                )}
                &nbsp;Mint Refund's for {total} ETH
              </button>
            </div>
          </div>
        </div>
        <div className="intro__welcome">
          <div className="intro__welcome__desc">
            <h1 className="section__title">About Refund</h1>
            <p className="section__desc">
              Welcome to the collection of unique Non-Fungible Tokens (NFTs)
              with a purpose! <br />
              <br />
              <b>
                Each NFT you purchase from this collection contributes to a
                powerful initiative aimed at creating positive change in the
                crypto community. we are committed to using the funds generated
                from the sale of these NFTs to support the burning of Refund
                Coin (rfd), a groundbreaking token designed to promote fairness,
                transparency, and sustainability within the crypto ecosystem.
              </b>
              <br />
              <br />
              By acquiring one of these captivating NFTs, you become an
              essential part of the movement toward a more trustworthy and
              resilient crypto space. <br></br>
              Your support not only adds value to your personal collection but
              also directly contributes to the continuous burning of RFD,
              reducing their overall supply and reinforcing the principles of
              accountability and responsibility within the industry. <br></br>
            </p>
            Together, we can make a lasting impact by supporting the burning of
            RefundCoin. <br></br>The creator's earnings will also be used to burn RFD
            coin
          </div>

          <div className="intro__welcome__pictures">
            <div>
              <img alt="img" src={img1}></img>
            </div>
            <div>
              <img alt="img" src={img2}></img>
            </div>
            <div>
              <img alt="img" src={img3}></img>
            </div>
            <div>
              <img alt="img" src={img4}></img>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
