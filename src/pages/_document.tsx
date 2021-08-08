import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

interface StyledProps {
  styleTags: Array<React.ReactElement<{}>>;
}

class MyDocument extends Document<StyledProps> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;
    const initialProps = await Document.getInitialProps(ctx);
    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />),
        });

      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.error(error);
    } finally {
      sheet.seal();
    }
    console.error('return Origin initialProps');
    return initialProps;
  }

  render() {
    return (
      <Html>
        <Head>
          <script
            type="text/javascript"
            src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer`}
          />
          <script type="text/javascript" src={'https://developers.kakao.com/sdk/js/kakao.js'} />
          <script
            type="text/javascript"
            src={`https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js`}
          />
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
