import React from 'react';
import QuoteDetails from '../molecules/QuoteDetails';
import Button from '../atoms/Button';

const QuotePage = () => {
  const handleEdit = () => {
    // Edit logic here
  };

  const handleDelete = () => {
    // Delete logic here
  };

  const handleNewQuote = () => {
    // New quote logic here
  };

  return (
    <div>
      <QuoteDetails />
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: '20px' }}>
        <Button textKey="quote.edit" color="rgba(69, 88, 252, 1)" fontSize="40px" fontWeight="600" onClick={handleEdit} />
        <Button textKey="quote.delete" color="rgba(252, 69, 69, 1)" fontSize="40px" fontWeight="600" onClick={handleDelete} />
      </div>
      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <Button textKey="quote.makeNewQuote" color="rgba(143, 243, 127, 1)" fontSize="24px" fontWeight="600" onClick={handleNewQuote} />
      </div>
    </div>
  );
};

export default QuotePage;
