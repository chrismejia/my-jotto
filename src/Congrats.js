import React from "react";
import PropTypes from "prop-types";

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats" className="alert alert-success">
        <p data-test="congrats-message">Congrats! You guessed the word!</p>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

Congrats.propTypes = {
  success: PropTypes.bool.isRequired
};

export default Congrats;
