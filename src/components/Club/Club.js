import "./Club.scss";
import pic1 from "../../assets/images/map1.png";
import pic2 from "../../assets/images/map2.png";
import pic3 from "../../assets/images/map3.png";
import pic4 from "../../assets/images/map4.png";
import pic5 from "../../assets/images/map5.png";
import pic6 from "../../assets/images/map6.png";
import pic7 from "../../assets/images/map7.png";


export const Club = () => {
  return (
    <section className="club contentWrapper" id="roadmap">
      <h1 className="section__title">MO'ED MAP</h1>
      <div className="club__item ">
        <div><img alt="img" src={pic1}></img></div>
        <p className="section__desc">
          20%: We’ll mint EVERY Bro with a Mo’ a FREE NFT of their Mo on their
          favorite PFP (1 PFP per Mo’){" "}
        </p>
      </div>
      <div className="club__item ">
      <div><img alt="img" src={pic2}></img></div>
        <p className="section__desc">
          40%: 10 Rare Mo’s airdropped to existing Holders.
        </p>
      </div>
      <div className="club__item ">
      <div><img alt="img" src={pic3}></img></div>
        <p className="section__desc">
          50%: Gas Money: We’ll cover gas fees for 40 holders (up to 1E)
        </p>
      </div>
      <div className="club__item ">
      <div><img alt="img" src={pic4}></img></div>
        <p className="section__desc">
          60%: 2.5E Donation: .5E donation made to a Men’s Health charity in the
          names of each of the top 5 Mo-holding PFP Tribes who post their Mo as
          their Discord, Twitter or OpenSea PFP
        </p>
      </div>
      <div className="club__item ">
      <div><img alt="img" src={pic5}></img></div>
        <p className="section__desc">
          80%: 10 Ultra-rare animated Mo’s dropped to existing Holders.{" "}
        </p>
      </div>
      <div className="club__item ">
      <div><img alt="img" src={pic6}></img></div>
        <p className="section__desc">
          90%: 10 exclusive eerieum_ NFTs from the \V/alue Collection (dropping
          late November) dropped to holders.
        </p>
      </div>
      <div className="club__item ">
      <div><img alt="img" src={pic7}></img></div>
        <p className="section__desc">
          100%: Activate plans to Launch Men’s Health facility in the Metaverse{" "}
        </p>
      </div>
    </section>
  );
};

export default Club;
