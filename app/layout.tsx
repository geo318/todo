import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Header, Nav, SearchBar } from '@/components'

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
})
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <main className='flex overflow-hidden flex-col items-start py-8 pb-2 px-5 mx-auto w-full bg-[#E8F1FD] max-w-lg h-dvh'>
          <div className='shrink-0 flex flex-col self-stretch'>
            <Header />
            <SearchBar />
            <div className='h-11 w-full flex' />
            <Nav />
          </div>
          {children}
        </main>
      </body>
    </html>
  )
}
