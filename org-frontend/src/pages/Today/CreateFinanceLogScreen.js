import styled from "styled-components";

export default function CreateFinanceLogScreen() {

    function handleForm(){

    }
  return (
    <Wrapper>
      <CreateScreen>
        <h1>Add Finance Log:</h1>
        <form onSubmit={handleForm}>
          <input type="text" placeholder="Description" />
          <input type="select" placeholder="Class" />
          <input type="radio" value="input" name="Input" /> Input
          <input type="radio" value="output" name="Output" /> Output

          <div>
            <button type="submit">Create</button>
            <button>Cancel</button>
          </div>
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
  height: 30rem;
  width: 20rem;
  border-radius: 1rem;
    
`;
