import React from 'react';
import logoImg from '../../../../public/images/brickworks-logo-2.svg';

class HeaderLogo extends React.Component {
    componentDidMount=()=>{
        const brickLogo=document.getElementById('logo-wrapper');
        brickLogo.addEventListener("keydown", (e)=>{
            switch(e.key){
                case "Enter":
                this.props.takeMeHome();
                break;
            }
        })
    }
    render(){
        return(
            <figure tabIndex="0" id="logo-wrapper" onClick={this.props.takeMeHome}>     
                <img id='logo-nav' src={logoImg} alt='Brickworks logo'/>
                <figcaption id='name-nav'>RICKWORKS</figcaption>        
            </figure>
        )
    }
}

export default HeaderLogo;