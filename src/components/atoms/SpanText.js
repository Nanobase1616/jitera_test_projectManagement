import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from '@i18n/index';

const SpanText = ({ textKey, color, fontSize, fontWeight }) => {
  const { t } = useTranslation();
  return (
    <span style={{ color, fontSize, fontWeight }}>
      {t(textKey)}
    </span>
  );
};

SpanText.propTypes = {
  textKey: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
};

SpanText.defaultProps = {
  color: 'rgba(0, 0, 0, 1)',
  fontSize: '24px',
  fontWeight: '400',
};

export default SpanText;
