import './index.css'

const Header = () => (
  <div className="header">
    <div>
      <img
        src="https://helloar.io/images/logo-dark.svg"
        alt="logo"
        className="company-logo"
      />
    </div>
    <div className="sub-header">
      <div className="nav">
        <img
          className="logo"
          alt="logo"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjtfG_Y2kfDnUPkGydg7ecX_o-FEnfZbRIVHxuHlOqqg&s"
        />
        <p className="application-name">MY APPLICATION</p>
      </div>
      <div className="nav">
        <img
          alt="img"
          className="profile-img"
          src="https://assets.ccbp.in/frontend/react-js/esther-howard-img.png"
        />
        <p className="application-name">Barde ridel</p>
      </div>
    </div>
    <hr className="horizontal-line" />
  </div>
)

export default Header
