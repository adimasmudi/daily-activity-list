import React from "react";

export default function List({ data }) {
  return (
    <div className="container">
      {data.map((d) => (
        <div class="card mt-2">
          <div class="card-body">{d}</div>
        </div>
      ))}
    </div>
  );
}
