import "./App.css";
import Form from "./Components/Form/Form";
import Builder from "./Components/Builder/Builder";
import { useState } from "react";
import FormData from "./formData";

function App() {
  const [data, setData] = useState({
    showForm: true,
  });

  return (
    <main>
      <Form questions={FormData} data={data} setData={setData} />
      <div className="divider" />
      {data?.showBuilder && <Builder data={data} />}
      <footer>
        <div>
          <a href="https://www.facebook.com/">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="https://in.linkedin.com/">
            <i className="fa-brands fa-linkedin-in"></i>
          </a>
          <a href="https://twitter.com/?lang=en">
            <i className="fa-brands fa-twitter"></i>
          </a>
        </div>
        <div>
          CopyRight © 2023 Website Template by kaps. All Rights Reserved
        </div>
      </footer>
    </main>
  );
}

export default App;
