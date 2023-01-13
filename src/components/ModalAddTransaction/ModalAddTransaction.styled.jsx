import styled from 'styled-components';
import { Form, Field } from 'formik';
import Datetime from 'react-datetime';
import iconMinus from 'icons/Minus.svg';
import iconPlus from 'icons/Plus.svg';

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;

  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.l}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};

  @media screen and (min-width: 768px) {
    font-size: ${p => p.theme.fontSizes.xl}px;
  }
`;

export const RecordForm = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${p => p.theme.space[4]}px;
  margin-bottom: ${p => p.theme.space[3]}px;
`;

export const Toggle = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const Switch = styled.label`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 40px;
`;

const Text = styled.span`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.body};
`;

export const Expense = styled(Text)`
  color: ${p => (p.status ? p.theme.colors.expense : p.theme.colors.muted)};
  transition: 0.4s;
`;

export const Income = styled(Text)`
  color: ${p => (!p.status ? p.theme.colors.income : p.theme.colors.muted)};
  transition: 0.4s;
`;

export const Checkbox = styled(Field)`
  opacity: 0;
  width: 0;
  height: 0;
`;

export const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  width: 80px;
  height: 40px;

  background: ${p => p.theme.colors.lightBg};
  border: ${p => p.theme.borders.formField};
  border-radius: ${p => p.theme.radii.normal}px;

  :before {
    position: absolute;
    content: '';
    width: 44px;
    height: 44px;
    left: -4px;
    bottom: -3px;

    background-image: url(${iconMinus}), url(${iconPlus});
    background-repeat: no-repeat, no-repeat;
    background-position: center, center;
    background-size: ${p => (p.checked ? 'auto, 0' : '0, auto')};
    border-radius: ${p => p.theme.radii.circle};

    background-color: ${p =>
      p.checked ? p.theme.colors.expense : p.theme.colors.income};
    box-shadow: ${p =>
      p.checked ? p.theme.shadows.expenseSwitch : p.theme.shadows.incomeSwitch};

    ${p => p.checked && 'transform: translateX(40px);'};

    transition: 0.4s;
  }
`;

export const Selector = styled(Field)`
  min-height: 32px;
  width: 100%;
  max-width: 400px;

  border: none;
  border-bottom: ${p => p.theme.borders.formField};
`;

export const Input = styled(Field)`
  width: 100%;
  max-width: 400px;
  height: 32px;

  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  border: none;
  border-bottom: ${p => p.theme.borders.formField};

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};

  color: ${p => p.theme.colors.text};
`;

export const Comment = styled(Field)`
  width: 100%;
  max-width: 400px;
  height: 84px;
  resize: none;

  padding-left: ${p => p.theme.space[2]}px;
  padding-right: ${p => p.theme.space[2]}px;

  border: none;
  border-bottom: ${p => p.theme.borders.formField};

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};

  color: ${p => p.theme.colors.text};

  @media screen and (min-width: 400px) {
    height: 32px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  max-width: 400px;

  @media screen and (min-width: 400px) {
    width: calc(50% - 16px);
  }
`;

export const DatePicker = styled(Datetime)`
  width: 100%;
  max-width: 400px;
  height: 32px;
`;

export const Error = styled.div`
  margin-top: ${p => p.theme.space[1]}px;

  color: ${p => p.theme.colors.expense};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.xs}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
`;

const ModalButton = styled.button`
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[3]}px;

  min-width: 280px;
  height: 50px;

  border-radius: ${p => p.theme.radii.light}px;

  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;

  transition: ${p => p.theme.transitions.regularScale};

  :hover,
  :focus {
    scale: ${p => p.theme.sizes.scale.up};
  }

  :active {
    scale: ${p => p.theme.sizes.scale.down};
  }
`;

export const SubmitButton = styled(ModalButton)`
  background: ${p => p.theme.colors.primary};
  border-color: transparent;

  color: ${p => p.theme.colors.textLight};
`;
export const CancelButton = styled(ModalButton)`
  background: ${p => p.theme.colors.lightBg};
  border: ${p => p.theme.borders.accented};

  color: ${p => p.theme.colors.secondary};
`;
