import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Header, Nav, SearchBar } from '@/components'
import './globals.css'

const poppinsFont = Poppins({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'Todo App',
  description: 'Manage your tasks',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={`${poppinsFont.className} antialiased`}>
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
