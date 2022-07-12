import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import * as React from "react"
import Layout from "../components/layout"
import Seo from "../components/seo"

export default function Index() {
  return (
    <Layout title="About me" tag="about">
      <Seo title="About" />
      <StaticImage
        imgClassName="bannerImg"
        className="banner"
        src="../images/banner.jpg"
        alt="martin"
        placeholder="dominantColor"
      />
      <p className="desc">
        Hi! My name is Martin, & I’m a developer and designer based in
        Stockholm, Sweden 🇸🇪
      </p>
      <p className="desc">
        {" "}
        I create quick and intuitive apps and websites with the goal of being
        beautiful, simple to use and consistent. I believe a recognisable and
        consistent experience to be the most important factor in user
        experience, both from brand and platform perspectives. This, combined
        with quality code, accessibility in mind, and well planned features,
        provides the base for all my development, and will always do.
      </p>
      <p className="desc">
        Outside of development my interests include boating, music production
        and a little photography. It should therefore not be a surprise that I'd
        describe myself as a person on the creative side of the spectrum, which
        most of my hobbies and work relate to. Additionally, I have a strong
        curiousity and passion for learning about new technologies. The future
        has grand things in store!
      </p>
      <div>
        <Link to="/contact" className="btn">
          Contact me
        </Link>
      </div>
    </Layout>
  )
}
