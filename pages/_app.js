import 'prism-themes/themes/prism-vsc-dark-plus.css'
import 'react-notion-x/src/styles.css'
import 'katex/dist/katex.min.css'
// import 'gitalk/dist/gitalk.css'
// import '@/styles/gitalk_dark.css'
// import 'prism-themes/themes/prism-one-dark.min.css'
import '@/styles/globals.css'
import '@/styles/notion.css'
import BLOG from '@/blog.config'
import dynamic from 'next/dynamic'
import { LocaleProvider } from '@/lib/locale'
import Scripts from '@/components/Scripts'

// 目前二次加载页面，会报错  Prop `className` did not match  https://github.com/NotionX/react-notion-x/issues/62
// 只能强制引入常用的语言
import 'prismjs/prism.js'
import 'prismjs/components/prism-bash'
import 'prismjs/components/prism-markup'
import 'prismjs/components/prism-python'
import 'prismjs/components/prism-javascript'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-css'
import 'prismjs/components/prism-markup-templating'
import 'prismjs/components/prism-php'
import 'prismjs/components/prism-java'
import 'prismjs/components/prism-dart'
import 'prismjs/components/prism-kotlin'
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-swift'
import 'prismjs/components/prism-markdown'
import 'prismjs/components/prism-sql'
import 'prismjs/components/prism-yaml'

const Ackee = dynamic(() => import('@/components/Ackee'), { ssr: false })
const Gtag = dynamic(() => import('@/components/Gtag'), { ssr: false })

function MyApp ({ Component, pageProps }) {
  return (
    <>
      <Scripts />
      <LocaleProvider>
        <>
          {BLOG.isProd && BLOG?.analytics?.provider === 'ackee' && (
            <Ackee
              ackeeServerUrl={BLOG.analytics.ackeeConfig.dataAckeeServer}
              ackeeDomainId={BLOG.analytics.ackeeConfig.domainId}
            />
          )}
          {BLOG.isProd && BLOG?.analytics?.provider === 'ga' && <Gtag />}
          <Component {...pageProps} />
        </>
      </LocaleProvider>
    </>
  )
}

export default MyApp
