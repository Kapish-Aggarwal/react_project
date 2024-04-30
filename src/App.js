import "./App.css";
import Form from "./Components/Form/Form";
import Builder from "./Components/Builder/Builder";
import { useState } from "react";
import FormData from "./formData";
import {
  clear,
  loadPreset1,
  loadPreset2,
  loadPreset3,
} from "./Components/Form/presets";

function App() {
  const [data, setData] = useState({
    showForm: true,
  });

  return (
    <main>
      {data?.showForm && (
        <Form questions={FormData} data={data} setData={setData} />
      )}
      {/* <div className="divider" /> */}
      {data?.showBuilder && <Builder data={data} />}
      {!data?.showForm && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            margin: "2rem 0",
          }}
        >
          <div
            className="button"
            onClick={() => {
              loadPreset1(setData);
              window.scrollTo(0, 0);
            }}
          >
            Load Preset 1
          </div>
          <div
            className="button"
            onClick={() => {
              loadPreset2(setData);
              window.scrollTo(0, 0);
            }}
          >
            Load Preset 2
          </div>
          <div
            className="button"
            onClick={() => {
              loadPreset3(setData);
              window.scrollTo(0, 0);
            }}
          >
            Load Preset 3
          </div>
          <div
            className="button"
            onClick={() => {
              setData({ ...data, showForm: true });
              window.scrollTo(0, 0);
            }}
          >
            Edit
          </div>
          <div
            className="button buttonClear"
            onClick={() => {
              clear(setData);
              window.scrollTo(0, 0);
            }}
          >
            Clear
          </div>
        </div>
      )}
    </main>
  );
}

export default App;
