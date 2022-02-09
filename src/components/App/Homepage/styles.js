import styled from "styled-components";
import * as colors from "../../styles/variables";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    justify-content: initial;
    align-items: initial;

    max-width: 80vw;
    margin: auto;
  }
`;

export const TitleContainer = styled.div`
  height: 90vh;

  display: flex;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    height: 70vh;
    justify-content: initial;
  }
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

  @media (min-width: 1024px) {
    width: 40vw;
  }
`;

export const DescriptionContainer = styled.div`
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  margin-top: 10rem;

  @media (min-width: 1024px) {
    height: auto;

    flex-direction: row;
    justify-content: initial;
    align-items: initial;

    position: relative;
  }
`;

export const DescriptionImg = styled.img`
  width: 80vw;
  height: auto;

  @media (min-width: 1024px) {
    width: 50vw;

    align-self: initial;
  }
`;

export const DescriptionTitle = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  text-align: center;

  margin: 4rem 0 2rem 0;

  @media (min-width: 1024px) {
    position: absolute;
    right: 0;
    bottom: 8rem;

    background-color: ${colors.white};
    text-align: start;

    max-width: 30rem;
    margin: 0;
    padding: 7rem 0 0 7rem;
  }
`;

export const Description = styled.p`
  font-size: 1.5rem;
  font-family: "Alata", sans-serif;
  font-weight: 300;
  color: ${colors.darkGray};
  text-align: center;

  width: 75vw;
  line-height: 2.5rem;

  @media (min-width: 1024px) {
    position: absolute;
    right: 0;
    bottom: -1px;

    background-color: ${colors.white};
    text-align: start;
    line-height: 2rem;

    font-size: 1rem;
    max-width: 30rem;
    margin: 0;
    padding: 5px 0 0 7rem;
  }
`;

export const CreationsContainer = styled.section`
  margin: 10rem 0;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const ContainerTitle = styled.h2`
  font-size: 3rem;
  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;
  text-align: center;

  margin-bottom: 5rem;

  @media (min-width: 1024px) {
    grid-column: 1;
    justify-self: start;
    align-self: center;
  }
`;

export const Creations = styled.div`
  @media (min-width: 1024px) {
    grid-column: 1 / 3;
    grid-row: 2;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 2rem;
  }
`;

export const Creation = styled.div`
  margin-bottom: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  position: relative;

  cursor: pointer;

  @media (min-width: 1024px) {
    margin-bottom: 0;

    /* grid-row: 2 / 4; */
  }
`;

export const CreationImg = styled.img`
  width: 80vw;
  height: 18vh;

  @media (min-width: 1024px) {
    width: 18vw;
    height: 50vh;

    &.deepEarth {
      content: url("./desktop/image-deep-earth.jpg");
    }

    &.nightArcade {
      content: url("./desktop/image-night-arcade.jpg");
    }

    &.soccerTeam {
      content: url("./desktop/image-soccer-team.jpg");
    }

    &.grid {
      content: url("./desktop/image-grid.jpg");
    }

    &.upAbove {
      content: url("./desktop/image-from-above.jpg");
    }

    &.pocketBorealis {
      content: url("./desktop/image-pocket-borealis.jpg");
    }

    &.theCuriosity {
      content: url("./desktop/image-curiosity.jpg");
    }

    &.fisheye {
      content: url("./desktop/image-fisheye.jpg");
    }
  }
`;

export const CreationTitle = styled.p`
  font-size: 2rem;
  color: ${colors.white};
  width: 10rem;

  width: 70vw;
  height: 12vh;
  padding: 3vh 5vw;

  position: absolute;
  left: 0;

  display: flex;
  align-items: end;

  background: linear-gradient(to right, #000000bf, #00000000);

  text-transform: uppercase;
  font-family: "Josefin Sans", sans-serif;
  font-weight: 300;

  &:hover {
    background: #ffffff99;
    color: ${colors.black};
  }

  @media (min-width: 1024px) {
    width: 8vw;
    height: 44vh;

    background: linear-gradient(to top, #000000bf, #00000000);

    padding: 3vh 7vw 3vh 3vw;
  }
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
    background: ${colors.black};
    color: ${colors.white};
  }

  @media (min-width: 1024px) {
    width: 12vw;
    height: 5vh;

    grid-column: 2;
    grid-row: 1;

    justify-self: end;
    align-self: flex-start;
  }
`;
