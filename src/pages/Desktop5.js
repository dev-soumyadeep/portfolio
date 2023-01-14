import "./Desktop5.css";

const Desktop5 = () => {
  return (
    <div className="desktop-5">
      <div className="header">
        <div className="about-me">
          <p className="hi-im-soumyadeep"> About Me</p>
          <p className="blank-line">&nbsp;</p>
        </div>
        <img className="account-icon" alt="" src="../account.svg" />
      </div>
      <div className="info-box">
        <div className="info-box-child" />
        <img className="blue-1-1" alt="" src="../blue-1-1@2x.png" />
      </div>
      <div className="hi-im-soumyadeep-container">
        <p className="hi-im-soumyadeep">
          “hi!”, I’m Soumyadeep Roy from Kolkata , India. Currently I'm pursuing
          my undergrad in Computer Science from HITK. I have a keen interest in
          blockchain development and worked on both Ethereum and Hyperledger
          network. I'm good at designing Smart Contracts , developing Dapps etc.
          ETHER-JS , SOLIDITY , REACT-JS , HARDHAT are the libraries , languages
          and tools I used to develop my projects(visit the project section). I
          have also built projects on Full Stack Web Development.
        </p>
        <p className="hi-im-soumyadeep">&nbsp;</p>
        <p className="blank-line">
          I write blogs on various technology and love to share my knowledge
          with others. In my leisure time I love to read books on personality
          development and leadership. .
        </p>
      </div>
    </div>
  );
};

export default Desktop5;
