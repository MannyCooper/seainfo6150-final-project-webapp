 /* global render */
 import React from "react";
 import Footer from "./Footer.jsx";
  
 it("renders the Footer component correctly", () => {
   const { container } = render(<Footer />);
   expect(container).toMatchSnapshot();
 });
 