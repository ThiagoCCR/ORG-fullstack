import styled from "styled-components";
import FoodClassIcon from "../../components/Icons/financeLogClassIcons/foodClassIcon";

export default function FinanceLog({ name, value, type, logClass }) {
  return (
    <>
      <Wrapper type={type}>
        <TextAndIconContainer>
          <h2>{name}</h2>
          <FoodClassIcon
            iconProps={{
              color: "#040404",
              className: "global-class-name",
              size: "20px",
            }}
          />
        </TextAndIconContainer>
        <ValueContainer>
          <h2>{value}</h2>
        </ValueContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  padding: 0 1rem;
  height: 3rem;
  background-color: ${(props) =>
    props.type === "input" ? "#C6EEAE" : "#FC8787"};
`;

const TextAndIconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 30%;
  h2 {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
  }
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  width: 70%;
`;
