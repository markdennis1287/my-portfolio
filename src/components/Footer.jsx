import React from 'react';

function Footer() {
  return (
    <footer className=" text-white py-4">
      <div className="flex justify-center space-x-4">
        <a href="#" className="hover:opacity-75">Twitter</a>
        <a href="https://github.com/markdennis1287" className="hover:opacity-75">GitHub</a>
        <a href="https://www.linkedin.com/in/dennis-miring-u/" className="hover:opacity-75">LinkedIn</a>
      </div>
      <div className="container mx-auto text-center">
        <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
