// import React, { useState, useEffect } from 'react';
// import './PortfolioApp.css'; // Assuming you have a separate CSS file for styling


// const PortfolioApp = () => {
//     const [showIntro, setShowIntro] = useState(true);

//     useEffect(() => {
//         const introTimer = setTimeout(() => {
//             setShowIntro(false);
//         }, 5000); // Adjust the time duration for the intro logo

//         return () => clearTimeout(introTimer);
//     }, []);

//     return (
//         <div className="portfolio-container">
//             {showIntro ? (
//                 <div className="intro-logo">
//                     <img src={RJLogo} />
//                     <h1>presents</h1>
//                 </div>
//             ) : (
//                 <div className="game-logo">
//                     <img src={GameLogo} />
//                 </div>
//             )}
//         </div>
//     );
// };

// export default PortfolioApp;
import React, { useState, useEffect } from 'react';
import './PortfolioApp.css'; // Assuming you have a separate CSS file for styling
import backgroundMusic from './background-music.mp3'; // Path to your background music file
import IonIcon from '@reacticons/ionicons';
import { Link } from 'react-router-dom';
import RJLogo from './RJLogo.png'
import GameLogo from './gameLogo.png'

const PortfolioApp = () => {
    const [showIntro1, setShowIntro1] = useState(true);
    const [showIntro2, setShowIntro2] = useState(false);
    const [showStartButton, setShowStartButton] = useState(false);
    const [showQuestion, setShowQuestion] = useState(false);
    const [selectedOption, setSelectedOption] = useState('');
    const [isMusicPlaying, setIsMusicPlaying] = useState(false); // Initially music is playing

    useEffect(() => {
        // Simulate delay before showing second intro image
        const intro2Timer = setTimeout(() => {
            setShowIntro1(false);
            setShowIntro2(true);
        }, 5000); // Adjust the delay time as needed

        // Simulate delay before showing start button
        const buttonTimer = setTimeout(() => {
            setShowStartButton(true);
            setShowQuestion(true);
        }, 10000); // Adjust the delay time as needed

        return () => {
            clearTimeout(intro2Timer);
            clearTimeout(buttonTimer);
        };
    }, []);

    const handleOptionChange = (event) => {
        setSelectedOption(event.target.value);
    };

    const handleStartButtonClick = () => {
        // Handle click event for start button, e.g., navigate to the game page
        // You can add your logic here
        console.log('Starting the game...');
    };

    const toggleMusic = () => {
        setIsMusicPlaying(prevState => !prevState);
    };

    return (
        <div className="portfolio-container">
            {isMusicPlaying && <audio src={backgroundMusic} autoPlay loop />} {/* Background music */}
            {showIntro1 && (
                <div className="intro-logo">
                    <img src={RJLogo} />
                    <h1>presents</h1>
                </div>
            )}
            {showIntro2 && (
                <div className="intro-logo">
                    {/* Second intro image */}
                    <img src={GameLogo} />
                </div>
            )}

            {showQuestion && (
                <div className="question-container">
                    <h2 className="engaging-question">Who are you?</h2>
                    <br></br>
                    <br />
                    <br />
                    <br />
                    <div className="options">
                        <div className="option">
                            <input
                                type="radio"
                                id="option1"
                                name="option"
                                value="A friend who adores me"
                                checked={selectedOption === "A friend who adores me"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option1">A friend who adores me</label>
                        </div>
                        <div className="option">
                            <input
                                type="radio"
                                id="option2"
                                name="option"
                                value="An Ex who hates me"
                                checked={selectedOption === "An Ex who hates me"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option2">An Ex who hates me</label>
                        </div>
                        <div className="option">
                            <input
                                type="radio"
                                id="option3"
                                name="option"
                                value="A Recruiter who wants to hire me"
                                checked={selectedOption === "A Recruiter who wants to hire me"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option3">A Recruiter who wants to hire me</label>
                        </div>
                        <div className="option">
                            <input
                                type="radio"
                                id="option4"
                                name="option"
                                value="I would prefer to stay anonymous"
                                checked={selectedOption === "I would prefer to stay anonymous"}
                                onChange={handleOptionChange}
                            />
                            <label htmlFor="option4">I would prefer to stay anonymous</label>
                        </div>
                    </div>
                    {selectedOption && (
                        <Link to="/game">
                            <button className="start-game-button">Start Game</button>
                        </Link>
                    )}
                </div>
            )}


            {/* {showStartButton && (
                <button className="start-button" onClick={handleStartButtonClick}>
                    ENTER
                </button>
            )} */}
            <div className="music-toggle-button" onClick={toggleMusic}>
                {isMusicPlaying ? <IonIcon name="volume-medium-outline" color='white' /> : <IonIcon name="volume-mute-outline" />}
            </div>
        </div>
    );
};

export default PortfolioApp;
