import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-3 mt-4">
      <div className="container text-center">
        <p className="mb-1">© {new Date().getFullYear()} The News Minute. All rights reserved.</p>
        <small>
          Built with ❤️ using React & Bootstrap.
        </small>
      </div>
    </footer>
  );
};

export default Footer;