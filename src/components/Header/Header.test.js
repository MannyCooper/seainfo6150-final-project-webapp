 /* global render */
 import React from "react";
 import Header from "./Header.jsx";
  
 it("renders the Footer component correctly", () => {
   const { container } = render(<Header />);
   expect(container).toMatchSnapshot();
 });
 