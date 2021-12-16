import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./content.module.scss"

export default function BlogPostTemplate({ data }) {
  const post = data.contentfulBlogPost
  const authorLink = post.author.link.substring("https://".length)

  return (
    <Layout title={post.title} tag="blog">
      <Seo title={post.title} description={post.description.description} />
      <article>
        <header className={styles.header}>
          <p>{post.description.description}</p>
          <div className={styles.headerInfo}>
            <address>
              <p>{post.author.name}</p>
              <a rel="author" href={post.author.link}>
                {authorLink}
              </a>
            </address>
            <p>
              <time dateTime={post.isoDate}>{post.relativeDate}</time>
              &nbsp;&nbsp; • &nbsp;&nbsp;
              {post.body.fields.readingTime.text}
            </p>
          </div>
        </header>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: post.body.childMarkdownRemark.html,
          }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      description {
        description
      }
      author {
        name
        link
      }
      body {
        childMarkdownRemark {
          html
        }
        fields {
          readingTime {
            text
          }
        }
      }
      relativeDate: publishDate(formatString: "MMMM DD, YYYY")
      isoDate: publishDate(formatString: "YYYY-MM-DD")
    }
  }
`
