import React from "react";
import "./WorkPage.css";

function WorkPage() {
  return (
    <div className="WorkContainer">
      <div className="workPosition">
        <div className="workImage w1">
          <div className="title">
            <h2>Junior Front-end Developer</h2>
            <h4>Style Shifter - STATION F</h4>
          </div>
        </div>

        <div className="description">
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mohamedyassineagourram/",
                "_blank"
              )
            }
          >
            View Post
          </button>
          <p>
            I've been contributing to the development of both a user-facing
            plugin for size recommendation and virtual try-on, as well as a web
            admin panel for our brand partners. My role involves integrating the
            plugin with Shopify and other e-commerce platforms, focusing on
            creating a smooth, responsive, and cross-browser compatible user
            experience UI/UX. On the admin side, I’ve been helping design and
            build dashboards, analytics views, and customization tools to give
            brands more control and insight. I'm also digging into code
            optimization, adding animations, testing new features, and actively
            participating in technical discussions to explore new ideas that
            enhance usability and engagement.
          </p>
        </div>
      </div>

      <div className="workPosition">
        <div className="workImage w2">
          <div className="title">
            <h2>Venue Production Assistant</h2>
            <h4>Olympic Broadcasting Services - Jeux Olympiques Paris 2024</h4>
          </div>
        </div>

        <div className="description">
          <button
            onClick={() =>
              window.open(
                "https://www.linkedin.com/feed/update/urn:li:activity:7235305150175727616/",
                "_blank"
              )
            }
          >
            View Post
          </button>
          <p>
            As a Venue Production Assistant, I supported the Olympic
            Broadcasting Services crews in both live and non-live coverage. This
            role allowed me to collaborate closely with professionals from
            around the world, who generously shared their wealth of experience
            with me. Additionally, I had the unique opportunity to serve as a
            Reporter, conducting an interview with judo athlete Uta Abe
            following her match against the world number one, Diyora Keldiyorova
            of Uzbekistan. This experience significantly enhanced my
            communication skills. My responsibilities involved working with the
            camera crew to film athlete interviews post-competition for Olympic
            Channel Services and NBC News Olympics, ensuring that this content
            was delivered to TV channels worldwide. I also played a crucial role
            in the accurate transmission and confirmation of athlete interview
            information from the Mixed Zone to the Archives Office at the
            International Broadcasting Center.
          </p>
        </div>
      </div>
    </div>
  );
}

export default WorkPage;
