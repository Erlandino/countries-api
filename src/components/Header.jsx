// imports
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMoon as faMoonDark } from "@fortawesome/free-solid-svg-icons";
import { faMoon as faMoonLight } from "@fortawesome/free-regular-svg-icons";

export default function Header({ toggleBackgroundColor, isBlack }) {
  console.log(toggleBackgroundColor);
  console.log(isBlack);
  return (
    <header className="app_header">
      <h2 className="app_header_title">Where in the world</h2>
      <div className="app_header_dark-light-mode_container">
        {isBlack ? (
          <button
            onClick={toggleBackgroundColor}
            className="app_header_dark-light-mode_container_button"
          >
            <FontAwesomeIcon icon={faMoonDark} />
            <p>Light mode</p>
          </button>
        ) : (
          <button
            onClick={toggleBackgroundColor}
            className="app_header_dark-light-mode_container_button"
          >
            <FontAwesomeIcon icon={faMoonLight} />
            <p>Dark mode</p>
          </button>
        )}
      </div>
    </header>
  );
}

{
  /*
   */
}
