import React from 'react';
import ReactDOM from 'react-dom/client';
// import { Provider} from "react-redux";
import { BrowserRouter } from 'react-router-dom';
// import { PersistGate } from 'redux-persist/integration/react';
import { App } from 'components/App';
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter 
    // basename="/react-party"
    >
        {/* <Provider store={store}>
          <PersistGate> loading={null} persistor={persistor} */}
                <App />
        {/* </PersistGate>
        </Provider> */}
    </BrowserRouter>
  </React.StrictMode>
);
