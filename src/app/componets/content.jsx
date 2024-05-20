'use client'



import CookieConsentBanner from '../cookieBanner';
export default function Contents({ children }) {
 


  return (
    <div className=' mt-20  ' id='content'>
      <CookieConsentBanner />
      {children}
     

      {/* <Modal onClose isVisible={true}/> */}
    </div>
  )
}
