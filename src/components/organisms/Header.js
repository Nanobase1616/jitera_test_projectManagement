import React from 'react';
import styled from 'styled-components';
import Title from '../atoms/Title';
import { useTranslation } from 'react-i18next';

const HeaderWrapper = styled.div`
  background-color: rgba(255, 255, 255, 1);
  width: 100%;
  height: 1080px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Header = () => {
  const { t } = useTranslation();
  return (
    <HeaderWrapper>
      <Title textKey={t('header.quotesEstimates')} />
    </HeaderWrapper>
  );
};

export default Header;
