import React from 'react';
import BikeImg from '../../../../public/images/bike.jpg';

class Bike extends React.Component {
    render(){
        return(
            <figure>
                <img id='bike-img' src={BikeImg} alt='bike photo'></img>
            </figure>
        )
    }
}
export default Bike