import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
//import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const AboutPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="ABout" keywords={[`blog`, `gatsby`, `javascript`, `react`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            O mnie
          </h1>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <p className="text-left">
            Cześć. Jestem Piotrek, mam 24 lata i obecnie mieszkam we Wrocławiu.
            Jakiś czas temu ukończyłem studia inżynierskie na Politechnice
            Wrocławskiej we Wrocławiu. Obecnie studiuję Informatykę w Warszawie
            i pracuję jako Front End Developer.
          </p>
          <p>
            Po pracy i egzaminach staram się uczyć i rozwijać we wszystkim, co
            mnie interesuje. Obecnie koncentruję się na nowoczesnym JavaScript i
            jego bibliotekach (np. React.js). Interesują mnie również tematy
            związane ze sztuczną inteligencją i bezpieczeństwem aplikacji
            webowych.
          </p>
          <p>
            <Link to={`/learn`}>Tutaj</Link> jest lista rzeczy, których chcę się
            nauczyć. Postaram się opisać każde z tych zagadnień na tym blogu.
          </p>
        </div>
      </article>
    </Layout>
  )
}

const indexQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    benchAccounting: file(
      relativePath: { eq: "bench-accounting-49909-unsplash.jpg" }
    ) {
      childImageSharp {
        fluid(maxWidth: 1360) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`

export default props => (
  <StaticQuery
    query={indexQuery}
    render={data => (
      <AboutPage location={props.location} data={data} {...props} />
    )}
  />
)
