import React from 'react';
import { Link } from "react-router-dom";
import List from '../mainPageComponents/list';
class TopTen extends React.Component {

componentDidMount = () => {
    if(process.env.NODE_ENV !== "test"){
    window.scrollTo(0,0);
    }
}

render() {
    return (
    <main data-testid="topten-page" className='wrapper'>
            <List />
            <hr className="style2"></hr>
            <div className='top-ten-links'>
            <label htmlFor="all-events">
                <Link to='/start-social-action'><p className='a-links'>Click here to register an interest to start a social action!</p></Link>
            </label>

            <p className='question-two'>I am already carrying out a social action, I want to collaborate with others to build it further</p>
            
            <label htmlFor="list-event">
                <Link to='/promote-social-action'><p className='a-links'>Click here to register an interest to promote a social action</p></Link>
            </label>
            </div>
    </main>
    )
}
}
export {TopTen};
