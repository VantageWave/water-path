import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { defineMessages, useIntl } from 'react-intl';
import "./homePages.css";
import { LanguagePicker } from '../components/LanguagePicker/languagePicker';

export const HomePage = () => {
    const { formatMessage } = useIntl();
    const waves = [];

    for (let i = 0; i < 480; i++) {
        waves.push(<div className="line" key={`wave-${i}`} />)
    }
    return (
        <motion.main
            className="main__container"
            initial={{ width: 0 }}
            animate={{ width: "100%" }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
        >
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
            <h1 className="title">
                Water Path
            </h1>
            <div className="container">
                {waves}
            </div>
        </motion.main>
    )
}

const messages = defineMessages({
    explore: {
      id: 'src.pages.HomePage.explore',
      defaultMessage: 'Explore',
    },
  });
