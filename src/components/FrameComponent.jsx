import "./FrameComponent.css";

const FrameComponent = () => {
  return (
    <div className="title-parent">
      <div className="title1">My bookings</div>
      <div className="frame-wrapper">
        <div className="clipboard-instance-container-parent">
          <div className="clipboard-instance-container">
            <img
              className="clipboard-icon"
              loading="lazy"
              alt=""
              src="/images/Clipboard.png"
            />
          </div>
          <div className="download-button-container">
            <div className="graphic-design-full-course-parent">
              <div className="graphic-design-full">
                Graphic design (full course)
              </div>
              <div className="form-fields-checkbox-input-set">
                <button className="buttonwhitelleadingdefault">
                  <img className="download-icon1" alt="" src="/images/Download.png" />
                  <div className="balanced-design">Invoice PDF</div>
                </button>
                <button className="buttonwhitelleadingdefault">
                  <img
                    className="download-icon1"
                    alt=""
                    src="/images/Download.png"
                  />
                  <div className="text15">Receipt PDF</div>
                </button>
              </div>
            </div>
            <div className="invoice-info">
              <div className="subject-title-parent">
                <div className="subject-title">
                  <div className="subject">Subject</div>
                  <div className="design-for-intermediates">
                    Design for intermediates - L1
                  </div>
                </div>
                <div className="subject-title1">
                  <div className="sessions">Sessions</div>
                  <div className="sessions1">10 </div>
                </div>
              </div>
              <div className="invoice-parent">
                <div className="invoice">Invoice</div>
                <div className="download-button1">13</div>
              </div>
              <div className="valid-till-parent">
                <div className="valid-till">Valid till</div>
                <div className="feb-15-2024">Feb 15, 2024 (23 days left)</div>
              </div>
            </div>
            <div className="Balance">
            
              <div className="balance-6-parent">
                <div className="balance-6">
                  <span>{`Balance `}</span>
                  <span className="span">6</span>
                </div>
                <div className="scheduled-label">
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                  <input
                    className="form-fieldscheckbox-input"
                    type="checkbox"
                  />
                </div>
              </div>
              <div className="attended-checkbox">
                <div className="scheduled-3">
                  <span>{`Scheduled `}</span>
                  <span className="span1">3</span>
                </div>
                <div className="form-field-inputs-parent">
                  <div className="form-field-inputs">
                    <img
                      className="clock"
                      alt=""
                      src="/images/Frame 503.png"
                    />
                  </div>
                  <div className="form-field-inputs2">
                    <img className="vector-icon" alt="" src="/vector-1.svg" />
                  </div>
                  <div className="form-field-inputs3">
                    <img className="vector-icon1" alt="" src="/vector-2.svg" />
                  </div>
                </div>
              </div>
              <div className="form-field-inputs4">
                <div className="attended-5">
                  <span className="green">{`Attended `}</span>
                  <span className="span2">5</span>
                </div>
                <div className="form-field-inputs5">
                  <img
                    className="form-fieldscheckbox-input11"
                    loading="lazy"
                    alt=""
                    src="/images/Checkbox input.png"
                  />
                  <img
                    className="form-fieldscheckbox-input11"
                    alt=""
                    src="/images/Checkbox input.png"
                  />
                  <img
                    className="form-fieldscheckbox-input11"
                    alt=""
                    src="/images/Checkbox input.png"
                  />
                  <img
                    className="form-fieldscheckbox-input11"
                    alt=""
                    src="/images/Checkbox input.png"
                  />
                  <img className="x-icon" loading="lazy" alt="" src="/images/X.png" />
                </div>
              </div>
            </div>
            </div>
          </div>
        </div>
        
      </div>
    
  );
};

export default FrameComponent;