import styled from 'styled-components';
import { Form, Field } from 'formik';
import Datetime from 'react-datetime';

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
  //   display: flex;
  //   justify-content: center;
  //   align-items: center;
  //   gap: ${p => p.theme.space[3]}px;
`;

export const Switch = styled.label`
  //   position: relative;
  //   display: inline-block;
  //   width: 60px;
  //   height: 34px;
`;

export const Text = styled.span`
  //   font-family: ${p => p.theme.fonts.heading};
  //   font-weight: ${p => p.theme.fontWeights.bold};
  //   font-size: ${p => p.theme.fontSizes.s}px;
  //   line-height: ${p => p.theme.lineHeights.body};
`;

export const Checkbox = styled(Field)`
  //   opacity: 0;
  //   width: 0;
  //   height: 0;
`;

export const Slider = styled.span`
  //   position: absolute;
  //   cursor: pointer;
  //   top: 0;
  //   left: 0;
  //   right: 0;
  //   bottom: 0;
  //   background-color: #ccc;
  //   -webkit-transition: 0.4s;
  //   transition: 0.4s;

  //   ${p => p.checked && 'background-color: #2196F3;'}

  //   :before {
  //     position: absolute;
  //     content: '';
  //     height: 26px;
  //     width: 26px;
  //     left: 4px;
  //     bottom: 4px;
  //     background-color: white;
  //     -webkit-transition: 0.4s;
  //     transition: 0.4s;

  //     ${p => p.checked && 'transform: translateX(26px);'};
  //   }
`;

export const Selector = styled(Field)`
  min-height: 32px;
  width: 100%;
  max-width: 400px;
`;

export const Input = styled(Field)`
  width: 100%;
  max-width: 400px;
  height: 32px;
`;

export const Amount = styled(Field)`
  width: 100%;
  max-width: 400px;
  height: 32px;

  @media screen and (min-width: 400px) {
    width: calc(50% - 16px);
  }
`;

export const DatePicker = styled(Datetime)`
  width: 100%;
  max-width: 400px;
  height: 32px;

  @media screen and (min-width: 400px) {
    width: calc(50% - 16px);
  }
`;

export const Error = styled.div`
  position: absolute;
  margin-top: ${p => p.theme.space[2]}px;

  color: ${p => p.theme.colors.expense};
  text-align: center;
`;

const ModalButton = styled.button`
  margin: 0 auto;
  padding: 0 ${p => p.theme.space[3]}px;

  min-width: 300px;
  height: 50px;

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
  border-radius: ${p => p.theme.radii.light}px;
  border-color: transparent;

  color: ${p => p.theme.colors.textLight};
`;
export const CancelButton = styled(ModalButton)`
  background: ${p => p.theme.colors.lightBg};
  border-radius: ${p => p.theme.radii.light}px;
  border: ${p => p.theme.borders.accented};

  color: ${p => p.theme.colors.secondary};
`;
