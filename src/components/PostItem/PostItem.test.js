 /* global render */
 import React from "react";
 import PostItem from "./PostItem";
 
 const test = {
    "ux-designer": {
        "Slug": "ux-designer",
        "Title": "7 UX Deliverables: What will I be making as a UX designer?",
        "Cover": "https://cdn.dribbble.com/assets/art-banners/romainbriaux-284c5096f64764a70b44faa03268b263c4b37365e988446318005ff367ced170.webp",
        "Content": "<p>Test.</p>",
        "Date": "2019-08-25",
        "Category": "Designer",
        "Tags": [
            "UX",
            "designer"
        ]
    }
 }

 it("renders the ArchiveItem component correctly", () => {
   const { container } = render(<PostItem post={test} key={test.Slug}/>);
   expect(container).toMatchSnapshot();
 });
 