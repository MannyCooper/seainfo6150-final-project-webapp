 /* global render */
 import React from "react";
 import Error from "./Error";
 
 it("renders the Error component correctly", () => {
   const { container } = render(<Error />);
   expect(container).toMatchSnapshot();
 });
 