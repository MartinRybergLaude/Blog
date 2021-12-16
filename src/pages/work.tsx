import { graphql } from "gatsby"
import * as React from "react"
import ProjectItem from "../components/projectItem"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Work({ data }) {
  const projects = data.allContentfulProject.nodes
  return (
    <Layout title="My work" tag="work">
      <Seo title="Work" />
      <p className="desc">
        Here's a collection of my work so far, with accompanied case studies for
        deeper insight.
      </p>
      <ol style={{ listStyleType: "none", margin: 0 }}>
        {projects.map(project => {
          let liveLink = project.linkLive
          if (liveLink === "null") liveLink = null

          return (
            <ProjectItem
              key={project.slug}
              title={project.title}
              slug={project.slug}
              shortDesc={project.shortDescription}
              heroImage={project.heroImage}
              liveLink={liveLink}
            />
          )
        })}
      </ol>
    </Layout>
  )
}
export const pageQuery = graphql`
  query {
    allContentfulProject {
      nodes {
        slug
        title
        description {
          description
        }
        shortDescription
        heroImage {
          gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
        }
        linkLive
      }
    }
  }
`
