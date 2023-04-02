import React, { useState, useEffect } from "react";

function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const headingElements = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
    const headingList = Array.from(headingElements).map((heading) => ({
      id: heading.id,
      text: heading.innerText,
      level: parseInt(heading.tagName.slice(1)),
    }));
    setHeadings(headingList);
  }, []);

  return (
    <div className="table-of-contents">
      <h2>Table of Contents</h2>
      <ul>
        {headings.map((heading) => (
          <li key={heading.id}>
            <a href={`#${heading.id}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TableOfContents;
