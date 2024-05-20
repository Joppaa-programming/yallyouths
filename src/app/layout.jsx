import Contents from './componets/content'
import NavBar from './componets/nav'
import './globals.css'

export const metadata = {
  title: 'YALL',
  description: 'Youth Association Of Landlords',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='flex flex-col'>
      <NavBar />
         <Contents>
                    {children}
                  </Contents> 
        </body>
    </html>
  )
}
