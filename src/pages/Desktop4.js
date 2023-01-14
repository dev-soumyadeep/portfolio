import "./Desktop4.css";

const Desktop4 = () => {
  return (
    <div className="desktop-4">
      <div className="form">
        <div className="form-bg" />
        <div className="text-area">
          <div className="text">e.g text</div>
        </div>
        <div className="text-inputs">
          <div className="input-text-label">Email</div>
          <div className="input-field">
            <div className="text1">
              <div className="typing">Typing |</div>
              <img className="icon" alt="" />
            </div>
          </div>
          <div className="assistive-text">Assistive Text</div>
        </div>
        <div className="text-inputs1">
          <div className="input-text-label">Name</div>
          <div className="input-field">
            <div className="text1">
              <div className="typing">Typing |</div>
              <img className="icon" alt="" />
            </div>
          </div>
          <div className="assistive-text">Assistive Text</div>
        </div>
      </div>
      <div className="header1">
        <div className="contact-me">
          <p className="contact-me1"> Contact Me</p>
          <p className="blank-line2">&nbsp;</p>
        </div>
        <img className="vector-icon" alt="" src="../vector.svg" />
      </div>
      <div className="message">Message</div>
    </div>
  );
};

export default Desktop4;
