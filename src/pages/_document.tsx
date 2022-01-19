import { useState } from 'react';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

  class MyDocument extends Document {

    static async getInitialProps(ctx: DocumentContext) {
      const sheet = new ServerStyleSheet()
      const originalRenderPage = ctx.renderPage
      try {
        ctx.renderPage = () =>
          originalRenderPage({
            enhanceApp: (App) => (props) =>
              sheet.collectStyles(<App {...props} />),
          })

        const initialProps = await Document.getInitialProps(ctx)
  
        return {
          ...initialProps,
          styles: (
            <>
              {initialProps.styles}
              {sheet.getStyleElement()}
            </>
          ),
        }
      } finally {
        sheet.seal()
      }
    }

    render() {
      return (
        <Html>
          <Head>
            <meta charSet="utf-8" />
          </Head>
          <body>
              <Main />
              <NextScript />
          </body>
        </Html>
      )
    }
  }

  export default MyDocument

  // styled-components 적용 및 스타일 렌더링 빠르게 하기 위함
  // Head 부분에 Metatag를 넣기