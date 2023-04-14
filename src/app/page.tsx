import Image from 'next/image'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-screen flex flex-col'>
      <div className='flex flex-1'>
        <aside className='w-72 bg-zinc-950 p-6'>
        <nav>
          <Link href='/home'>Home</Link>
          <Link href='/home'>Search</Link>
          <Link href='/home'>Your</Link>
        </nav>
        </aside>
        <main className='flex-1 p-6'>main</main>
      </div>
      <footer className='bg-zinc-800 border-t border-zinc-700 p-6'>Footer</footer>
    </div>
  )
}
