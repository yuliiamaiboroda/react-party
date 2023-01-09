import React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from 'styled-components';
// import { Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';
import { theme } from './theme';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/react-party">
      {/* <Provider store={store}>
          <PersistGate> loading={null} persistor={persistor} */}
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
      {/* </PersistGate>
        </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);