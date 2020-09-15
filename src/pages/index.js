import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Release from "../components/Release"
import "../css/main.css"

const getReleases = graphql`
  query {
    releases: allContentfulRelease(
      sort: { fields: releaseDate, order: [DESC] }
    ) {
      edges {
        node {
          contentful_id
          title
          subtitle
          releaseArt {
            fixed(height: 300, width: 300, quality: 100) {
              ...GatsbyContentfulFixed_tracedSVG
            }
          }
          releaseContent {
            json
          }
          releaseDate
        }
      }
    }
  }
`

export default function Home() {
  const { releases } = useStaticQuery(getReleases)
  return (
    <div className="release__list">
      {releases.edges.map(node => {
        const {
          contentful_id,
          title,
          subtitle,
          releaseArt,
          releaseContent,
          releaseDate,
        } = node.node
        return (
          <Release
            key={contentful_id}
            title={title}
            subtitle={subtitle}
            releaseArt={releaseArt}
            releaseContent={releaseContent}
            releaseDate={releaseDate}
          />
        )
      })}
    </div>
  )
}
