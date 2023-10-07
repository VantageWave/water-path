import React from 'react'
import "./homePages.css";

export const HomePage = () => {
    const waves = [];

    for (let i = 0; i < 480; i++) {
        waves.push(<div className="line" />)
    }
    return (
        <>
            <div id="container">
                <button className="learn-more">
                    <span className="circle" aria-hidden="true">
                        <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">Learn More</span>
                </button>
            </div>
            <h1 className="title">
                Water Path
            </h1>
            <div className="container">
                {waves}
            </div>
        </>
    )
}
