import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "./testUtils";
import Input from "../Input";

// This old setup doesn't work because we don't have a store set up.
// It throws an Invariant Violation talking about how it can't find a store.
//
// const setup = (initialState = {}) => {
//   const wrapper = shallow(<Input />);
//   console.log(wrapper.debug());
// };
//
// setup();
//
// In the testUtils, we'll make a storeFactory, for fresh stores for each test suite

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
