import InputBox from "./InputBox";

export default function Section({ title, questions = [], data, setData }) {
  return (
    <div style={{ margin: "0 0 3rem 0" }}>
      <h2>{title}</h2>
      <div className="divider" />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
        }}
      >
        {questions.map((ele, id) => (
          <InputBox
            key={id}
            title={ele.title}
            textBox={ele.textBox}
            dataKey={ele.key}
            data={data}
            setData={setData}
          />
        ))}
      </div>
    </div>
  );
}
