import React from 'react';
import Header from '../../components/organisms/Header';
import QuoteDetails from '../../components/molecules/QuoteDetails';
import Button from '../../components/atoms/Button';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  width: 100%;
`;

const NewQuoteButtonWrapper = styled.div`
  text-align: center;
  margin-top: 40px;
`;

const QuotesEstimatesPage = () => {
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
    <PageWrapper>
      <Header />
      <QuoteDetails />
      <ButtonWrapper>
        <Button textKey="quote.edit" color="rgba(69, 88, 252, 1)" fontSize="40px" fontWeight="600" onClick={handleEdit} />
        <Button textKey="quote.delete" color="rgba(252, 69, 69, 1)" fontSize="40px" fontWeight="600" onClick={handleDelete} />
      </ButtonWrapper>
      <NewQuoteButtonWrapper>
        <Button textKey="quote.makeNewQuote" color="rgba(143, 243, 127, 1)" fontSize="24px" fontWeight="600" onClick={handleNewQuote} />
      </NewQuoteButtonWrapper>
    </PageWrapper>
  );
};

export default QuotesEstimatesPage;