import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Release from "../components/Release"

const getReleases = graphql`
  query {
    releases: allContentfulRelease {
      edges {
        node {
          contentful_id
          title
          subtitle
          releaseArt {
            fixed(width: 300, height: 300) {
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
    <div>
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
