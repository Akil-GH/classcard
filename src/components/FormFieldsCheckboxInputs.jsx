import "./FormFieldsCheckboxInputs.css";

const FormFieldsCheckboxInputs = () => {
  return (
    <div className="Sidebar"><div className="dummy"></div>
    <form className="form-fields-checkbox-inputs">
      <div className="aec-tl">
        <img
          className="aec-tl-child"
          alt=""
          src="/images/saurav.png"
        />
        <div className="suraj-talreja-parent">
          <div className="suraj-talreja">{`Suraj Talreja `}</div>
          <div className="surajvtalrejagmailcom">surajvtalreja@gmail.com</div>
        </div>
        <img
          className="nav-hover-icon"
          alt=""
          src="/images/Vector.png"
        />
      </div>
      <div className="download-button">
        <button className="button">
          <img
            className="switch-horizontal-icon"
            alt=""
            src="/images/Switch horizontal.png"
          />
          <div className="text5">Switch organisation</div>
        </button>
        <button className="button">
          <img
            className="switch-horizontal-icon"
            alt=""
            src="/images/Pencil alt.png"
          />
          <div className="text5">Edit Profile</div>
        </button>
      </div>
      <div className="navigation">
        <div className="vertical-navigationitem">
          <button className="content">
            <img
              className="calendar-icon"
              loading="lazy"
              alt=""
              src="./images/Calendar.png"
            />
            <div className="text7">My calendar</div>
          </button>
        </div>
        <div className="vertical-navigationitem">
          <button className="content">
            <img className="cursor-click-icon" alt="" src="./images/Cursor click.png" />
            <div className="text7">My bookings</div>
          </button>
        </div>
        <div className="vertical-navigationitem2">
          <div className="content2">
            <img className="chat-icon" alt="" src="/chat.svg" />
            <div className="text9">Chat</div>
          </div>
        </div>
        <div className="vertical-navigationitem">
          <button className="content">
            <img className="hand-icon" loading="lazy" alt="" src="./images/Hand.png" />
            <div className="text7">Attendance history</div>
          </button>
        </div>
        <div className="vertical-navigationitem">
          <button className="content">
            <img
              className="currency-dollar-icon"
              loading="lazy"
              alt=""
              src="./images/Currency Dollar.png"
            />
            <div className="text7">Billing history</div>
          </button>
        </div>
        <div className="vertical-navigationitem">
          <button className="content">
            <img
              className="folder-icon"
              loading="lazy"
              alt=""
              src="./images/Folder.png"
            />
            <div className="text7">My files</div>
          </button>
        </div>
        <div className="vertical-navigationitem">
          <button className="content">
            <img
              className="folder-open-icon"
              loading="lazy"
              alt=""
              src="./images/Folder open.png"
            />
            <div className="text7">My courses</div>
          </button>
        </div>
        <div className="vertical-navigationitem">
          <button className="content">
            <img
              className="chart-bar-icon"
              loading="lazy"
              alt=""
              src="./images/Chart bar.png"
            />
            <div className="text7">Grades</div>
          </button>
        </div>
      </div>
    </form>
    <div className="dummy2"></div>
    </div>
  );
};

export default FormFieldsCheckboxInputs;