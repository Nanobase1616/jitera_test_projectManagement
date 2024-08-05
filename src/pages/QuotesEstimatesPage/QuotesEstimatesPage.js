
import React from 'react';
import styled from 'styled-components';

const PageWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;
  padding: 20px;
  border-bottom: 1px solid #000;
`;

const HeaderTitle = styled.h1`
  font-size: 24px;
  font-weight: 700;
  color: #000;
`;

const Sidebar = styled.div`
  width: 200px;
  background-color: #31373d;
  display: flex;
  flex-direction: column;
  padding: 10px 0;
`;

const SidebarItem = styled.div`
  color: #f1f2f2;
  padding: 15px 20px;
  font-size: 16px;
  cursor: pointer;
  &.logo {
    background-color: #000;
    color: #fff;
    font-weight: 700;
  }
  &.active {
    background-color: #497be8;
  }
  &:hover {
    background-color: #3d4349;
  }
`;

const MainContent = styled.div`
  padding: 20px;
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  max-width: 800px;
  margin: 0 auto;
`;

const TableHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableHeaderItem = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
  background-color: #0f0;
  font-weight: 700;
`;

const TableRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const TableCell = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
`;

const DetailsSection = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
`;

const DetailsRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`;

const DetailsItem = styled.div`
  flex: 1;
  text-align: left;
  a {
    color: #00f;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
`;

const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px 0;
`;

const EditButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  background-color: #00f;
`;

const DeleteButton = styled.button`
  padding: 10px 20px;
  margin: 0 10px;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  background-color: red;
`;

const QuoteInfo = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 20px 0;
`;

const QuoteNumber = styled.div`
  flex: 1;
  text-align: left;
`;

const ExpiryDate = styled.div`
  flex: 1;
  text-align: right;
  color: red;
`;

const BottomRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #ccc;
  padding-top: 10px;
`;

const BottomCell = styled.div`
  flex: 1;
  text-align: center;
  padding: 10px;
  border: 1px solid #ccc;
`;

const NewQuoteButton = styled.button`
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  background-color: #0f0;
  border: none;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  &:hover {
    background-color: #0c0;
  }
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
      <Header>
        <HeaderTitle>Quotes/Estimates</HeaderTitle>
      </Header>
      <Sidebar>
        <SidebarItem className="logo">LOGO/Home Button</SidebarItem>
        <SidebarItem>Users</SidebarItem>
        <SidebarItem>Companies</SidebarItem>
        <SidebarItem>Suppliers</SidebarItem>
        <SidebarItem>Records</SidebarItem>
        <SidebarItem className="active">Quotes</SidebarItem>
        <SidebarItem>Sales</SidebarItem>
        <SidebarItem>Purchases</SidebarItem>
        <SidebarItem>Costs</SidebarItem>
        <SidebarItem>Projects</SidebarItem>
        <SidebarItem>Daily Report</SidebarItem>
      </Sidebar>
      <MainContent>
        <TableHeader>
          <TableHeaderItem>Creation Date</TableHeaderItem>
          <TableHeaderItem>Customer</TableHeaderItem>
          <TableHeaderItem>Subject</TableHeaderItem>
          <TableHeaderItem>Estimated Total</TableHeaderItem>
        </TableHeader>
        <TableRow>
          <TableCell>2024-01-27</TableCell>
          <TableCell>ABC Industries <span style={{ display: 'inline-block', width: '24px', height: '24px', backgroundColor: '#ccc', borderRadius: '50%' }}></span></TableCell>
          <TableCell>New backend</TableCell>
          <TableCell>100000000 yen <span style={{ display: 'inline-block', width: '24px', height: '24px', backgroundColor: '#ccc', borderRadius: '50%' }}></span></TableCell>
        </TableRow>
        <DetailsSection>
          <DetailsRow>
            <DetailsItem>Customer ID: 123</DetailsItem>
            <DetailsItem>Estimated Consumption Tax: 10%</DetailsItem>
          </DetailsRow>
          <DetailsRow>
            <DetailsItem>Delivery Date: 2024-01-03</DetailsItem>
            <DetailsItem>Consumption Tax Expires: 2024-02-03</DetailsItem>
          </DetailsRow>
          <DetailsRow>
            <DetailsItem>Scheduled to be Accepted: 2024-01-29</DetailsItem>
            <DetailsItem><a href="#">Payment Terms</a></DetailsItem>
          </DetailsRow>
          <DetailsRow>
            <DetailsItem><a href="#">Contact Information</a></DetailsItem>
            <DetailsItem><a href="#">Details</a></DetailsItem>
          </DetailsRow>
        </DetailsSection>
        <ActionButtons>
          <EditButton onClick={handleEdit}>Edit</EditButton>
          <DeleteButton onClick={handleDelete}>Delete</DeleteButton>
        </ActionButtons>
        <QuoteInfo>
          <QuoteNumber>Quote Number: 000234</QuoteNumber>
          <ExpiryDate>Expires: 2024-03-31</ExpiryDate>
        </QuoteInfo>
        <BottomRow>
          <BottomCell>Test</BottomCell>
          <BottomCell>Test Person2</BottomCell>
          <BottomCell>123-456-7890</BottomCell>
          <BottomCell>xyz@123.com <span style={{ display: 'inline-block', width: '24px', height: '24px', backgroundColor: '#ccc', borderRadius: '50%' }}></span></BottomCell>
        </BottomRow>
        <NewQuoteButton onClick={handleNewQuote}>Make New Quote</NewQuoteButton>
      </MainContent>
    </PageWrapper>
  );
};

export default QuotesEstimatesPage;
