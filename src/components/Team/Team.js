import './Team.scss';

import photo1 from '../../assets/images/ape3.png';
import photo2 from '../../assets/images/Steve Fowler.png';
import photo3 from '../../assets/images/Thomas Wu.png';
import photo4 from '../../assets/images/ape1.png';
import { ENVS } from "../../helpers/configurations/index"

export const Team = () => {
    const teamInfo = [
        {
            name: 'Nour Allam',
            position: 'Investor',
            address: 'TestAddress',
            photo: photo1,
            color: '#123456',
        },
        // {
        //     name: 'Steven Fowler.',
        //     position: 'Social/marketing',
        //     address: 'TestAddress',
        //     photo: photo2,
        //     color: '#123456',
        // },
        // {
        //     name: 'Thomas Wu.',
        //     position: 'Community',
        //     address: 'TestAddress',
        //     photo: photo3,
        //     color: '#123456',
        // },
        {
            name: 'Artur.A',
            position: 'Development',
            address: 'TestAddress',
            photo: photo4,
            color: '#123456',
        },
    ]

    const scanUrl = ENVS.CHAIN_ID == "0x5" ? "https://goerli.etherscan.io/address/" : "https://etherscan.io/address/";

    return (
        <section className="team contentWrapper" id="team">
            <div className="team__title">
                <h1 className="section__title">
                    THE TEAM
                </h1>
            </div>
            <div className="team__people">
                {
                    teamInfo.map(( item, index ) => (
                        <div className="team__people__member" key={index}>
                            <div className="team__people__member__photo">
                                <img alt="img" src={ item.photo }></img>
                            </div>
        
                            <div className="team__people__member__info" style={{ backgroundColor: item.color }}>
                                <p>{ item.name }</p>
                                <p>{ item.position }</p>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className="team__contractAddress">
                <span>VERIFIED SMART CONTRACT ADDRESS: &nbsp;</span>
                <a href={`${scanUrl}/${ENVS.CONTRACT_ADDRESS}`}>
                    {ENVS.CONTRACT_ADDRESS}
                </a>
            </div>
        </section>
    )
}

export default Team;