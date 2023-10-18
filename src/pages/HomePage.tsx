import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { defineMessages, useIntl } from 'react-intl';
import "./homePages.css";
import { LanguagePicker } from '../components/LanguagePicker/languagePicker';
import Logo from '../components/logo/Logo';
import { Cloud } from '../components';
import { WaterLoader } from '../components/WaterLoader/WaterLoader';

export const HomePage = () => {
    const { formatMessage } = useIntl();
    const [animated, setAnimated] = useState(false);
    const waves = [];

    for (let i = 0; i < 900; i++) {
        waves.push(<div className="line" key={`wave-${i}`}  style= {{ animationDelay: `${(i + 1) * 0.002}s`, left: `${(i + 1) * 4}px` }}/>)
    }

    useEffect(() => {
        setTimeout(() => {
            setAnimated(true);
        }, 1400)
    }, [])
    return (
        <motion.main
            className="main__container"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
            {!animated ? <WaterLoader /> : (
                <div className='waterContainer'>
                    <div className='absolute flex justify-center items-center w-full h-full text-7xl slogan'>{formatMessage(messages.slogan)}</div>
                    {/* <img src="placeholders/arrow.png" className='absolute left-[5%] top-[10%]' />
                    <Cloud
                        classname='left-[20%] top-[35%]'
                        content={formatMessage(messages.cloud1Content)}
                        title={formatMessage(messages.cloud1Title)}
                    />
                    <div className='top-line' />
                    <Cloud
                        classname='left-[33%] top-[70%]'
                        content={formatMessage(messages.cloud2Content)}
                        title={formatMessage(messages.cloud2Title)}
                    />
                    <Cloud
                        classname='left-[58%] top-[35%]'
                        titleStyles='mt-[-28px] mb-3'
                        content={formatMessage(messages.cloud3Content)}
                        title={formatMessage(messages.cloud3Title)}
                    />
                    <Cloud
                        classname='left-[78%] top-[70%]'
                        titleStyles='mt-[-25px]'
                        content={formatMessage(messages.cloud4Content)}
                        title={formatMessage(messages.cloud4Title)}
                    /> */}
                    <LanguagePicker isTop />
                    <div id="container">
                        <Link to="/waterPath" className="learn-more">
                            <button className="learn-more">
                                <span className="circle" aria-hidden="true">
                                    <span className="icon arrow"></span>
                                </span>
                                <span className="button-text">{formatMessage(messages.explore)}</span>
                            </button>
                        </Link>
                    </div>
                    <div className="container">
                        {waves}
                    </div>
                </div>)
            }
            <Logo className="absolute left-2 bottom-2 z-10" />
            <h1 className="title">
                Water Path
            </h1>
        </motion.main>
    )
}

const messages = defineMessages({
    explore: {
        id: 'src.pages.HomePage.explore',
        defaultMessage: 'EXPLORE',
    },
    cloud1Title: {
        id: 'src.pages.HomePage.cloud1Title',
        defaultMessage: 'Global warming',
    },
    cloud1Content: {
        id: 'src.pages.HomePage.cloud1Content',
        defaultMessage: 'Is no longer a distant concept - its effects are felt worldwide.',
    },
    cloud2Title: {
        id: 'src.pages.HomePage.cloud2Title',
        defaultMessage: 'Water scarcity',
    },
    cloud2Content: {
        id: 'src.pages.HomePage.cloud2Content',
        defaultMessage: 'One of the most pressing issues is the water shortage, affecting millions of people.',
    },
    cloud3Title: {
        id: 'src.pages.HomePage.cloud3Title',
        defaultMessage: 'Satellite data',
    },
    cloud3Content: {
        id: 'src.pages.HomePage.cloud3Content',
        defaultMessage: 'Satellites allow us to monitor the state of our planet in real-time. Through them, we can identify areas most at risk of drought.',
    },
    cloud4Title: {
        id: 'src.pages.HomePage.cloud4Title',
        defaultMessage: 'Education',
    },
    cloud4Content: {
        id: 'src.pages.HomePage.cloud4Content',
        defaultMessage: 'Is our most important weapon against climate change. Learn more to grasp the magnitude of the issue.',
    },
    slogan: {
        id: 'src.pages.HomePage.slogan',
        defaultMessage: 'EMPOWER CHANGE: VISUALIZE, UNDERSTAND, EDUCATE'
    }
});
