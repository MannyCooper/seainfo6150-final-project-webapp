 /* global render */
 import React from "react";
 import Comment from "./Comment.jsx";
  
 it("renders the Comment component correctly", () => {
   const { container } = render(<Comment />);
   expect(container).toMatchSnapshot();
 });
 