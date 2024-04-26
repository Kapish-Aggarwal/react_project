import style from "./InputBox.module.css";

export default function InputBox({ title, dataKey, data, setData, ...props }) {
  function updateValue(value) {
    let tdata = { ...data };
    tdata[dataKey] = value;
    setData(tdata);
  }

  return (
    <div className={style.InputBox}>
      <p className={style.InputTitle}>{title}:</p>
      {props?.textBox ? (
        <textarea
          onBlur={(event) => updateValue(event.target.value)}
          defaultValue={data[dataKey]}
          className={style.Input}
        />
      ) : (
        <input
          onBlur={(event) => updateValue(event.target.value)}
          defaultValue={data[dataKey]}
          className={style.Input}
        />
      )}
    </div>
  );
}
