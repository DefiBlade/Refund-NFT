import './Footer.scss';
import discordIcon from '../../assets/images/discord.svg';
import instagramIcon from '../../assets/images/instagram.svg';
import twitterIcon from '../../assets/images/twitter.svg';
import homeIcon from '../../assets/images/home.png';
import telegramIcon from '../../assets/images/telegram.png';

export const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__siteName">Refund NFT is a division of Nour Allam Inc.</div>
            <div className="footer__links">
                <a href="/">
                    <img src={homeIcon} alt="icon2"></img>
                </a>
                {/* <a href="#javascript">
                    <img src={instagramIcon} alt="icon1"></img>
                </a> */}
                <a href="https://t.me/RFDPortal">
                    <img src={telegramIcon} alt="icon2"></img>
                </a>
                <a href="https://twitter.com/RefundCoinETH">
                    <img src={twitterIcon} alt="icon2"></img>
                </a>
                {/* <a href="#javascript">
                    <img src={telegramIcon} alt="icon2"></img>
                </a> */}
            </div>
            <div className="footer__copyright">© 2023 refundcoin</div>
        </div>
    )
}

export default Footer;