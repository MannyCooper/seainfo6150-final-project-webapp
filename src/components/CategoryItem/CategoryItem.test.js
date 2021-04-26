 /* global render */
 import React from "react";
 import CategoryItem from "./CategoryItem.jsx";
 
 const testCategory = ['Test',10]
 
 it("renders the CategoryItem component correctly", () => {
   const { container } = render(<CategoryItem category={testCategory} />);
   expect(container).toMatchSnapshot();
 });
 