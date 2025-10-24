import React from "react";
import styled from "styled-components";

/* -------------------------
   Data (must be above component)
   ------------------------- */
const gradients = [
  "linear-gradient(744deg, #af40ff, #5b42f3 60%, #00ddeb)",
  "linear-gradient(744deg, #ff7eb3, #ff758c 60%, #ffb199)",
  "linear-gradient(744deg, #4facfe, #00f2fe 60%, #43e97b)",
  "linear-gradient(744deg, #ff9a9e, #fad0c4 60%, #fad0c4)",
  "linear-gradient(744deg, #a18cd1, #fbc2eb 60%, #fad0c4)",
  "linear-gradient(744deg, #89f7fe, #66a6ff 60%, #005bea)",
  "linear-gradient(744deg, #f6d365, #fda085 60%, #ff9a44)",
  "linear-gradient(744deg, #84fab0, #8fd3f4 60%, #43cea2)",
  "linear-gradient(744deg, #c471ed, #f64f59 60%, #12c2e9)",
  "linear-gradient(744deg, #f093fb, #f5576c 60%, #4facfe)",
];

const cardInfo = [
  { title: "UI / UX Design", name: "mikeandrewdesigner" },
  { title: "Web Development", name: "ghostdev" },
  { title: "Mobile App Development", name: "alexcode" },
  { title: "Full Stack Development", name: "sofiaworks" },
  { title: "SEO", name: "karanbuilds" },
  { title: "Content Marketing", name: "rajtech" },
  { title: "E-mail Marketing", name: "sneha.ai" },
  { title: "Social Media Marketing", name: "junomotion" },
  { title: "Meta ads", name: "claire.designs" },
  { title: "Google Campaign", name: "noahcreates" },
];

/* -------------------------
   Component
   ------------------------- */
const CardContainer = () => {
  return (
    <Section>
      <h2 className="section-title">Services We Offer</h2>

      {/* MARQUEE: track holds two copies of the card row for seamless loop */}
      <MarqueeContainer>
        <MarqueeTrack>
          {/* original set */}
          <CardRow>
            {gradients.map((bg, i) => (
              <Card key={`c-${i}`} gradient={bg}>
                <div className="e-card playing">
                  <div className="wave" />
                  <div className="wave" />
                  <div className="wave" />
                  <div className="infotop">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="icon"
                    >
                      <path
                        fill="currentColor"
                        d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862Z"
                      />
                    </svg>
                    <br />
                    {cardInfo[i]?.title}
                    <br />
                    <div className="name">{cardInfo[i]?.name}</div>
                  </div>
                </div>
              </Card>
            ))}
          </CardRow>

          {/* duplicated set (for seamless looping) */}
          <CardRow aria-hidden="true">
            {gradients.map((bg, i) => (
              <Card key={`dup-${i}`} gradient={bg}>
                <div className="e-card playing">
                  <div className="wave" />
                  <div className="wave" />
                  <div className="wave" />
                  <div className="infotop">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="icon"
                    >
                      <path
                        fill="currentColor"
                        d="M19.4133 4.89862L14.5863 2.17544C12.9911 1.27485 11.0089 1.27485 9.41368 2.17544L4.58674 4.89862C2.99153 5.7992 2 7.47596 2 9.2763V14.7235C2 16.5238 2.99153 18.2014 4.58674 19.1012L9.41368 21.8252C10.2079 22.2734 11.105 22.5 12.0046 22.5C12.6952 22.5 13.3874 22.3657 14.0349 22.0954C14.2204 22.018 14.4059 21.9273 14.5872 21.8252L19.4141 19.1012C19.9765 18.7831 20.4655 18.3728 20.8651 17.8825C21.597 16.9894 22 15.8671 22 14.7243V9.27713C22 7.47678 21.0085 5.7992 19.4133 4.89862Z"
                      />
                    </svg>
                    <br />
                    {cardInfo[i]?.title}
                    <br />
                    <div className="name">{cardInfo[i]?.name}</div>
                  </div>
                </div>
              </Card>
            ))}
          </CardRow>
        </MarqueeTrack>
      </MarqueeContainer>
    </Section>
  );
};

/* -------------------------
   Styles
   ------------------------- */

const Section = styled.section`
  padding: 40px 20px 80px;
  text-align: center;

  .section-title {
    font-size: 2rem;
    font-weight: 700;
    margin-bottom: 20px;
    color: #111827;
  }
`;

/* Outer container — mask area */
const MarqueeContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin: 40px 0;
`;

/* Track — moves horizontally infinitely */
const MarqueeTrack = styled.div`
  display: flex;
  flex-wrap: nowrap;
  animation: scroll 18s linear infinite; /* 🔥 adjust speed here */
  width: max-content; /* ensures it can extend beyond viewport */
  will-change: transform;
  transform: translate3d(0, 0, 0);

  &:hover {
    animation-play-state: paused; /* optional pause */
  }

  @keyframes scroll {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(-50%); /* move by exactly one row’s width */
    }
  }
`;

/* Single row of cards */
const CardRow = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 40px;
  padding: 12px 32px;
  flex: 0 0 auto; /* prevents shrinkage */
`;

/* individual card wrapper for layout control */
const Card = styled.div`
  width: 260px; /* slightly larger for spacing — adjust as you like */
  flex: 0 0 auto; /* prevents shrinking/growing */
  .e-card {
    background: transparent;
    box-shadow: 0px 10px 26px rgba(0, 0, 0, 0.08);
    position: relative;
    width: 100%;
    height: 360px;
    border-radius: 16px;
    overflow: hidden;
  }

  .wave {
    position: absolute;
    width: 540px;
    height: 700px;
    opacity: 0.6;
    left: 0;
    top: 0;
    margin-left: -50%;
    margin-top: -70%;
    background: ${({ gradient }) => gradient};
    border-radius: 40%;
    animation: wave 55s infinite linear;
  }

  .wave:nth-child(2),
  .wave:nth-child(3) {
    top: 210px;
  }

  @keyframes wave {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  .icon {
    width: 2.6em;
    margin-top: -1em;
    padding-bottom: 1em;
  }

  .infotop {
    text-align: center;
    font-size: 20px;
    position: absolute;
    top: 6.4em;
    left: 0;
    right: 0;
    color: white;
    font-weight: 700;
  }

  .name {
    font-size: 14px;
    font-weight: 300;
    position: relative;
    top: 14px;
    text-transform: lowercase;
  }
`;

/* Responsiveness: reduce speed and card sizes on smaller screens */
const media = {
  md: "@media(max-width: 900px)",
  sm: "@media(max-width: 600px)",
};

Card.displayName = "Card";
Card.defaultProps = {};

const ResponsiveCard = styled(Card)`
  ${media.md} {
    width: 220px;
    .e-card {
      height: 320px;
    }
  }

  ${media.sm} {
    width: 180px;
    .e-card {
      height: 270px;
    }
  }
`;

/* If you prefer to use ResponsiveCard in the JSX, replace <Card ...> with <ResponsiveCard ...> */

export default CardContainer;
