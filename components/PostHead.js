import React from "react";
import { longDate } from "libs/date";

export default function PostHead({ title, date }) {
  return (
    <>
      <h1>{title}</h1>
      <p>{longDate(date)}</p>
    </>
  );
}
