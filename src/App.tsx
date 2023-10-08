import { useEffect, useReducer } from 'react';
import { IntlProvider } from 'react-intl';
import {
  Routes,
  Route,
  useLocation,
} from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import './App.css';
import { HomePage, WaterPage } from './pages';
import { DataContext, reducer, initState } from './context';

import messages from './i18n';
import { WaterLoader } from './components/WaterLoader/WaterLoader';

function App() {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, initState);
  const location = useLocation();

  const providerValue = {
    state,
    dispatch,
  };

  useEffect(() => {
    if (
      'navigator' in window &&
      (
        navigator as Navigator & { userAgentData: { platform: string } }
      )?.userAgentData?.platform
        ?.toLocaleLowerCase()
        .includes('win')
    ) {
      const body = document.querySelector('body')!;
      body.classList.add('windows');
    }
  }, []);

  return (
    <DataContext.Provider value={providerValue}>
      <IntlProvider
        messages={messages[state.lang]}
        locale={state.lang}
        defaultLocale="en"
      >
        <AnimatePresence>
          <Routes location={location} key={location.pathname}>
            <Route index element={<HomePage />} />
            <Route path="/waterPath" element={<WaterPage />} />
            <Route path="/water" element={<WaterLoader />} />
          </Routes>
        </AnimatePresence>
      </IntlProvider>
    </DataContext.Provider>
  );
}

export default App;
