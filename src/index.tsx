import React from "react";
import ReactDOM from "react-dom";
import ReactMarkdown from "react-markdown";
import rehypeHighlight from "rehype-highlight";

ReactDOM.render(
  <ReactMarkdown rehypePlugins={[rehypeHighlight]}>
    {"# Your markdown here"}
  </ReactMarkdown>,
  document.querySelector("#content")
);
