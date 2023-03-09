import 'bootstrap/dist/css/bootstrap.css';
import './globals.css'
import Header from './components/Header'

export const metadata = {
  title: 'Sushi Sushi',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
      </body>
    </html>
  )
}
