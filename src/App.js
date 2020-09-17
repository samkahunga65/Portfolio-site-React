import React from "react";
import Nav from "./Navbar";
import face from "./face.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />
      <section className="Landing">
        <div className="Big-Words">
          <p
            style={{
              fontFamily: "'Neuton', serif",
              color: "white",
              fontSize: "3rem",
              maxWidth: "24rem",
              fontWeight: "600",
            }}
          >
            My name is Kahunga, I make Websites.
          </p>
        </div>
        <div className="MyFace">
          <img src={face} />
        </div>
      </section>
      <section className="Post-Landing"></section>
    </div>
  );
}

export default App;
