import "./Builder.css";

export default function Builder({ data }) {
  return (
    <div id="Builder">
      <nav>
        <h1>
          Port<span>folio</span>
        </h1>
        <div style={{ display: "flex", alignItems: "center" }}>
          <a href="#home">
            <div>Home</div>
          </a>
          <a href="#aboutMe">
            <div>About Me</div>
          </a>
          <a href="#education">
            <div>Education</div>
          </a>
          <a href="#contactMe">
            <div>Contact Me</div>
          </a>
        </div>
      </nav>
      <section className="portfolio">
        <section id="home">
          <div style={{ flexGrow: 1 }}>
            <h3 className="name">Hi! I am {data.name}</h3>
            <p style={{ maxWidth: "75%" }}>{data.jobProfile}</p>
          </div>
          <img src={data.titlePhotoURL} alt="Title Pic" />
        </section>
        <section id="aboutMe">
          <img src={data.aboutMePhotoURL} alt="About Me Pic" />
          <div style={{ flexGrow: 1, maxWidth: "55%", padding: "0 2rem" }}>
            <h3>{data.job}</h3>
            <p>{data.summary}</p>
          </div>
        </section>
        <section id="skills">
          <h1>My Skills</h1>
          <div className="skillBox">
            <div className="skillCard">
              <p>{data.skill1}</p>
            </div>
            <div className="skillCard">
              <p>{data.skill2}</p>
            </div>
            <div className="skillCard">
              <p>{data.skill3}</p>
            </div>
            <div className="skillCard">
              <p>{data.skill4}</p>
            </div>
          </div>
        </section>
        <section id="education">
          <div style={{ maxWidth: "40%", flexGrow: 1 }}>
            <h2>Education</h2>
            <div className="itemsBox">
              <p>{data.college}</p>
              <p style={{ fontWeight: "bolder" }}>{data.collegeCourse}</p>
              <p>{data.collegeYear}</p>
            </div>
            <div className="itemsBox">
              <p>{data.school}</p>
              <p style={{ fontWeight: "bolder" }}>{data.schoolClasses}</p>
              <p>{data.schoolYear}</p>
            </div>
          </div>
          <div style={{ maxWidth: "40%", flexGrow: 1 }}>
            <h2>Experience</h2>
            <div className="itemsBox">
              <p>{data.project1}</p>
              <p style={{ fontWeight: "bolder" }}>{data.project1Skills}</p>
              <a href={data.project1Link}>
                <p>{data.project1Link}</p>
              </a>
            </div>
            <div className="itemsBox">
              <p>{data.project2}</p>
              <p style={{ fontWeight: "bolder" }}>{data.project2Skills}</p>
              <a href={data.project2Link}>
                <p>{data.project2Link}</p>
              </a>
            </div>
          </div>
        </section>
        <section id="contactMe">
          <h1>Get In Touch</h1>
          <form
            onSubmit={(event) => {
              event.preventDefault();
              alert("Thank you. Your request has been send");
            }}
          >
            <input placeholder="Full Name..." />
            <input placeholder="Full Email Id..." />
            <input placeholder="Full Mobile No..." />
            <textarea placeholder="Enter Address..." />
            <button type="submit">Submit</button>
          </form>
          <div
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "space-evenly",
              margin: "3rem 2rem 0rem 2rem",
            }}
          >
            <div className="iconButton">
              <i className="icon fa-solid fa-mobile fa-xl"></i>
              <a href={`tel:${data.number}`}>
                <h3>Phone</h3>
              </a>
            </div>
            <div className="iconButton">
              <i className="icon fa-solid fa-file fa-xl"></i>
              <a href={data.resumeLink}>
                <h3>Resume</h3>
              </a>
            </div>
            <div className="iconButton">
              <i className="icon fa-regular fa-envelope fa-xl"></i>
              <a href={`mailto:${data.email}`}>
                <h3>Mail</h3>
              </a>
            </div>
          </div>
        </section>
      </section>
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
    </div>
  );
}
