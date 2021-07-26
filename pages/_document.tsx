import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document<{ initialState: any; }> {

  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {

    const { initialState } = this.props;
    const _initialState = initialState || JSON.stringify({});
    const SSR_KEY = '__RESTASH_APP_STATE__';

    return (
      <Html>
        <Head>
          <script dangerouslySetInnerHTML={{ __html: `window.${SSR_KEY} = ${_initialState};` }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );

  }

}

export default MyDocument;