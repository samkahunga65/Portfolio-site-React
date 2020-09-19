import React from "react";
import Nav from "./Navbar";
import face from "./face.png";
import website from "./web-search-engine.png";
import customer from "./customer-service.png";
import Kard from "./Cards";
import shopping from "./04.svg";
import creator from "./creator 2.svg";
import business from "./Business_(198).jpg";
import growth from "./growth.png";
import gmail from "./gmail.png";
import whatsapp from "./whatsapp.png";
import phone from "./phone-call.png";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Nav />

      <section className="Landing">
        <div className="Big-Words">
          <h1
            style={{
              fontFamily: "'Neuton', serif",
              color: "white",
              fontSize: "4rem",
              fontWeight: "600",
            }}
          >
            My name is Kahunga, I make Websites.
          </h1>
        </div>
        <div className="MyFace">
          <img src={face} alt="" className="Face" />
        </div>
      </section>
      <section className="Post-Landing">
        <div className="first">
          <div className="quality">
            <div className="icon">
              <img src={website} alt="" />
            </div>
            <h3>I design and build websites completely from scratch</h3>
          </div>
        </div>
        <div className="second">
          <div className="quality">
            <div className="icon">
              <img src={customer} alt="" />
            </div>
            <h3>I tailor-make your website to meet your business goals</h3>
          </div>
        </div>
        <div className="third">
          <div className="quality">
            <div className="icon">
              <img src={growth} alt="" />
            </div>
            <h3>My goal is to help you reach your true online potential</h3>
          </div>
        </div>
      </section>
      <section className="myProjects">
        <div className="div1">
          <h1>Here is some of my work</h1>
        </div>
        <div className="div2">
          <Kard />
        </div>
        <div className="div3">
          <Kard />
        </div>
        <div className="div4">
          <Kard />
        </div>
        <div className="div5">
          <h1>project A</h1>
        </div>
        <div className="div6">
          <h1>project B</h1>
        </div>
        <div className="div7">
          <h1>project C</h1>
        </div>
      </section>
      <section className="WCID">
        <div className="div1">
          <h1>What I can do for you</h1>
          <h4>
            Whether you need a website to showcase your services or allow your
            customers to buy your products - we can design, build and deliver
            you a website that's tailor-made to your business needs.
          </h4>
        </div>
        <div className="div2">
          <div className="kard">
            <img src={shopping} alt="" />
          </div>
        </div>
        <div className="div3">
          <h4>
            e-commerce website, make it easyfor your customers to get your
            product
          </h4>
        </div>
        <div className="div4">
          <div className="kard">
            <img src={creator} alt="" />
          </div>
        </div>
        <div className="div5">
          <h4>personal blogs, show your followers your life</h4>
        </div>
        <div className="div6">
          <div className="kard">
            <img src={business} alt="" />
          </div>
        </div>
        <div className="div7">
          <h4>
            Portfolio site, put your skills on the web for potential employers
            to see
          </h4>
        </div>
      </section>
      <footer>
        <div className="contact">
          <h1>You can contact me through</h1>
          <div className="socials">
            <div className="s">
              <a
                href="mailto:samkahunga65@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img src={gmail} alt="" />
                  <span class="tooltiptext">click to email me</span>
                </div>
              </a>

              <h2>samkahunga@gmail.com</h2>
            </div>
            <div className="s">
              <a
                href="https://wa.me/254770585330"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img src={whatsapp} alt="" />
                  <span class="tooltiptext">click to text me</span>
                </div>
              </a>
            </div>
            <div className="s">
              <a
                href="tel:071-384-7445"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="img">
                  <img src={phone} alt="" />
                  <span class="tooltiptext">click to call me</span>
                </div>
              </a>
              <h2>+254 771 585 330 \ +254 713 847 445</h2>
            </div>
          </div>
        </div>
        <div class="container flex items-center justify-center py-8 text-center">
          © 2020 Kahunga. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
}

export default App;
