import Button from "./components/Button";

function App() {
  return (
    <>
      <div className="vh-100 d-flex align-items-center justify-content-center ">
        <div className="bg-dark p-2 rounded">
          <div className="row">
            <div className="col">
              <Button />
              <Button />
              <Button />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button />
              <Button />
              <Button />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <Button />
              <Button />
              <Button />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
