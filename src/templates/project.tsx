import * as React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "./content.module.scss"
import { GatsbyImage, getImage } from "gatsby-plugin-image"

export default function ProjectTemplate({ data }) {
  const project = data.contentfulProject
  const image = getImage(project.heroImage)
  const liveLink = project.liveLink?.substring("https://".length)
  const githubLink = project.linkGithub?.substring("https://".length)
  const client = project.client === "null" ? null : project.client

  return (
    <Layout title={project.title} tag="work">
      <Seo
        title={project.title}
        description={project.description.description}
      />
      <article>
        <header className={styles.header}>
          <GatsbyImage
            className={styles.img}
            image={image}
            alt={project.title}
          />
          <p>{project.description.description}</p>
          <div className={styles.headerInfo}>
            <div>
              {liveLink && (
                <p>
                  {"Live: "} <a href={project.linkLive}>{liveLink}</a>
                </p>
              )}
              {githubLink && (
                <p>
                  {"Github: "} <a href={project.linkGithub}>{githubLink}</a>
                </p>
              )}
              {client && <p>{"Client: " + client}</p>}
              <p>{"Role: " + project.role}</p>
            </div>
            <p>
              <time dateTime={project.year}>{project.year}</time>&nbsp;&nbsp; •
              &nbsp;&nbsp;
              {project.body.fields.readingTime.text}
            </p>
          </div>
        </header>
        <div
          className="markdown-body"
          dangerouslySetInnerHTML={{
            __html: project.body.childMarkdownRemark.html,
          }}
        />
      </article>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ProjectBySlug($slug: String) {
    contentfulProject(slug: { eq: $slug }) {
      title
      role
      year
      linkLive
      linkGithub
      client
      description {
        description
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
      heroImage {
        gatsbyImageData(layout: FULL_WIDTH, placeholder: DOMINANT_COLOR)
      }
    }
  }
`
