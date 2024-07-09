import Footer from '@/components/footer/Footer'
import NavBar from '@/components/navbar/NavBar'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body
        className={`flex flex-col min-h-screen bg-white ${inter.className}`}
      >
        <div className="flex-1">
          <NavBar />
          {children}
        </div>
        <Footer />
      </body>
    </html>
  )
}

export default Layout
