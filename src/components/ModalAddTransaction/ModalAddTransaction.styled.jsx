import styled from 'styled-components';
import { Form, Field } from 'formik';

export const RecordForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;

  margin: ${p => p.theme.space[3]}px;
`;

export const Input = styled(Field)`
  width: 100%;
  height: 32px;
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
  width: 60px;
  height: 34px;
`;

export const Text = styled.span`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.body};
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
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;

  ${p => p.checked && 'background-color: #2196F3;'}

  :before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.4s;
    transition: 0.4s;

    ${p => p.checked && 'transform: translateX(26px);'};
  }
`;

export const Selector = styled(Field)`
  min-height: 32px;
  width: 100%;
`;

export const Error = styled.div`
  margin-top: ${p => p.theme.space[2]}px;

  color: ${p => p.theme.colors.expense};
  text-align: center;
`;

export const Title = styled.h2`
  margin-bottom: ${p => p.theme.space[4]}px;

  text-align: center;
  font-family: ${p => p.theme.fonts.body};
  font-size: ${p => p.theme.fontSizes.xl}px;
  font-weight: ${p => p.theme.fontWeights.normal};
  line-height: ${p => p.theme.lineHeights.heading};
`;

export const SubmitButton = styled.button`
  margin: 0 auto;

  width: 300px;
  height: 50px;

  background: ${p => p.theme.colors.primary};
  border-radius: ${p => p.theme.radii.light}px;
  border-color: transparent;

  color: ${p => p.theme.colors.textLight};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
`;
export const CancelButton = styled.button`
  margin: 0 auto;

  width: 300px;
  height: 50px;

  background: ${p => p.theme.colors.lightBg};
  border-radius: ${p => p.theme.radii.light}px;
  border: ${p => p.theme.borders.accented};

  color: ${p => p.theme.colors.secondary};
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.normal};
  font-size: ${p => p.theme.fontSizes.m}px;
  line-height: ${p => p.theme.lineHeights.body};
  text-align: center;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
`;
