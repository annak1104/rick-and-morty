import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Root } from './Root';
import { ApolloProvider } from '@apollo/client';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './app/store/store';
import client from './client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ApolloProvider client={client}>
        <Root />
      </ApolloProvider>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
