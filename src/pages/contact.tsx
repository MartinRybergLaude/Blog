import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Index() {
  const LinkIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="24px"
        viewBox="0 0 24 24"
        width="24px"
        fill="var(--color-primary)"
      >
        <g>
          <rect fill="none" height="24" width="24" />
        </g>
        <g>
          <g>
            <path d="M17,7h-3c-0.55,0-1,0.45-1,1s0.45,1,1,1h3c1.65,0,3,1.35,3,3s-1.35,3-3,3h-3c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1h3 c2.76,0,5-2.24,5-5S19.76,7,17,7z M8,12c0,0.55,0.45,1,1,1h6c0.55,0,1-0.45,1-1s-0.45-1-1-1H9C8.45,11,8,11.45,8,12z M10,15H7 c-1.65,0-3-1.35-3-3s1.35-3,3-3h3c0.55,0,1-0.45,1-1s-0.45-1-1-1H7c-2.76,0-5,2.24-5,5s2.24,5,5,5h3c0.55,0,1-0.45,1-1 C11,15.45,10.55,15,10,15z" />
          </g>
        </g>
      </svg>
    )
  }

  return (
    <Layout title="Contact me" tag="contact">
      <Seo title="Contact" />
      <address>
        <p className="desc">
          I'm always available at{" "}
          <a
            className="arrow-link"
            style={{ display: "inline-flex" }}
            href="mailto:martin.ryberg.laude@gmail.com"
          >
            martin.ryberg.laude@gmail.com
            <LinkIcon />
          </a>
        </p>
        <p className="desc">Other platforms you can find me on:</p>
        <ul style={{ listStylePosition: "inside" }}>
          <li>
            <a
              className="arrow-link"
              style={{ display: "inline-flex" }}
              href="https://github.com/MartinRybergLaude"
            >
              Github
              <LinkIcon />
            </a>
          </li>
          <li>
            <a
              className="arrow-link"
              style={{ display: "inline-flex" }}
              href="https://www.linkedin.com/in/martinryberglaude/"
            >
              LinkedIn
              <LinkIcon />
            </a>
          </li>
          <li>
            <a
              className="arrow-link"
              style={{ display: "inline-flex" }}
              href="https://twitter.com/martini_rl"
            >
              Twitter
              <LinkIcon />
            </a>
          </li>
        </ul>
        <p className="desc">I look forward to hearing from you! ✌️</p>
      </address>
    </Layout>
  )
}
