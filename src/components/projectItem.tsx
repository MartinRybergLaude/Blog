import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"
import * as styles from "./projectItem.module.scss"

interface Props {
  slug: string
  title: string
  heroImage: any
  shortDesc: string
  liveLink?: string
}

export default function ProjectItem(props: Props) {
  const image = getImage(props.heroImage)
  const liveLink = props.liveLink?.substring("https://".length)
  return (
    <li className={styles.container} key={props.slug}>
      <article>
        <Link className={styles.link} to={props.slug}>
          <header>
            <GatsbyImage
              className={styles.img}
              image={image}
              alt={props.title}
            />
          </header>
          <section>
            <h2>{props.title}</h2>
            <p>{props.shortDesc}</p>
          </section>
        </Link>
        {props.liveLink && (
          <div style={{ overflowX: "scroll", paddingBottom: "8px" }}>
            <a className={styles.liveLink} href={props.liveLink}>
              {"Visit " + liveLink}
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
            </a>
          </div>
        )}
      </article>
    </li>
  )
}
