import React from 'react';
import PropTypes from 'prop-types';
import { useTranslation } from '@i18n/index';

const Button = ({ textKey, color, fontSize, fontWeight, onClick }) => {
  const { t } = useTranslation();
  return (
    <button
      style={{ color, fontSize, fontWeight, background: 'none', border: 'none', cursor: 'pointer' }}
      onClick={onClick}
    >
      {t(textKey)}
    </button>
  );
};

Button.propTypes = {
  textKey: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  color: 'rgba(0, 0, 0, 1)',
  fontSize: '24px',
  fontWeight: '400',
  onClick: () => {},
};

export default Button;
