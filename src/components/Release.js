import React from "react"
import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { BLOCKS, INLINES } from "@contentful/rich-text-types"

export default function Release({
  title,
  subtitle,
  releaseArt,
  releaseContent,
  releaseDate,
}) {
  const options = {
    renderNode: {
      [INLINES.HYPERLINK]: node => {
        const { value } = node.content[0]
        const { uri } = node.data
        return (
          <a
            className="release__link"
            href={uri}
            rel="noreferrer"
            target="_blank"
          >
            {value}
          </a>
        )
      },
      [BLOCKS.PARAGRAPH]: (node, children) => {
        return <p className="release__paragraph">{children}</p>
      },
    },
  }
  const formatReleaseDate = date => {
    const rawDate = new Date(date)
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ]
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]
    return `${days[rawDate.getDay()]} / ${
      months[rawDate.getMonth()]
    } ${rawDate.getDate()} ${rawDate.getFullYear()}`
  }
  return (
    <article className="release">
      <h2 className="release__heading release__title">{title}</h2>
      <h3 className="release__heading release__subtitle">{subtitle}</h3>
      <Image className="release__cover" fixed={releaseArt.fixed} />
      {documentToReactComponents(releaseContent.json, options)}
      <p className="release__date">{formatReleaseDate(releaseDate)}</p>
    </article>
  )
}
