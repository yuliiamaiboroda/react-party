import Balance from 'components/Balance/Balance';
import Box from 'components/Box';
import Currency from 'components/Currency/Currency';
import Header from 'components/Header/Header';
import { Outlet } from 'react-router-dom';
import Navigation from 'components/Navigation';
import Media from 'react-media';
import React, { Fragment } from 'react';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllTransactions } from 'redux/transactionsController/transactionController-operations';

export default function DashBoardPage() {
  const dispatch = useDispatch(); 
  useEffect(()=>{
    dispatch(getAllTransactions());
  },
[dispatch]);
  return (
    <Box p={5}> 
    <Header />
    <Navigation />
    <Media  queries={{
           medium: "(min-width: 768px) and (max-width: 1199px)",
           large: "(min-width: 1200px)",
          }}>
     {matches => (
            <Fragment>
              {matches.medium &&  <Balance/>}
              {matches.large &&  <Balance/>}
            </Fragment>
          )}
        </Media>
          <Media  queries={{
           medium: "(min-width: 768px) and (max-width: 1199px)",
           large: "(min-width: 1200px)",
          }}>
     {matches => (
            <Fragment>
              {matches.medium && <Currency />}
              {matches.large && <Currency />}
            </Fragment>
          )}
        </Media>
    <Outlet/>
  </Box>
 );
}


