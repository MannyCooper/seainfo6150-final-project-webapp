 /* global render */
import React from "react";
import Me from "./Me";

describe("Me tests", () => {
  it("renders correctly", () => {
    const { container } = render(<Me />);
    expect(container).toMatchSnapshot();
  });
});
