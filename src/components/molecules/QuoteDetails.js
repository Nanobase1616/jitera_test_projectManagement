import React from 'react';
import SpanText from '../atoms/SpanText';

const QuoteDetails = () => {
  return (
    <div style={{ backgroundColor: 'rgba(255, 255, 255, 1)', width: '1920px', height: '1080px' }}>
      <SpanText textKey="quote.creationDate" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.quotesEstimates" fontWeight="600" fontSize="48px" />
      <div style={{ backgroundColor: 'rgba(248, 248, 248, 1)', width: '1156px', height: '455px' }}></div>
      <SpanText textKey="quote.date" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.customerId" fontWeight="400" fontSize="28px" />
      <SpanText textKey="quote.scheduledAcceptance" fontWeight="400" fontSize="28px" />
      <SpanText textKey="quote.deliveryDate" fontWeight="400" fontSize="28px" />
      <SpanText textKey="quote.customer" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.customerName" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.quoteNumber" fontWeight="400" fontSize="20px" />
      <SpanText textKey="quote.subject" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.subjectTitle" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.test" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.estimatedTax" fontWeight="400" fontSize="28px" />
      <SpanText textKey="quote.taxExpiry" fontWeight="400" fontSize="28px" />
      <SpanText textKey="quote.estimatedTotal" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.totalAmount" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.makeNewQuote" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.contactNumber" fontWeight="600" fontSize="24px" />
      <SpanText textKey="quote.expiryDate" color="rgba(242, 0, 0, 1)" fontWeight="400" fontSize="20px" />
      <SpanText textKey="quote.email" fontWeight="600" fontSize="24px" />
    </div>
  );
};

export default QuoteDetails;
