import React from "react"
import { graphql, StaticQuery, Link } from "gatsby"
//import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

import "../utils/normalize.css"
import "../utils/css/screen.css"

const LearnPage = ({ data }, location) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout title={siteTitle}>
      <SEO title="Learn" keywords={[`learn`]} />

      <article className="post-content page-template no-image">
        <div className="post-content-body">
          <h1 id="clean-minimal-and-deeply-customisable-london-is-a-theme-made-for-people-who-appreciate-simple-lines-">
            Nauka
          </h1>
          {/* <figure className="kg-card kg-image-card kg-width-full">
            <Img
              fluid={data.benchAccounting.childImageSharp.fluid}
              className="kg-image"
            />
            <figcaption>Large imagery is at the heart of this theme</figcaption>
          </figure> */}
          <h3 id="unordered">
            <strong>JavaScript</strong>
          </h3>
          <ul>
            <li>Stos wywołań</li>
            <li>Typy Proste</li>
            <li>Typy Wartościowe i Typy Referencyjne</li>
            <li>Implicit, Explicit, Nominal, Structuring i Duck Typing</li>
            <li>== vs === vs typeof</li>
            <li>Zakres Funkcji, Zakres Bloku i Zakres Leksykalny</li>
            <li>Wyrażenie vs Instrukcja</li>
            <li>IIFE, Moduły i Przestrzenie Nazw</li>
            <li>Message Queue i Event Loop</li>
            <li>setTimeout, setInterval i requestAnimationFrame</li>
            <li>JavaScript - silniki</li>
            <li>Operatory Bitowe, Type Arrays i Array Buffers</li>
            <li>DOM i Layout Trees</li>
            <li>Fabryki i Klasy</li>
            <li>this, call, apply i bind</li>
            <li>new, Constructor, instanceof i Instances</li>
            <li>Dziedziczenie Prototypowe i Łańcuch Prototypów</li>
            <li>Object.create i Object.assign</li>
            <li>map, reduce, filter</li>
            <li>Funkcje Czyste, Efekty Uboczne i Mutacje Stanu</li>
            <li>Domknięcia</li>
            <li>Funkcje Wyższego Rzędu</li>
            <li>
              Rekursja/Rekurencja{" "}
              <Link to={`/rekurencja-rekursja-w-javascript/`}>⚓</Link>
            </li>
            <li>Collections and Generators</li>
            <li>Promises</li>
            <li>async/await</li>
            <li>Struktury Danych</li>
            <li>
              Kosztowne Operacje i Asymptotyczne Tempo Wzrostu (Notacja Dużego
              O)
            </li>
            <li>Algorytmy</li>
            <li>Dziedziczenie, Polimorfizm i Ponowne Wykorzystanie Kodu</li>
            <li>Wzorce Projektowe</li>
            <li>Partial Applications, Currying, Compose i Pipe</li>
            <li>Czysty Kod</li>
          </ul>
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
      <LearnPage location={props.location} data={data} {...props} />
    )}
  />
)
