import App, { AppInitialProps } from "next/app";
import React from "react";
import { WithSagaTaskStore } from "../interfaces";
import GlobalStyles from "../styles/global-styles";
import { ThemeProvider } from "../styles/themed-components";
import theme from "../styles/themes";

interface MyAppProps {
  store: WithSagaTaskStore;
}

class MyApp extends App<MyAppProps, {}> {
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
