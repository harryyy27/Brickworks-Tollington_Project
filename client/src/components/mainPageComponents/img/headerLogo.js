import React from 'react';
import logoImg from '../../../../public/images/brickworks-logo-2.svg';

class HeaderLogo extends React.Component {

    render(){
        return(
            <figure id="logo-wrapper" onClick={this.takeMeHome}>     
                <img id='logo-nav' src={logoImg} alt='Brickworks logo'/>
                <figcaption id='name-nav'>RICKWORKS</figcaption>        
            </figure>
        )
    }
}

export default HeaderLogo;