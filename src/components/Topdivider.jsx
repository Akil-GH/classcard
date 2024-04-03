import "./Topdivider.css";

const Topdivider = () => {
    return (
      <header className="topdivider">
        <div className="primary">
          <img className="logo-icon"  alt="" src="/images/Mark.png" />
          <div className="search-for-a-task">
            <div className="icon-other-search">
              <img
                className="icon-other-search-child"
                alt=""
                src="/images/Icon.png"
              />
              <div className="trailing-content">
                <div className="navbarsicon-button">
                  <img
                    className="shopping-cart-icon"
                    alt=""
                    src="/images/cart.png"
                  />
                </div>
              </div>
            </div>
            <div className="avatar-with-text-parent">
              <div className="avatar-with-text">
                <img className="avatar-icon" alt="" src="/images/Avatar.png" />
                <div className="text">
                  <div className="title">Tom Cook</div>
                </div>
              </div>
              <img className="chevron-down-icon" alt="" src="/images/drop.png" />
            </div>
          </div>
        </div>
        <div className="calendar-navigation-item" />
        <div className="tab-parent">
          <button className="tab2">
            <div className="text3" >Classes</div>
          </button>
          <button className="tab2">
            <div className="text3">One-on-one</div>
          </button>
          <button className="tab2">
            <div className="text3">Packages</div>
          </button>
          <button className="tab2">
            <div className="text3">Courses</div>
          </button>
        </div>
      </header>
    )
}
export default Topdivider;