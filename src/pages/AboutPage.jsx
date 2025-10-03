import styled from "styled-components";

function AboutPage() {
  return (
    <StyledDiv>
      <h1>Welcome to the Todo Project</h1>
      <br />
      <h2>My name is Joshua, I'm a bit of an aquired taste...</h2>
      <h3>I grew up in Michigan, being the youngest out of 4.</h3>
      <h4>
        I graduated from Eastern Michigan University: <br/> &nbsp; Bachelors Degree in
        Simulation, Animation, and Gaming
      </h4>
      <br/>
      <h4>I am a Dreamer, Visonary, a Musician, an Artist, and a Hermit.</h4>
      <h4>Give me enough time and space to open up... <br/>
      Then I'll let you visit my Universe.</h4>
      <h4>Perhaps we can reciprocate and build something moving.</h4>
      <br/>
      <p> I was always told, don't ever judge a book by it's cover.</p>
      <p>So I don't</p>
    </StyledDiv>
  );
}

export default AboutPage;

const StyledDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80vw;
  height: 90vh;
  margin: 4rem auto 0 auto;
  align-items: flex-start;
  text-align: flex-start;
  line-height: 1.5rem;
  padding: 0 1rem;
`;
