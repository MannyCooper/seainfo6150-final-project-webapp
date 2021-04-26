 /* global render */
 import React from "react";
 import TagItem from "./TagItem.jsx";
 
 const testTag = ['Test',10]
 
 it("renders the TagItem component correctly", () => {
   const { container } = render(<TagItem tag={testTag} />);
   expect(container).toMatchSnapshot();
 });
 