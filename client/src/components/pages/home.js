import React from 'react';
import logoImg from '../../../public/images/brickworks-logo.svg';

class Home extends React.Component {
  
  constructor(props){
  super(props)
  this.state= {
    name: null
  }
  }
  
  addEvent = () => {
    this.props.history.push('/social-actions');
  }

  render() {
    return( 
        <div className='wrapper'>
          <main data-testid="home-page">
          
          
            <figure id='logo'>
              <img id='logo-img' src={logoImg} alt='Brickworks logo'/>
            </figure> 
                
            <h2 className='hub-description-four'>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action and supports local people to build the community and create a better society.
            </h2>
           
            <button className='button-large' onClick={this.addEvent}>Get Involved</button>
          </main>
        </div>
    )}
}

export default Home;

