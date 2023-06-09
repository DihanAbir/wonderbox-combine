import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@material-tailwind/react';
import AuthProvider from './ContextAPI/AuthProvider';
import { Provider } from 'react-redux';
import store from './store';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
const theme = {
  dialog: {
    styles: {
      sizes: {
        xs: {
          width: "w-full",
          minWidth: "min-w-80",
          maxWidth: "max-w-[96%] md:max-w-[500px]",
        },
        md: {
          width: "w-full",
          minWidth: "min-w-80",
          maxWidth: "max-w-[96%] md:max-w-[600px]",
        },
        xl: {
          width: "w-full",
          minWidth: "min-w-fit",
          maxWidth: "max-w-[96%] md:max-w-[600px]",
        },
      },
    },
  },
};
root.render(
  <React.StrictMode>
    <ThemeProvider value={theme}>
      <Provider store={store} >
        <AuthProvider>
          <App />
        </AuthProvider>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
