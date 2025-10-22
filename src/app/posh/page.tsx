"use client";
import { useEffect } from "react";

export default function POSHPolicyPage() {
  useEffect(() => {
    // Hide navbar and footer for full-screen PDF
    const navbar = document.querySelector('header');
    const footer = document.querySelector('footer');
    
    if (navbar) navbar.style.display = 'none';
    if (footer) footer.style.display = 'none';
    
    // Set body to full screen
    document.body.style.margin = '0';
    document.body.style.padding = '0';
    document.body.style.overflow = 'hidden';
    
    // Cleanup on unmount
    return () => {
      if (navbar) navbar.style.display = '';
      if (footer) footer.style.display = '';
      document.body.style.margin = '';
      document.body.style.padding = '';
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div className="fixed inset-0 w-screen h-screen">
      <iframe
        src="/documents/posh-policy.pdf"
        className="w-full h-full border-0"
        title="POSH Policy Document"
        style={{ 
          width: '100vw', 
          height: '100vh',
          border: 'none',
          margin: 0,
          padding: 0
        }}
      />
    </div>
  );
}
