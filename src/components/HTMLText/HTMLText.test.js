 /* global render */
 import React from "react";
 import HTMLText from "./HTMLText.jsx";
  
 const testText = "<p><a href='https://www.pixijs.com/'>PixiJS</a></p>";
 it("renders the HTMLText component correctly", () => {
   const { container } = render(<HTMLText text={testText} />);
   expect(container).toMatchSnapshot();
 });
 