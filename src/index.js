import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux';
import store from './store'

import styled from "styled-components";

import { NavBar, Counters } from "./components";


const StyledMainContainer = styled.section`
  margin: 0;
  padding: 0;
  display: block;
`;


const App = () => {
    return(
        <StyledMainContainer>
            <NavBar />
            <Counters />
        </StyledMainContainer>
    )
};


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);