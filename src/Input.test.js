import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr } from "./test/testUtils";
import Input from "./Input";

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
