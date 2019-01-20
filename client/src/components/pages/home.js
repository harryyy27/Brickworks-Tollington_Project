import React from 'react';
import logoImg from '../../../public/images/brickworks-logo.svg';

class Home extends React.Component {
  
componentDidMount = () => {
  window.scrollTo(0,0);
}

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
        
          <main className='wrapper' 
                data-testid="home-page">
          
          
            <figure id='logo'>
              <img id='logo-img' src={logoImg} alt='Brickworks logo'/>
              <figcaption className='intro'>Brickworks is a social-action hub rooted in Tollington that actively fosters grass-roots action and supports local people to build the community and create a better society.
            </figcaption>
            </figure> 
                
            
           
            <button className='button-large' onClick={this.addEvent}>Get Involved</button>
          </main>
        
    )}
}

export default Home;

