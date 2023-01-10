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

export const Checkbox = styled(Field)``;

export const Selector = styled(Field)`
  min-height: 32px;
  width: 100%;
`;

export const Error = styled.div`
  margin-top: ${p => p.theme.space[1]}px;

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

export const Switch = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${p => p.theme.space[3]}px;
`;

export const Text = styled.span`
  font-family: ${p => p.theme.fonts.heading};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: ${p => p.theme.fontSizes.s}px;
  line-height: ${p => p.theme.lineHeights.body};
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
