import "./Desktop1.css";

const Desktop1 = () => {
  return (
    <div className="desktop-1">
      <div className="topbar">
        <img className="topbar-child" alt="" src="../rectangle-9.svg" />
        <div className="sections">
          <b className="home">Home</b>
          <b className="skills1">Skills</b>
          <b className="projects2">Projects</b>
          <b className="contact-me2">Contact Me</b>
          <b className="about-me2">About Me</b>
        </div>
      </div>
      <img
        className="businessman-working-on-laptop-icon"
        alt=""
        src="../businessmanworkingonlaptop-1@2x.png"
      />
      <div className="topsection">
        <div className="tophometexts">
          <b className="its-soumyadeep">It’s Soumyadeep</b>
          <div className="rectangle-parent">
            <div className="rectangle-div" />
            <b className="hello">Hello,</b>
            <img
              className="icons8-waving-hand-emoji-48-1"
              alt=""
              src="../icons8wavinghandemoji48-1@2x.png"
            />
          </div>
        </div>
      </div>
      <b className="blockchain-learner-">{`Blockchain Learner - Full stack Developer `}</b>
      <img className="socialmedias-icon" alt="" src="../socialmedias.svg" />
    </div>
  );
};

export default Desktop1;
