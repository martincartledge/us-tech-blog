import React from "react";

export default function PostBody({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
