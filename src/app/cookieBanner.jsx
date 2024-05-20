'use client'
import React, { useEffect, useState } from "react";
import cookie from "js-cookie";
//import { cookies } from "next/headers";
const CookieConsentBanner = () => {
  const [showBanner, setShowBanner] = useState(false);
  //const cookie = cookies();
  useEffect(() => {
    const consentCookie = cookie.get("cookieConsent");

    if (!consentCookie) {
      setShowBanner(true);
    }
  }, []);

  const handleAccept = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "accepted", { expires: 365 });
  };

  const handleReject = () => {
    setShowBanner(false);
    cookie.set("cookieConsent", "rejected", { expires: 365 });
  };

  if (!showBanner) {
    return null;
  }

  return (
    <div className=" w-screen p-6  mx-auto bg-white bottom-6 fixed z-50">
       <p>This website uses cookies to improve your browsing experience.</p>
       <p>Please click Accept to continue.</p>
       <div className="w-full text-right flex gap-4 items-end justify-end"> <button onClick={handleAccept}>Accept</button>
       <button onClick={handleReject}>Reject</button></div>
      
    </div>
  );
};

export default CookieConsentBanner;