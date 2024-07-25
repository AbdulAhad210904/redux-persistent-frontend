"use client";
import { Provider } from 'react-redux';
import { store } from '../app/redux/store';
import { Inter } from "next/font/google";
import './globals.css';
import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore.js";

const persistor = persistStore(store);
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
      </body>
    </html>
  );
}
