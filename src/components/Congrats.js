import React from "react";

/**
 * Functional react component for congratulatory message.
 * @function
 * @returns {JSX.Element} - Rendered component (or null if 'success' prop is false)
 */
const Congrats = props => {
  if (props.success) {
    return (
      <div data-test="component-congrats">
        <p data-test="congrats-message">Congrats! You guessed the word!</p>
      </div>
    );
  } else {
    return <div data-test="component-congrats" />;
  }
};

export default Congrats;
