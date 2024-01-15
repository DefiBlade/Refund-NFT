import "./RoadMap.scss";

import video from "../../assets/videos/Mustache6.mp4";
import Faq from "react-faq-component";
import desert from "../../assets/images/desert.gif";

export const RoadMap = () => {
  const faqInfo = {
    rows: [
      {
        title: "Wait, what? A Mustache NFT?",
        content:
          "Ya, totally. Super weird.  But the way we see it, do people really want to shell out a bunch of eth for yet another dumb ass panda with a funny hat?   We’re putting everything we’ve got behind this project but if it doesn’t moon, how funny will it be when you’re looking through your bag and you see this magnificent Mo??  Answer: Filarious.",
      },
      {
        title: "Why Mustaches? Why now?",
        content:
          "Solid question.  For the past 18 years, the Movember Movement has inspired dudes (and some very unlucky women) to grow a Mo to raise money and awareness for men’s health issues through the month of November.  If you took a time machine back to November 2006 and opened your grandma’s Facebook account you’d prolly see some vintage profile pic of people who never ordinarily grow facial hair, with some pretty sweet ‘staches.    We figured the whole ‘Profile Pic’ thing needed an update and November 2021 seemed like a smart time to launch. ",
      },
      {
        title: "What happens to Mo’s for Bros after Movember?",
        content:
          "Movember just seemed like a good time to launch this thing-- but we intend to be around for a long time. We’ll be collaborating with IRL Men’s Health organizations and plan to build a Men’s Health ecosystem comprised of utility, community, rewards and growth. We want the community to help determine what we should focus on next - so every Bro (or Sis) with a Mo’ has a say in the future of Mo’s for Bros!",
      },
      {
        title: "3030 NFTs is a bit of an odd series number?  What’s the deal?",
        content:
          "Good sleuthing, Watson (which is also the name of one of our Mo’s).  The series of 3000 NFTs are going to be an A+ collection of sexy Mo’  with built-in rarity and killer art.  There will also be 30 Ultra Rare Mo’s designed to represent the leading issues in Men’s Health: Prostate Cancer, Testicular Cancer and Mental Health.  We’ll be teasing the art in our Discord. ",
      },
      {
        title:
          "Good for you for raising money for charity, but why men’s health issues?",
        content:
          "Again, good question.  In a nutshell, because things like prostate cancer, testicular (hee hee) cancer and men’s mental health issues kinda get ignored.  And the fact is, MOST people in the NFT and crypto community are dudes. And, while I wouldn’t wish it on any of us, there’s a damn good chance one or two of us will be affected by it.   We’re doing everything we can to front load the Karma ledger.",
      },
      {
        title: "But Bro, have you seen GAS prices?",
        content:
          "Ya, man… of course we have.  And we’re hoping you’re either a degen who’ll buy almost anything or you see the merit in what we’re trying to do and ape in, anyway. ",
      },
      {
        title: "Ok, fine. But who are you knuckleheads?",
        content:
          "Bro, we’ve been doing this since the world wide web was delivered on a 36k modem. We’ve worked in music, TV, fashion, advertising, politics and even in the web3/blockchain whos-a-whats-a.  We’ve done the hustle, the Hollywood thing, the Silicon Valley thing and the New York Pimp thing (100% not true). We’re 100% doxed with our names & bios available on our site, <a href='https://CreativeDepartmint.com' target='_blank'>CreativeDepartmint.com.</a> ",
      },
      {
        title: "I’m ready to FOMO on the Mo’s, Bro.",
        content:
          "Urgh, finally!  Download the MetaMask thingamajig, connect your wallet and do the stuff that the internet machine tells you to do. Or don’t. And if you're still having issues, get on Discord and ask one of our Mods. They are A+ and will help you get sorted.",
      },
    ],
  };

  const config = {
    arrowIcon: "",
  };

  return (
    <section className="roadMap contentWrapper" id="faq">
      <div className="roadMap__title">
        {/* <h1 className="section__title">FAQ</h1> */}
      </div>
      <div className="roadMap__description">
        {/* <Faq data={faqInfo} config={config} /> */}
      </div>

      <div className="roadMap__picture">
        <img alt="back" src={desert} style={{ width: "100%", marginTop: "50px" }}></img>
      </div>
    </section>
  );
};

export default RoadMap;
