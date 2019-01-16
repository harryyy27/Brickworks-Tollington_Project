import React from 'react';
import { Link } from "react-router-dom";


const TopTen= () => (
    <div data-testid="topten-page" className='wrapper'>
        <h1>Top Ten Tips</h1>
        <main>
            <p className='question'>Engaging in social action takes time, energy and passion, here are our top 10 tips to get you started:</p>
            <ol>
                <li className='top-ten-li'>Identify a problem, challenge or issue in your neighbourhood and be specific about what you want to tackle.</li className='top-ten-li'>
                <li className='top-ten-li'>Do some research so that you have a good picture of the current situation, then develop and plan how to go about tackling the problem.</li className='top-ten-li'>
                <li className='top-ten-li'>Get together with others to share your research and explore the problem and potential solutions.</li className='top-ten-li'>
                <li className='top-ten-li'>Build a wider, more diverse community of collaborators who support your aims.</li className='top-ten-li'>
                <li className='top-ten-li'>Collaborate with those who might not share your opinions or support your aims so that you can overcome objections and gain different perspectives.</li className='top-ten-li'>
                <li className='top-ten-li'>Promote your social action in your community and through the media; create a video and post it on the Brickworks website.</li className='top-ten-li'>
                <li className='top-ten-li'>Take action!</li className='top-ten-li'>
                <li className='top-ten-li'>Evaluate, reflect and record the impact of your action on the community.</li className='top-ten-li'>
                <li className='top-ten-li'>Share the impact of your action in creative and imaginative ways to capture attention.</li className='top-ten-li'>
                <li className='top-ten-li'>Don't give up, have patience and be committed.</li className='top-ten-li'>
            </ol>
        <div>
            <label htmlFor="all-events">
            <Link to='/contactUs'><p className='link'>Click here to register an interest to start a social action!</p></Link>
            </label>
            <p>I am already carrying out a social action, I want to collaborate with others to build it further</p>
            <label htmlFor="list-event">
            <Link to='/list-event'><p className='link'>Click here to register an interest to promote a social action</p></Link>
            </label>
        </div>
        </main>
    </div>
)

export {TopTen};
