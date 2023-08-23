import React from "react";
import { useState } from "react";
import Button from "./Button";
function Fungame() {
  const [score, setScore] = useState(0);
  const [isExp, setExp] = useState(false);
  var complexity = 0;

  let rows = [1, 2, 3];
  let cols = [1, 2, 3];
  if (score >= 9) {
    complexity = 1;
    cols = [...cols, 4];
  }
  if (score >= 12) {
    rows = [...rows, 4];
  }
  if (score >= 16) {
    complexity = 2;
    cols = [...cols, 5];
  }
  if (score >= 20) {
    rows = [...rows, 5];
  }
  if (score >= 25) {
    complexity = 3;
    cols = [...cols, 6];
  }
  if (score >= 30) {
    rows = [...rows, 6];
  }
  if (score >= 36) {
    cols = [...cols, 7];
  }
  if (score >= 42) {
    rows = [...rows, 7];
  }
  return (
    <div>
      {!isExp ? (
        <div>
          <div className="vh-100 d-flex align-items-center justify-content-center flex-column">
            <div className="mb-1 d-flex justify-content-between">
              <div className="btn btn-danger text-light"> Score: {score} </div>
              <div className="btn btn-danger">
                <i className="fa-solid fa-play "></i>
              </div>
            </div>

            <div className="bg-danger p-2 rounded">
              {rows.map((item) => (
                <div className="row">
                  <div className="col">
                    {cols.map((i) => (
                      <Button
                        setExp={setExp}
                        score={score}
                        setScore={setScore}
                        complexity={complexity}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        <div className="transition">
          <Fungame />
        </div>
      )}
    </div>
  );
}

export default Fungame;
