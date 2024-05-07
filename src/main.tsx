import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./index.css";
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { Store } from "./redux/Store.tsx";

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={Store}>
          <App />
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>,
);