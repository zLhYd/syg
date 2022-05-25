import React from "react";
import "./home.css";

function Home() {
  return (
    <div className="home">
      <h1 className="nama">Hi 👋 i'm ZULHAYAD</h1>
      <p className="word">
        Hi, i'm Front End Developers. Who like to make website using React Js
        And Bootsrap.{" "}
        <a className="read" href="/about">
          Read About Me <i className="bi bi-arrow-right-short"></i>
        </a>{" "}
      </p>
      <div className="l-blog">
        <div className="blog-1">
          <h2 className="word2">Latest blog posts</h2>
          <a className="b" href="#">
            React App
          </a>

          <p className="b2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae,
            officia dolores facere quo sed, sunt quas exercitationem architecto
            in, inventore expedita molestias incidunt eaque.
          </p>
          <a className="b" href="#">
            Simple React App
          </a>

          <p className="b2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quae,
            officia dolores facere quo sed, sunt quas exercitationem architecto
            in, inventore expedita molestias incidunt eaque.
          </p>
        </div>
      </div>
      <a href="#" className="read2">
        Read All Post ➡️
      </a>
      <footer>
        <p className="foot">
          ©️2022 Create With <i class="bi bi-heart-fill"></i> zLhYd
        </p>
      </footer>
    </div>
  );
}

export default Home;
