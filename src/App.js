import { useState } from "react";
import Button from "./components/Button";

function App() {
  const [isExp, setExp] = useState(false);
  const rows = [1, 2, 3];
  const cols = [1, 2, 3];
  if (isExp === true) {
    console.log("game over");
  }
  return (
    <>
      {!isExp ? (
        <div className="vh-100 d-flex align-items-center justify-content-center ">
          <div className="bg-danger p-2 rounded">
            {rows.map((item) => (
              <div className="row">
                <div className="col">
                  {cols.map((i) => (
                    <Button isExp={isExp} setExp={setExp} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <App />
      )}
    </>
  );
}

export default App;
