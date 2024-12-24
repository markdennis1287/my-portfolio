import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
