import Balance from 'components/Balance';
import Currency from 'components/Currency';
import Header from 'components/Header';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Media from 'react-media';
import React, { Fragment, Suspense } from 'react';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllTransactions } from 'redux/transactionsController/transactionController-operations';
import {
  Div,
  Wrapper,
  DivContainer,
  DivWrapper,
  Splitter,
} from './DashBoardPage.styled';
import Container from 'components/Container';
import Loader from 'components/Loader';

export default function DashBoardPage() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllTransactions());
  }, [dispatch]);
  return (
    <>
      <Header />
      <DivWrapper>
        <Container>
          <Div>
            <Wrapper>
              <DivContainer>
                <Navigation />
                <Media
                  queries={{
                    medium: '(min-width: 768px) and (max-width: 1199px)',
                    large: '(min-width: 1200px)',
                  }}
                >
                  {matches => (
                    <Fragment>
                      {matches.medium && <Balance />}
                      {matches.large && <Balance />}
                    </Fragment>
                  )}
                </Media>
                <Media
                  queries={{
                    medium: '(min-width: 768px) and (max-width: 1199px)',
                    large: '(min-width: 1200px)',
                  }}
                >
                  {matches => (
                    <Fragment>
                      {matches.medium && <Currency />}
                      {matches.large && <Currency />}
                    </Fragment>
                  )}
                </Media>
              </DivContainer>
            </Wrapper>
            <Splitter></Splitter>
            <Suspense fallback={<Loader/>}>
              <Outlet />
            </Suspense>
          </Div>
        </Container>
      </DivWrapper>
    </>
  );
}
