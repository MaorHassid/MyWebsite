import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Maor Hassid',
  description: 'Personal website',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="container mx-auto flex justify-between items-center p-4">
            <div className="text-2xl font-bold text-blue-600">Maor Hassid</div>
            <div className="space-x-4">
              <a href="#skills" className="hover:text-blue-600">Skills</a>
              <a href="#projects" className="hover:text-blue-600">Projects</a>
              <a href="#experience" className="hover:text-blue-600">Experience</a>
              <a href="#contact" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                Contact
              </a>
            </div>
          </nav>
        </header>
        <main>{children}</main>
        <footer className="bg-gray-800 text-white py-8">
          <div className="container mx-auto text-center">
            <p>&copy; 2025 Maor Hassid</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
