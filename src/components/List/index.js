import React, { useState, useEffect } from "react";

export default function List({ setData, data }) {
  const deleteTodo = (dataToDelete) => () => {
    setData(
      data.filter(function (dt) {
        return dt !== dataToDelete;
      })
    );
  };

  useEffect(() => {
    setData(data);
  }, [data]);
  return (
    <div className="container">
      {data.map((d) => (
        <div class="card mt-2">
          <div className="card-header d-flex justify-content-end">
            <button class="btn" onClick={deleteTodo(d)}>
              &times;
            </button>
          </div>
          <div class="card-body">{d}</div>
        </div>
      ))}
    </div>
  );
}
