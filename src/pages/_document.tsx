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
  // Next에서 styled-components를 사용하다보면 css가 적용되기 전에 먼저 html이 적용되거나 혹은 아예 적용이 안되는 경우가 있습니다.
  // 이 경우 _document.js에서 직접 css를 SSR 방식으로 넣어주는 방식으로 해결할 수 있습니다.
  // 즉, SSR 단계에서 스타일링을 내려주면 되면 해결됩니다.

  render() {
    return (
      <Html>
        <Head>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <link rel="apple-touch-icon-precomposed" href="favicon.ico" />
          
          {/* insert meta tag for SEO */}
          {/* default meta */}
          <meta name="generator" content="React, NextJS, Typescript" />
          <meta name="author" content="Wisesaturn" />
          <meta name="keywords" content="블로그, 프로그래밍, React, NextJS, Typescript, 깃허브, 깃허브블로그, Github, 송재한" />
          <meta name="description" content="공부 및 문제풀이 기록용입니다." />
          <meta httpEquiv="Content-Scription-Type" content="text/javascription" />
          <meta httpEquiv="Page-Enter" content="RevealTrans(Duration=10, Transition=50)" />
          <meta httpEquiv="Page-Exit" content="RevealTrans(Duration=10, Transition=50)" />
          <meta name="Robots" content="ALL" />
          <meta httpEquiv="Imagetoolbar" content="no" />
          <meta name="google-site-verification" content="dXVEfB1LROulVhRk0kb3VLPiWLypVQ6O2X7ezmO0EKk" />

          {/* default meta (open graph) */}
          <meta property="og:type" content="website" />
          <meta property="og:url" content="http://wisesaturn.github.io/study-blog" />
          <meta property="og:title" content="재한쓰의 공부용 블로그 😃" />
          <meta property="og:image" content="/resource/ob-image/main.png" />
          <meta property="og:description" content="공부 및 문제풀이 기록용입니다." />
          <meta property="og:locale" content="ko_KR" />
          <meta property="og:image:width" content="1200" />
          <meta property="og:image:height" content="630" />

          {/* twitter meta (open graph) */}
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content="http://wisesaturn.github.io/study-blog" />
          <meta name="twitter:title" content="재한쓰의 공부용 블로그 😃" />
          <meta name="twitter:description" content="공부 및 문제풀이 기록용입니다." />
          <meta name="twitter:image" content="/resource/ob-image/main.png" />
          {/* meta tag Ended */}
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
