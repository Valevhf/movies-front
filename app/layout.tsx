'use client'
import { ApolloProvider } from '@apollo/client'
import './globals.css'
import { Inter } from 'next/font/google'
import client from '../config/apollo-client'
import { ThemeProvider } from '@material-tailwind/react'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
import SideBar from '@/components/SideBar'


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isBrowser = typeof window !== 'undefined';
  const showSideBar = isBrowser && !window.location.pathname.includes('/login') && !window.location.pathname.includes('/signup');

  return (
    <html lang="en"
      className="h-full bg-white"
    >

      <body className='h-full flex flex row'>
        <ThemeProvider>
          <Provider store={store}>
            <ApolloProvider client={client}>
              {showSideBar && <SideBar />}
              {children}
            </ApolloProvider>
          </Provider>
        </ThemeProvider>

      </body>
    </html>
  )
}
