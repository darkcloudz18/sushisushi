// import 'bootstrap/dist/css/bootstrap.min.css';
import './styles/globals.scss'
import Header from './components/Header'

export const metadata = {
  title: 'Sushi Sushi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
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
        <Header />
        {children}
      </body>
    </html>
  )
}
