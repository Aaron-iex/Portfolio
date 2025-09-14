import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="py-8 text-center text-nothing-gray-500 border-t border-nothing-gray-800">
      <div className="container-max">
        <p>&copy; {currentYear} Aaron. All Rights Reserved.</p>
        {/* We will add social links here later */}
      </div>
    </footer>
  );
};

export default Footer;