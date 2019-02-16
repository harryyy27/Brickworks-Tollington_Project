import React from 'react'
import {textAlt} from '../utils/textAlt';
import { render } from 'react-testing-library';

class List extends React.Component {
    componentDidMount=()=>{
    const list = Array.from(document.getElementById("list").children);
    textAlt(list);
}
    render(){
    return (
        <React.Fragment>
            <h1 data-testid="resources-page">Resources</h1> 
            <p className="question">Engaging in social action takes time, energy and passion.
            <br/>
            Here are our top 10 tips to get you started.</p>
            <ol id="list">
                <li className='top-ten-li'>
                Identify a problem, challenge or issue in your neighbourhood and be specific about what you want to tackle.
                </li>
                <li className='top-ten-li'>
                Do some research so that you have a good picture of the current situation, then develop and plan how to go about tackling the problem.
                </li>
                <li className='top-ten-li'>
                Get together with others to share your research and explore the problem and potential solutions.
                </li>
                <li className='top-ten-li'>
                Build a wider, more diverse community of collaborators who support your aims.
                </li>
                <li className='top-ten-li'>
                Collaborate with those who might not share your opinions or support your aims so that you can overcome objections and gain different perspectives.           
                </li>
                <li className='top-ten-li'>
                Promote your social action in your community and through the media; create a video and post it on the Brickworks website.
                </li>
                <li className='top-ten-li'>
                Take action!
                </li>
                <li className='top-ten-li'>
                Evaluate, reflect and record the impact of your action on the community.
                </li>
                <li className='top-ten-li'>
                Share the impact of your action in creative and imaginative ways to capture attention.
                </li>
                <li className='top-ten-li'>Don't give up, have patience and be committed.</li>
            </ol>
        </React.Fragment>
    )
}
}

export default List;