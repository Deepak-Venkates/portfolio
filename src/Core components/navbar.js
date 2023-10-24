import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const Navbar = () => {


  const [checked, setChecked] = useState(false);


  const Changecheked = () => {
    console.log(checked);
    setChecked(!checked);
    ChangeTheme();
  }
  console.log(checked);

  const ChangeTheme = () => {
    if (checked === true) {
      document.documentElement.style.setProperty('--background', "#FFFFFF");
      document.documentElement.style.setProperty('--primary', "#7F00FF");
      document.documentElement.style.setProperty('--secondary', "#E5E4E2");
      document.documentElement.style.setProperty('--text', "#2E2E2E");
    }
    else {
      document.documentElement.style.setProperty('--background', "#171717");
      document.documentElement.style.setProperty('--primary', "#89CFF0");
      document.documentElement.style.setProperty('--secondary', "	#28282B");
      document.documentElement.style.setProperty('--text', "#FFFFFF");
    }


  }
  return (
    <div className='nav'>
      <nav>
        <div className='name'><h2>Deepak</h2></div>
        <div className="tools">
          <a className='pages nhome'>Home</a>
          <a className='pages nabout'>About</a>
          <a className='pages nresume'>Resume</a>
          <a className='pages nskills'>Skills</a>
          <a className='pages ncontact'>Contact</a>
          <div className="mode">
            <i className="bi bi-brightness-high" />
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                checked={checked}
                onChange={Changecheked}
              />
            </div>
            <i className="bi bi-moon-stars" />
          </div>
          <button
                type="button"
                className="btn btn-primary"
                data-bs-toggle="modal"
                data-bs-target="#exampleModal"
                style={{border:"none"}}
            >
                Pick Your Theme
            </button>
        </div>
      </nav>
    </div>

  )

}

export default Navbar;