import { graphql, Link } from "gatsby"
import React, { lazy } from "react"
import CompactBlogItem from "../components/compactBlogItem"
import Layout from "../components/layout"
import Seo from "../components/seo"

const AvatarCanvas = lazy(() => import("../components/avatarCanvas"))

export default function Index({ data }) {
  const posts = data.allContentfulBlogPost.nodes
  return (
    <Layout title="Hi! I'm Martin 👋" tag="home">
      <Seo
        title="Martin Ryberg Laude — Frontend Developer & Designer"
        isIndex
      />
      <div className="full-width avatar-card">
        <div className="avatar-card-left">
          <p className="desc desc-alt">
            I design & develop websites, and you're currently visiting my
            personal website. Here you'll find my blog, prior work, and some
            relevant information. Enjoy!
          </p>
          <Link to="/about" className="btn-alt">
            More about me
          </Link>
        </div>
        <div className="avatar-card-right">
          <div className="scene">
            <AvatarCanvas />
          </div>
        </div>
      </div>
      <h2>Latest posts</h2>
      <ol style={{ listStyleType: "none", margin: 0 }}>
        {posts.map(post => {
          return (
            <CompactBlogItem
              key={post.slug}
              title={post.title}
              slug={post.slug}
              relativeDate={post.relativeDate}
              isoDate={post.isoDate}
            />
          )
        })}
      </ol>
      <Link className="arrow-link" to="/blog/">
        Read all posts
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 0 24 24"
          width="24px"
          fill="var(--color-primary)"
        >
          <path d="M0 0h24v24H0V0z" fill="none" />
          <path d="M9.29 6.71c-.39.39-.39 1.02 0 1.41L13.17 12l-3.88 3.88c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l4.59-4.59c.39-.39.39-1.02 0-1.41L10.7 6.7c-.38-.38-1.02-.38-1.41.01z" />
        </svg>
      </Link>
      <div className="cloud full-width">
        <h3 style={{ marginTop: 0 }}>Attention!</h3>
        <p>
          This website is new and currently under active development. Please
          report any issues to{" "}
          <a
            style={{ overflowWrap: "break-word" }}
            href="mailto:contact@mrlaude.com"
          >
            contact@mrlaude.com
          </a>
          , that'd be nice :)
        </p>
      </div>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allContentfulBlogPost(
      sort: { fields: [publishDate], order: DESC }
      limit: 3
    ) {
      nodes {
        slug
        relativeDate: publishDate(formatString: "MMMM DD, YYYY")
        isoDate: publishDate(formatString: "YYYY-MM-DD")
        title
      }
    }
  }
`
