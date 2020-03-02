import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "./testUtils";
import Input from "../Input";

/**
 * Returns the child component of the connected component hooked up to the test store.
 * @param {object} initialState
 * @function setup
 * @returns wrapper - The shallow rendered child component we got after diving
 */
const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />)
    .dive()
    .dive();

  return wrapper;
  // console.log(wrapper.debug());
  // This gave us the HigherOrder Component that redux via connect wraps the shallow rendered component in.
  // <ContextProvider value={{...}}>
  //   <Input store={{...}} dispatch={[Function: dispatch]} />
  // </ContextProvider>
};

describe("render", () => {
  describe("while the word has not been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: false };
      wrapper = setup(initialState);
    });

    test("it renders the component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("it renders input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(1);
    });
    test("it renders submit box", () => {
      const submitBox = findByTestAttr(wrapper, "submit-button");
      expect(submitBox.length).toBe(1);
    });
  });

  describe("when word has been guessed", () => {
    let wrapper;
    beforeEach(() => {
      const initialState = { success: true };
      wrapper = setup(initialState);
    });
    test("it renders component without error", () => {
      const component = findByTestAttr(wrapper, "component-input");
      expect(component.length).toBe(1);
    });
    test("it does not render input box", () => {
      const inputBox = findByTestAttr(wrapper, "input-box");
      expect(inputBox.length).toBe(0);
    });
    test("it does not render submit button", () => {
      const submitBtn = findByTestAttr(wrapper, "submit-button");
      expect(submitBtn.length).toBe(0);
    });
  });
});

describe("update state", () => {});
