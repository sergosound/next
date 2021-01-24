import React from "react";
import App from 'next/app';
import "../client/styles/main.scss";
import { appWithTranslation } from '@hocs/witI18n';

const MyApp = ({ Component, pageProps }) => <Component {...pageProps} />;

MyApp.getInitialProps = async (appContext) => ({ ...await App.getInitialProps(appContext) });

export default appWithTranslation(MyApp);