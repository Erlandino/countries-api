// imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonDark } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";

export default function Header({ toggleBackgroundColor, isBlack }) {
  console.log(toggleBackgroundColor);
  console.log(isBlack);
  return (
    <header
      className="app_header"
      style={{ backgroundColor: isBlack ? "white" : "hsl(209, 23%, 22%)" }}
    >
      <h2 className="app_header_title" style={{ color: isBlack ? "black" : "white" }}>
        Where in the world
      </h2>
      <div className="app_header_dark-light-mode_container">
        {isBlack ? (
          <button
            onClick={toggleBackgroundColor}
            className="app_header_dark-light-mode_container_button app_header_dark-light-mode_container_light_button"
          >
            <FontAwesomeIcon
              icon={faMoonLight}
              className="app_header_dark-light-mode_container_button_icon"
            />
            <p className="app_header_dark-light-mode_container_button_txt">Dark mode</p>
          </button>
        ) : (
          <button
            onClick={toggleBackgroundColor}
            className="app_header_dark-light-mode_container_button app_header_dark-light-mode_container_dark_button"
          >
            <FontAwesomeIcon
              icon={faMoonDark}
              className="app_header_dark-light-mode_container_button_icon"
            />
            <p className="app_header_dark-light-mode_container_button_txt">Light mode</p>
          </button>
        )}
      </div>
    </header>
  );
}
