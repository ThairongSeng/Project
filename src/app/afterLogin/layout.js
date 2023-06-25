import Footer from "@/components/Footer";
import Bar from "./components/Bar";
import { Inter } from 'next/font/google'
import Script from 'next/script'


const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }) {

    return (
      <html lang="en">
        <body className={inter.className}>
          <Bar/>
          {children}
          
          <Script strategy="beforeInteractive" src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.6.5/flowbite.min.js"></Script>
  
        </body>
      </html>
    )
  }