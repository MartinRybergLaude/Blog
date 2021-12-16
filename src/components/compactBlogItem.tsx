import { Link } from "gatsby"
import React from "react"
import * as styles from "./compactBlogItem.module.scss"

interface Props {
  title: string
  slug: string
  isoDate: string
  relativeDate: string
}

export default function CompactBlogItem(props: Props) {
  return (
    <li className={styles.container} key={props.slug}>
      <Link className={styles.link} to={"/blog/" + props.slug}>
        <article>
          <h3>{props.title}</h3>
          <time dateTime={props.isoDate}>{props.relativeDate}</time>
        </article>
      </Link>
    </li>
  )
}
