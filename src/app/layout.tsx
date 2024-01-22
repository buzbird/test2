
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

import {Provider} from "./components/Provider"
import TheHeader from './components/TheHeader'
import { useSession } from 'next-auth/react'
import { authOptions } from './api/auth/[...nextauth]/route'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'main',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html>
      <body>
        <Provider>
        <TheHeader/>
        {children}
        </Provider>
        
      </body>
    </html>
  )
}
