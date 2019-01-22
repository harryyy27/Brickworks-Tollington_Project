import React from 'react';
import tickIcon from '../../../../public/images/tick.png';
import crossIcon from '../../../../public/images/cancel.svg';
import { render } from 'react-testing-library';

class NameIcon extends React.Component {

    updateImg = (valid) => {
        const nicon = document.getElementById("name-icon");
      if(valid==='valid'){
        nicon.src=tickIcon;
        nicon.className = "validate"
        nicon.parentElement.className = "validate"
      }
      else {
        nicon.src=crossIcon;
        nicon.className = "validate"
        nicon.parentElement.className = "validate"
      }
    }
    render() {
        return(
          <figure>
            <img id="name-icon" className="invisible" alt="validation"></img>
          </figure>
        )
    }
    
}

class EmailIcon extends React.Component{
    updateImg = (valid) => {
        const eicon = document.getElementById("email-icon");
        if(valid==="valid"){
          eicon.src=tickIcon;
          eicon.className = "validate"
          eicon.parentElement.className = "validate"
        }
        else {
          eicon.src=crossIcon;
          eicon.className = "validate"
          eicon.parentElement.className = "validate"
        }
    }
    render(){
    return(
      <figure>
        <img id="email-icon" className="invisible" alt="validation"></img>
      </figure>
    )
}

}

class DesIcon extends React.Component {
    updateImg = (valid) => {
        const dicon = document.getElementById("des-icon");
        if(valid==="valid"){
          dicon.src=tickIcon;
          dicon.className = "validate"
          dicon.parentElement.className = "validate"
        }
        else {
          dicon.src=crossIcon;
          dicon.className = "validate"
          dicon.parentElement.className = "validate"
        }
    }
    render(){
    return(
        <figure>
            <img id="des-icon" className="invisible" alt="validation"></img>
        </figure>
    )
}
}

export { NameIcon, EmailIcon, DesIcon }