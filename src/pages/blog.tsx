import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import BlogItem from "../components/blogItem"

export default function Blog({ data }) {
  const posts = data.allContentfulBlogPost.nodes

  return (
    <Layout title="Blog" tag="blog">
      <Seo title="Blog" />
      <ol style={{ listStyleType: "none", margin: 0 }}>
        {posts.map(post => {
          return (
            <BlogItem
              key={post.slug}
              slug={post.slug}
              title={post.title}
              description={post.description.description}
              publishDate={post.isoDate}
              publishDateText={post.relativeDate}
              author={post.author.name}
            />
          )
        })}
      </ol>
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
      nodes {
        slug
        relativeDate: publishDate(formatString: "MMMM DD, YYYY")
        isoDate: publishDate(formatString: "YYYY-MM-DD")
        title
        description {
          description
        }
        author {
          name
        }
      }
    }
  }
`
