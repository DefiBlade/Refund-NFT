import "./Specs.scss";

import desert from "../../assets/images/gold.gif";

export const Specs = () => {
  return (
    <section className="specs contentWrapper">
      <div className="specs__content">
        <h1 className="section__title">THE SPECS</h1>
        <p className="section__desc">
          Each NFT is programmatically generated from dozens of traits
          including  styles, materials, colors and textures.  <br />
          <br />
          Each meticulously hand-quaffed Refund is stored as an ERC-721A token on the Ethereum blockchain and hosted on IPFS. Each one is priced at a super low 0.01 ETH.
          <br />
          <br />
          EVERY NFT mint comes with a free meme-able PNG that allows you to take YOUR on-chain, dynamically created, algorithmically unique, one-of-a-kind png refund.
        </p>
      </div>

      <div className="specs__picture">
        <img alt="back" src={desert} style={{ width: "90%" }}></img>
      </div>
    </section>
  );
};

export default Specs;
