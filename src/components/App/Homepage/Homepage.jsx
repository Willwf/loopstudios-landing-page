import {
  ContainerTitle,
  Creation,
  CreationImg,
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
          award-winning creations have transformed business through digital
          experiences that bind to their brand.
        </Description>
      </DescriptionContainer>
      <CreationsContainer>
        <ContainerTitle>Our Creations</ContainerTitle>

        <Creation>
          <CreationImg
            src="./mobile/image-deep-earth.jpg"
            alt="Deep Earth picture"
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
          />
          <CreationTitle>
            Soccer
            <br />
            Team VR
          </CreationTitle>
        </Creation>

        <Creation>
          <CreationImg src="./mobile/image-grid.jpg" alt="Deep Earth picture" />
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
          />
          <CreationTitle>
            Make It
            <br />
            Fisheye
          </CreationTitle>
        </Creation>

        <CreationsButton>See All</CreationsButton>
      </CreationsContainer>
    </Main>
  );
}

export { Homepage };
