import React, { useState } from 'react';
import Topbar from "../topbar/Topbar.jsx";
import Contact from "../contact/Contact.jsx";
import Portfolio from "../portfolio/Portfolio.jsx";


export default function SectionContainer() {
  const [currentPage, setCurrentPage] = useState('Contact');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div>
      <Topbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
    </div>
  );
}
