<h1 align="center">
  Personal site 💻
</h1>
<p align="center">
  My personal site with a blog, live @ <a href="https://mrlaude.com">mrlaude.com</a>
</p>

[![Netlify Status](https://api.netlify.com/api/v1/badges/b6d4c287-70bc-4000-916d-54ba19cf5364/deploy-status)](https://app.netlify.com/sites/mrlaude/deploys)

## 💡 Introduction

This site is used as my personal site and includes a blog and project case studies. It's built using [GatsbyJS](https://www.gatsbyjs.com/) with typescript and [Contentful](https://www.contentful.com/) as content management system, otherwise employing an accessible out-of-the-way design. Follow the steps below to run your own version.

## ✅ Prerequisites

- NodeJS
- Yarn
- A Contentful space with correct [content types](https://github.com/MartinRybergLaude/Blog/wiki/Contentful-content-types)

## 🚀 Quick start

1.  **Clone this repo**

    Use git to clone this repo, or download it.

    ```shell
    # Clone the repo to a local directory
    git clone https://github.com/MartinRybergLaude/Blog.git
    ```

3.  **Implement Contentful content types**

    On your Contentful page, add the content types required to serve content to the site. Schemas for the content models to import can be found [here](https://github.com/MartinRybergLaude/Blog/wiki/Contentful-content-types).


2.  **Install**

    Create a .env file in the root folder, and add these:

    ```shell
    # Replace YourContentfulSpaceID and YourContentfulAccessToken with your own space ID and access token

    CONTENTFUL_SPACE_ID=YourContentfulSpaceID
    CONTENTFUL_ACCESS_TOKEN=YourContentfulAccessToken
    ```
  
    Open cmd, terminal or powershell in the cloned direcory and install dependencies:

    ```shell
    cd Blog
    yarn
    ```

3.  **Start the app**

    Start the app on `http://localhost:8000`

    ```shell
    yarn start
    ```

## 🧐 Technologies

- Gatsby
- React
- Typescript
- Sass
- CSS-modules
- GraphQL

## 📁 Directory structure

- Package by feature as far as possible

## 📑 Code conventions

- Functional components
- Props & state interface above components
- Async/await preferred

## 📑 Git conventions

- Commit messages are written in <a href="https://en.wikipedia.org/wiki/Imperative_mood">imperative mood</a>
- Commit messages follow the following structure:
  Type: Short title
  Optional explanatory body
- Micro-commits are preferred
