// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.scss'
import Header from './components/Header'
import Footer from './components/Footer'
import GoogleAnalytics from "./components/GoogleAnalytics";

export const metadata = {
  title: 'Sushi Sushi',
    description: 'Australia\'s freshest sushi since 1998. We do platters and packs, order online today.'
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
          <GoogleAnalytics GA_TRACKING_ID={process.env.NEXT_PUBLIC_GA_ID} />
        <link
            rel="preload"
            href="/fonts/CircularStd-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        <link
            rel="preload"
            href="/fonts/CircularStd-Book.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        <link
            rel="preload"
            href="/fonts/Gazpacho-Bold.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
      </head>
      <body>
      <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-WM9ZN4X"
                        height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
