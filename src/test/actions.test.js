import { correctGuess, actionTypes } from "../actions";

describe("correctGuess", () => {
  test("returns an action with type `CORRECT_GUESS`", () => {
    const action = correctGuess();

    // Because we're dealing with mutable objects, we can't use toBe here since one {} !== a different {}. We use toEqual since it's a deep equal.

    expect(action).toEqual({ type: actionTypes.CORRECT_GUESS });
  });
});
