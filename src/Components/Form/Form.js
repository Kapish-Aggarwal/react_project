import "./Form.css";
import Section from "./Section";
import { clear, loadPreset1, loadPreset2, loadPreset3 } from "./presets";

export default function Form({ questions, data, setData }) {
  return (
    <>
      <div id="Form">
        <h1 style={{ textAlign: "center" }}>Form</h1>
        {data?.showForm && (
          <div className="formBorder">
            {questions.map((ele, id, arr) => (
              <Section
                key={id}
                title={ele?.title}
                questions={ele?.questions}
                data={data}
                setData={setData}
              />
            ))}
            <div style={{ display: "flex", justifyContent: "space-around" }}>
              <div
                className="button"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setData({ ...data, showBuilder: true, showForm: false });
                }}
              >
                Submit
              </div>
              <div
                className="button"
                onClick={() => {
                  window.scrollTo(0, 0);
                  setData({ ...data, showBuilder: true, showForm: false });
                }}
              >
                Close
              </div>
            </div>
          </div>
        )}
      </div>
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
            }}
          >
            Load Preset 1
          </div>
          <div
            className="button"
            onClick={() => {
              loadPreset2(setData);
            }}
          >
            Load Preset 2
          </div>
          <div
            className="button"
            onClick={() => {
              loadPreset3(setData);
            }}
          >
            Load Preset 3
          </div>
          <div
            className="button"
            onClick={() => {
              setData({ ...data, showForm: true });
            }}
          >
            Edit
          </div>
          <div
            className="button buttonClear"
            onClick={() => {
              clear(setData);
            }}
          >
            Clear
          </div>
        </div>
      )}
    </>
  );
}
