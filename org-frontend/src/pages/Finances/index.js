import styled from "styled-components";
import Header from "../../components/Header/Header";
import AddButton from "../../components/Icons/AddButton";
import { useState, useCallback, useContext, useEffect } from "react";

export default function FinancesPage() {
  const [create, setCreate] = useState(false);

  return (
    <Wrapper>
      <Header />
      <h2>My Finance Log</h2>
      <Box>
        <h2>Monthly Report</h2>
      </Box>
      <Box>
        <h2>Spending by Categories</h2>
      </Box>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #f8f8f8;
  position: relative;
  padding: 10rem 0 0rem 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  width: 100vw;
  height: 100vh;
  gap: 2rem;
  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
`;

const Box = styled.div`
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 1rem;
  width: 24rem;
  padding: 1rem 0;
  min-height: 16rem;
  > h2 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
`;
