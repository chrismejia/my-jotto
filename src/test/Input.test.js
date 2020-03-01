import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, storeFactory } from "./testUtils";
import Input from "../Input";

const setup = (initialState = {}) => {
  const store = storeFactory(initialState);
  const wrapper = shallow(<Input store={store} />);

  console.log(wrapper.debug());
  // This gave us the HigherOrder Component that redux wraps the shallow rendered component in.
  // <ContextProvider value={{...}}>
  //   <Input store={{...}} dispatch={[Function: dispatch]} />
  // </ContextProvider>
};

setup();

describe("render", () => {
  describe("while the word has not been guessed", () => {
    test("it renders the component without error", () => {});
    test("it renders input box", () => {});
    test("it renders submit box", () => {});
  });
  describe("word has been guessed", () => {
    test("it renders component without error", () => {});
    test("it does not render input box", () => {});
    test("it does not render submit button", () => {});
  });
});
