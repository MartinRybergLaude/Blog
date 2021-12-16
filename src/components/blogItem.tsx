import { Link } from "gatsby"
import React, { useEffect, useState } from "react"
import * as styles from "./blogItem.module.scss"

interface Props {
  slug: string
  title: string
  publishDateText: string
  publishDate: string
  description: string
  author: string
}
export default function BlogItem(props: Props) {
  const [description, setDescription] = useState("")
  const [showGuestPost, setShowGuestPost] = useState(false)

  // Trunctuate description in case it's too long (80 chars)
  useEffect(() => {
    if (props.description.length > 250) {
      setDescription(props.description.substring(0, 250) + "...")
    } else {
      setDescription(props.description)
    }
  }, [props.description])

  // Determine if guest post tag should be shown
  useEffect(() => {
    if (props.author === "Martin Ryberg Laude") {
      setShowGuestPost(false)
    } else {
      setShowGuestPost(true)
    }
  }, [props.author])

  return (
    <li className={styles.container} key={props.slug}>
      <Link className={styles.link} to={props.slug}>
        <article>
          <header className={styles.header}>
            <h2>{props.title}</h2>
            <time dateTime={props.publishDate}>{props.publishDateText}</time>
          </header>
          {showGuestPost && <p className={styles.chip}>Guest post</p>}
          <section>
            <p>{description}</p>
          </section>
        </article>
      </Link>
    </li>
  )
}
