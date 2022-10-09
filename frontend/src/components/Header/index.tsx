import logo from '../../assets/img/logo.svg';

import './styles.css';

function Header() {
  return (
    <header>
      <div className="dsmeta-logo-container">
        <img src={logo} alt="DSMeta" />
        <h1>DSMeta</h1>
        <p> 
          <a href="https://github.com/antonio357/dsmeta">
            <p>GitHub Antonio Albuquerque</p></a>
        </p>
      </div>
    </header>
  )
}

export default Header;
