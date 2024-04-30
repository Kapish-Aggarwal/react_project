import "./Form.css";
import Section from "./Section";

export default function Form({ questions, data, setData }) {
  return (
    <>
      <div id="Form">
        <h1 style={{ textAlign: "center" }}>Form</h1>
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
      </div>
    </>
  );
}
