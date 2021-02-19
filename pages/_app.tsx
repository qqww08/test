import App, { AppInitialProps } from "next/app";
import React from "react";
import GlobalStyles from "../styles/global-styles";
import { ThemeProvider } from "../styles/themed-components";
import theme from "../styles/themes";
import "@trendmicro/react-paginations/dist/react-paginations.css";
class MyApp extends App {
  static async getInitialProps({
    Component,
    ctx,
  }: any): Promise<AppInitialProps> {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }

  render(): JSX.Element {
    const { props } = this;
    const { Component, pageProps } = props;

    // const viewFlag = loading && props.store.getState().getMe.userData !== null;

    return (
      <React.Fragment>
        <GlobalStyles />
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </React.Fragment>
    );
  }
}

export default MyApp;
