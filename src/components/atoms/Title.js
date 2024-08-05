import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTranslation } from 'react-i18next';

const TitleWrapper = styled.span`
  color: ${(props) => props.color || 'rgba(0, 0, 0, 1)'};
  font-weight: ${(props) => props.fontWeight || 600};
  font-size: ${(props) => props.fontSize || '48px'};
  margin: ${(props) => props.margin || '0'};
  padding: ${(props) => props.padding || '0'};
  text-align: center;
  display: block;
`;

const Title = ({ textKey, color, fontSize, margin, padding, fontWeight }) => {
  const { t } = useTranslation();
  return (
    <TitleWrapper
      color={color}
      fontSize={fontSize}
      margin={margin}
      padding={padding}
      fontWeight={fontWeight}
    >
      {t(textKey)}
    </TitleWrapper>
  );
};

Title.propTypes = {
  textKey: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  margin: PropTypes.string,
  padding: PropTypes.string,
  fontWeight: PropTypes.number,
};

export default Title;