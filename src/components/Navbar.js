import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Navbar(props) {
  const [text, setText] = useState("");
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const handleOnClick = () => {
    let preview = props.previewText;
    if (text === null || text.trim() === "") {
      props.alert(
        "Search box is blank!!! Please enter something in the Searchbar before click.",
        "danger",
        2500
      );
    } else if (preview === null || preview.trim() === "") {
      props.alert(
        "Textbox is blank!!! Please enter something in the textbox below before search.",
        "danger",
        2500
      );
    } else {
      if (preview.toLowerCase().includes(text.toLowerCase())) {
        let position = preview.toLowerCase().indexOf(text.toLowerCase()) + 1;
        const suffix = (pos) => {
          if (pos === 1) {
            return "st";
          } else if (pos === 2) {
            return "nd";
          } else if (pos === 3) {
            return "rd";
          }
          else{
            return "th";
          }
        };
        props.alert(
          "'" + text + "' is found at '" + position + suffix(position)
            + "' position",
          "success",
          2500
        );
      } else if (!preview.toLowerCase().includes(text.toLowerCase())) {
        props.alert("'" + text + "' is not found", "danger", 2500);
      }
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link to="/" className="navbar-brand">
          <img src={props.imagePath} alt="" height="20" />
          <span className="textLogo">{props.title}</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link active" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="about" className="nav-link active" aria-current="page">
                About
              </Link>
            </li>
          </ul>
          <div
            className="form-check form-switch float-md-right mx-5"
            style={{ color: props.mode === "dark" ? "white" : "black" }}
          >
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onChange={props.toggleMode}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              {props.toggleText}
            </label>
          </div>

          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onChange={handleOnChange}
            />
            <button
              className="btn btn-success"
              type="button"
              onClick={handleOnClick}
            >
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  imagePath: PropTypes.string,
  mode: PropTypes.string,
};
