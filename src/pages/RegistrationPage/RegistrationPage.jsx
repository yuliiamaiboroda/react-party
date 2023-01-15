import React from 'react';
import RegistrationForm from 'components/RegistrationForm';
import {
  ImageDiv,
  Wrapper,
  Image,
  P,
  FormWrapper,
} from 'pages/LoginPage/LoginPage.styled';
import Media from 'react-media';
import frameTablet from '../../images/frame-registration/frame-tablet.png';
import frameDesc from '../../images/frame-registration/frame-desctop.png';

export default function LoginPage() {
  return (
    <Wrapper>
      <ImageDiv>
        <Media
          queries={{
            tablet: '(max-width: 1279px)',
          }}
        >
          {matches =>
            matches.tablet ? (
              <Image src={frameTablet} alt="frame" />
            ) : (
              <Image src={frameDesc} alt="frame" />
            )
          }
        </Media>
        <P> Finance App</P>
      </ImageDiv>
      <FormWrapper>
        <RegistrationForm />
      </FormWrapper>
    </Wrapper>
  );
}
