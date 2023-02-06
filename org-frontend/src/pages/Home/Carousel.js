import styled from "styled-components";
import ArrowLeft from "../../components/Icons/ArrowLeft";
import ArrowRight from "../../components/Icons/ArrowRight";

export default function Carousel() {
  return (
    <Wrapper>
      <Container>
        <ArrowLeft
          iconProps={{
            color: "#040404",
            className: "global-class-name",
            size: "50px",
          }}
        />
        <ArrowRight
          iconProps={{
            color: "#040404",
            className: "global-class-name",
            size: "50px",
          }}
        />
      </Container>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: #ffffff;
  width: 24rem;
  height: 4rem;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
