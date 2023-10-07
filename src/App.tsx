import { useReducer } from 'react';
import { IntlProvider } from 'react-intl';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './App.css';
import { HomePage, WaterPage } from './pages';
import { DataContext, reducer, initState } from './context';

import messages from './i18n';

const router = createBrowserRouter([
  {
    path: "/",
    element: <WaterPage />,
  },
  {
    path: "/home",
    element: <HomePage />,
  },
]);

function App() {
  //@ts-ignore
  const [state, dispatch] = useReducer(reducer, initState);

  const providerValue = {
    state,
    dispatch,
  };

  return (
    <DataContext.Provider value={providerValue}>
      <IntlProvider messages={messages['en']} locale="en" defaultLocale="en">
        <RouterProvider router={router} />
      </IntlProvider>
    </DataContext.Provider>
  );
}


export default App;
