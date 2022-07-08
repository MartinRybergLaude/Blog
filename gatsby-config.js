const dotenv = require('dotenv')

if (process.env.NODE_ENV !== 'production') {
  dotenv.config()
}

module.exports = {
  siteMetadata: {
    title: `Martin Ryberg Laude`,
    description: `Frontend developer & designer creating cool stuff.`,
    siteUrl: `https://mrlaude.com/`,
    social: {
      twitter: `martini_rl`,
    },
  },
  plugins: [
    `gatsby-plugin-image`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // {
    //   resolve: `gatsby-plugin-google-analytics`,
    //   options: {
    //     trackingId: `ADD YOUR TRACKING ID HERE`,
    //   },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Martin Ryberg Laude's site`,
        short_name: `Martin R. L.`,
        start_url: `/`,
        background_color: `#f6f8f7`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        theme_color: `#f6f8f7`,
        display: `minimal-ui`,
        icon: `src/images/favicon.svg`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              showLineNumbers: false
            }
          }
        ]
      }
    },
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-feed`,
      options: {
        query: `
          {
            site {
              siteMetadata {
                title
                description
                siteUrl
                site_url: siteUrl
              }
            }
          }
        `,
        feeds: [
          {
            serialize: ({ query: { site, allContentfulBlogPost } }) => {
              return allContentfulBlogPost.edges.map(({node}) => {
                return Object.assign({}, {
                  title: node.title,
                  description: node.description.description,
                  author: node.author.name,
                  date: node.isoDate,
                  url: site.siteMetadata.siteUrl + "/blog/" + node.slug,
                  guid: site.siteMetadata.siteUrl + "/blog/" + node.slug,
                  custom_elements: [{"content:encoded": node.body.childMarkdownRemark.html.replace("//images.ctfassets", "https://images.ctfassets")}]
                })
              })
            },
            query: `
              {
                allContentfulBlogPost(sort: { fields: [publishDate], order: DESC }) {
                  edges {
                    node {
                      slug
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
                      }
                      isoDate: publishDate(formatString: "YYYY-MM-DD")
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "Martin R. L.'s blog",
            // optional configuration to insert feed reference in pages:
            // if `string` is used, it will be used to create RegExp and then test if pathname of
            // current page satisfied this regular expression;
            // if not provided or `undefined`, all pages will have feed reference inserted
            match: "^/blog/",
          },
        ],
      },
    },
  ]
}
