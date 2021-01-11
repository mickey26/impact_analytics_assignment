import React from "react";
import "./Header.css";

function Header() {
  return (
    <div className='header'>
      {/* <h2 href  >Shortlisted</h2>
      <h2>Rejected</h2> */}
      <ul>
        <li>
          <a href='/shortlisted-page'>Shortlisted</a>
        </li>
        <li>
          <a href='/rejected-page'>Rejected</a>
        </li>
      </ul>
    </div>
  );
}

export default Header;
