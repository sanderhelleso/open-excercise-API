import React from "react";
import styled from "styled-components";
import Header from "./header/Header";

const Dashboard = () => {
    return (
        <Wrapper className="column">
            <Content>
                <StyledMain>
                    <StyledCont>
                        <Header />
                        <div className="section" />
                        <div className="section" />
                    </StyledCont>
                </StyledMain>
            </Content>
        </Wrapper>
    );
};

export default Dashboard;

const Wrapper = styled.div`
    background-color: #fff;
`;

const Content = styled.div`
    flex-grow: 1;
    overflow-y: auto;
    padding: 25px;
`;

const StyledMain = styled.main`
    min-width: 100%;
    min-height: 100vh;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
`;

const StyledCont = styled.div`
    width: 70%;
    display: grid;
    grid-row-gap: 3rem;
    padding: 3rem 0;

    .section {
        background-color: #eeeeee;
        min-height: 300px;
        padding: 2rem;
    }
`;
