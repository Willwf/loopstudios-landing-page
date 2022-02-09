import {
  ContainerTitle,
  Creation,
  CreationImg,
  Creations,
  CreationsButton,
  CreationsContainer,
  CreationTitle,
  Description,
  DescriptionContainer,
  DescriptionImg,
  DescriptionTitle,
  Main,
  Title,
  TitleContainer,
} from "./styles";

function Homepage() {
  return (
    <Main>
      <TitleContainer>
        <Title>Immersive experiences that deliver</Title>
      </TitleContainer>
      <DescriptionContainer>
        <DescriptionImg
          src="./mobile/image-interactive.jpg"
          alt="Person watching a VR experience"
        />
        <DescriptionTitle>The Leader In Interactive VR</DescriptionTitle>
        <Description>
          Founded in 2011, Loopstudios has been producing world-class virtual
          reality projects for some of the best companies around the globe. Our
          award-winning creations have transformed businesses through digital
          experiences that bind to their brand.
        </Description>
      </DescriptionContainer>
      <CreationsContainer>
        <ContainerTitle>Our Creations</ContainerTitle>

        <Creations>
          <Creation>
            <CreationImg
              src="./mobile/image-deep-earth.jpg"
              alt="Deep Earth picture"
              className="deepEarth"
            />
            <CreationTitle>
              Deep
              <br />
              Earth
            </CreationTitle>
          </Creation>

          <Creation>
            <CreationImg
              src="./mobile/image-night-arcade.jpg"
              alt="Deep Earth picture"
              className="nightArcade"
            />
            <CreationTitle>
              Night
              <br />
              Arcade
            </CreationTitle>
          </Creation>

          <Creation>
            <CreationImg
              src="./mobile/image-soccer-team.jpg"
              alt="Deep Earth picture"
              className="soccerTeam"
            />
            <CreationTitle>
              Soccer
              <br />
              Team VR
            </CreationTitle>
          </Creation>

          <Creation>
            <CreationImg
              src="./mobile/image-grid.jpg"
              alt="Deep Earth picture"
              className="grid"
            />
            <CreationTitle>
              The
              <br />
              Grid
            </CreationTitle>
          </Creation>

          <Creation>
            <CreationImg
              src="./mobile/image-from-above.jpg"
              alt="Deep Earth picture"
              className="upAbove"
            />
            <CreationTitle>
              From Up
              <br />
              Above VR
            </CreationTitle>
          </Creation>

          <Creation>
            <CreationImg
              src="./mobile/image-pocket-borealis.jpg"
              alt="Deep Earth picture"
              className="pocketBorealis"
            />
            <CreationTitle>
              Pocket
              <br />
              Borealis
            </CreationTitle>
          </Creation>

          <Creation>
            <CreationImg
              src="./mobile/image-curiosity.jpg"
              alt="Deep Earth picture"
              className="theCuriosity"
            />
            <CreationTitle>
              The
              <br />
              Curiosity
            </CreationTitle>
          </Creation>

          <Creation>
            <CreationImg
              src="./mobile/image-fisheye.jpg"
              alt="Deep Earth picture"
              className="fisheye"
            />
            <CreationTitle>
              Make It
              <br />
              Fisheye
            </CreationTitle>
          </Creation>
        </Creations>

        <CreationsButton>See All</CreationsButton>
      </CreationsContainer>
    </Main>
  );
}

export { Homepage };
