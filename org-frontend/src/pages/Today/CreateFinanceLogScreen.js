import styled from "styled-components";

export default function CreateFinanceLogScreen({ handleClick }) {
  function handleForm() {}
  return (
    <Wrapper>
      <CreateScreen>
        <h1>Add Finance Log:</h1>
        <input type="text" placeholder="Description" />
        <input type="select" placeholder="Class" />
        <form onSubmit={handleForm}>
          <div>
            <input type="radio" value="input" name="Input" /> Input
            <input type="radio" value="output" name="Output" /> Output
          </div>
          <button type="submit">Create</button>
          <button onClick={()=> handleClick(false)}>Cancel</button>
        </form>
      </CreateScreen>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: 2;
  right: 0;
  bottom: 0;
  background-color: #00000077;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CreateScreen = styled.div`
  background: #ffffff;
  height: 25rem;
  width: 20rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  > h1 {
    font-size: 1.5rem;
    font-weight: 700;
    text-align: center;
  }
  > input {
    height: 3rem;
    width: 15rem;
    font-weight: 400;
    font-size: 1rem;
    border-radius: 5px;
    color: #000000;
    background-color: #f8f8f8;
  }
  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    input {
      height: 1rem;
      width: 1rem;
      font-weight: 400;
      font-size: 1rem;
    }
    button {
      text-align: center;
      border-radius: 5px;
      background-color: #f8f8f8;
      font-size: 20px;
      cursor: pointer;
      height: 2rem;
      width: 8rem;
    }
  }
`;
