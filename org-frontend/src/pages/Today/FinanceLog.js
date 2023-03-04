import styled from "styled-components";
import DeleteIcon from "../../components/Icons/DeleteIcon";
import SortLogClassIcon from "./SortLogClassIcon";

export default function FinanceLog({ id, name, value, type, logClass }) {
  function handleDeleteLog() {}

  return (
    <>
      <Wrapper type={type}>
        <TextAndIconContainer>
          <h2>{name}</h2>
          <SortLogClassIcon logClass={logClass} />
        </TextAndIconContainer>
        <ValueContainer>
          <h2>{value}</h2>
          <div onClick={handleDeleteLog}>
            <DeleteIcon
              iconProps={{
                color: "#040404",
                className: "global-class-name",
                size: "20px",
              }}
            />
          </div>
        </ValueContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
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
  justify-content: center;

  h2 {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin-right: 1rem;
    word-break: break-word;
  }
`;

const ValueContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-end;
  h2 {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    margin-right: 1rem;
    word-break: break-word;
  }
`;
