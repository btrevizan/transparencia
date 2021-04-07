import React from 'react';
// import logo from '../Style/Icons/001-transparency.png';
import logo from '../Style/Icons/transparency-color.png';


const Header = () => {

  return (
    <div className="header">
        <span className="title" >
          <img src={logo} className="logo" alt="logo" />
          TRANSPARÊNCIA
        </span>
        <span className="sub-title">
          Despesas Públicas Federais: uma análise comparativa
        </span>
        <a
          className="link"
          href="https://github.com/btrevizan/transparencia#readme"
          target="_blank"
          rel="noopener noreferrer"
          >
          README
        </a>
    </div>
  );
};

export default Header;
