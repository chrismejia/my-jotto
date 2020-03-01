import { actionTypes } from "../actions";
import successReducer from "./successReducer";

// We want to test to ensure that if no action and no state is passed in, we return default (false).
// Additional we want to return true if the CORRECT_GUESS action type is passed in.

describe("successReducer", () => {
  test("returns default initial state of `false` when no action is passed", () => {
    const newState = successReducer();
    expect(newState).toBe(false);
  });

  test("returns state of `true` upon receiving an action of type `correctGuess`", () => {
    const newState = successReducer(undefined, {
      type: actionTypes.CORRECT_GUESS
    });
    expect(newState).toBe(true);
  });
});
