import React, { useState } from 'react';
import './GameScreen.css';

function GameScreen() {
    // State to track whether the iPhone is in fullscreen mode or not
    const [isFullscreen, setIsFullscreen] = useState(false);

    // Function to toggle fullscreen mode
    const toggleFullscreen = () => {
        setIsFullscreen(prevState => !prevState);
    };

    return (
        <div className={`gameContainer ${isFullscreen ? 'fullscreen' : ''}`}>
            <div>This is where we will display the smartphone</div>
            <div className='iphone-container'>

                <div className="iphone-x">
                    <i>Speaker</i>
                    <b>Camera</b>
                    <s>10:24</s>

                    <span>Left action button</span>
                    <span>Right action button</span>
                </div>

                {/* Button to toggle fullscreen */}
                <button className="fullscreen-button" onClick={toggleFullscreen}>
                    {isFullscreen ? 'Minimize' : 'Maximize'}
                </button>
            </div>
        </div>
    )
}

export default GameScreen;
