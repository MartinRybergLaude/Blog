const path = require(`path`)
const readingTime = require('reading-time');
const { markdownToTxt } = require('markdown-to-txt');

exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions

  // Define a template for blog post
  const blogPost = path.resolve(`./src/templates/blogPost.tsx`)
  // Define a template for a project
  const projectEntry = path.resolve(`./src/templates/project.tsx`)

  // Get all markdown blog posts sorted by date
  const result = await graphql(
    `
      {
        allContentfulBlogPost {
          edges {
            node {
              slug
            }
          }
        }
        allContentfulProject {
          edges {
            node {
              slug
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    reporter.panicOnBuild(
      `There was an error loading your posts`,
      result.errors
    )
    return
  }

  const posts = result.data.allContentfulBlogPost.edges
  const projects = result.data.allContentfulProject.edges

  if (posts.length > 0) {
    posts.forEach((post) => {

      createPage({
        path: "/blog/" + post.node.slug,
        component: blogPost,
        context: {
          slug: post.node.slug
        },
      })
    })
  }
  if (projects.length > 0) {
    projects.forEach((project) => {

      createPage({
        path: "/work/" + project.node.slug,
        component: projectEntry,
        context: {
          slug: project.node.slug
        }
      })
    })
  }
}
exports.onCreateNode = async options => {
  Promise.all([
    addReadTime(options)
  ]);
  
};

const addReadTime = async ({node, loadNodeContent, actions}) => {
  const { internal } = node;
  const { owner, mediaType } = internal;
  if (mediaType !== "text/markdown" || owner !== "gatsby-source-contentful") {
    return;
  }
  const doc = await loadNodeContent(node);
  const text = markdownToTxt(doc);
  const result = readingTime(text);
  actions.createNodeField({ node, name: "readingTime", value: result });
};
