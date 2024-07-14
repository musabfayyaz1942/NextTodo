import "./globals.css";
import Header from './components/Header'
import Footer from './components/Footer'



export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
      <div className="flex flex-col mx-auto min-h-screen">
      <Header/>
      {children}
      <Footer/>
      </div>
      
      </body>
    </html>
  );
}
