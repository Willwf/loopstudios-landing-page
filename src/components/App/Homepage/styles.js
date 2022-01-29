import styled from "styled-components";
import * as colors from "../../styles/variables";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TitleContainer = styled.div`
  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Title = styled.h1`
  font-size: 4.2rem;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  color: ${colors.white};
  font-weight: 300;

  border: 0.2rem solid;
  padding: 2rem;
  margin: 2rem;
`;

export const DescriptionContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10rem;
`;

export const DescriptionImg = styled.img`
  width: 80vw;
  height: auto;
`;

export const DescriptionTitle = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  text-align: center;

  margin: 4rem 0 2rem 0;
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-family: "Alata", sans-serif;
  font-weight: 300;
  color: ${colors.darkGray};
  text-align: center;

  width: 75vw;
  line-height: 2.5rem;
`;

export const CreationsContainer = styled.section`
  margin: 10rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ContainerTitle = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  text-align: center;

  margin-bottom: 5rem;
`;

export const Creation = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;
`;

export const CreationImg = styled.img`
  width: 80vw;
  height: 18vh;
`;

export const CreationTitle = styled.p`
  font-size: 2rem;
  color: ${colors.white};
  width: 10rem;

  position: absolute;
  left: 2rem;
  bottom: 2rem;

  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
`;
export const CreationsButton = styled.button`
  width: 40vw;
  height: 7vh;

  border: 0.1rem solid;
  background: none;

  font-family: "Alata", sans-serif;
  text-transform: uppercase;
  letter-spacing: 0.4rem;

  cursor: pointer;

  &:hover {
    background: #00000012;
  }
`;
