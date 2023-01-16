import React from 'react';
import zxcvbn from 'zxcvbn';
import { useTranslation } from 'react-i18next';

const PasswordStrenght = ({ password }) => {
  const { t } = useTranslation();
  const testResult = zxcvbn(password);
  const num = (testResult.score * 100) / 4;
  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return '#FF6596';
      case 1:
        return '#FF6596';
      case 2:
        return '#FF6596';
      case 3:
        return '#24CCA7';
      case 4:
        return '#24CCA7';
      default:
        return 'none';
    }
  };

  const createPasswordLabel = () => {
    switch (testResult.score) {
      case 0:
        return '';
      case 1:
        return t('reg.weakPass');
      case 2:
        return t('reg.normPass');
      case 3:
        return t('reg.goodPass');
      case 4:
        return t('reg.strongPass');
      default:
        return '';
    }
  };

  const changeProgressStyle = () => ({
    width: '100%',
    height: '4px',
    marginTop: '-4px',
  });

  const changePasswordColor = () => ({
    width: `${num}%`,
    height: '4px',
    background: progressColor(),
    boxShadow: '0px 1px 8px rgba(36, 204, 167, 0.5)',
    borderRadius: '4px',
  });

  return (
    <>
      <div style={changeProgressStyle()}>
        <div style={changePasswordColor()}></div>
      </div>
      <p style={{ color: progressColor() }}>{createPasswordLabel()}</p>
    </>
  );
};

export default PasswordStrenght;
