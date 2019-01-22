import React from 'react';
import logoImg from '../../../../public/images/brickworks-logo.svg';

class HomeContent extends React.Component {
    render() {
        return(
<figure id='logo'>
              <img id='logo-img' src={logoImg} alt='Brickworks logo'/>
              <figcaption className='intro'>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action and supports local people to build the community and create a better society
              </figcaption>
            </figure>
        )

    }
}

export default HomeContent;