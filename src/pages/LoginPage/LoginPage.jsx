import React from 'react';
import LoginForm from 'components/LoginForm';
import { ImageDiv, Wrapper, Image, P, FormWrapper } from './LoginPage.styled';
import frameDesc from '../../images/frame-login/frame-desctop.png';
import frameTablet from '../../images/frame-login/frame-tablet.png';
import Media from 'react-media';

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
        <LoginForm />
      </FormWrapper>
    </Wrapper>
  );
}
