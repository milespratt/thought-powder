import React from "react"

import Image from "gatsby-image"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import { INLINES } from "@contentful/rich-text-types"

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
          <a href={uri} rel="noreferrer" target="_blank">
            {value}
          </a>
        )
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
    <article>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <Image fixed={releaseArt.fixed} />
      {documentToReactComponents(releaseContent.json, options)}
      <p>{formatReleaseDate(releaseDate)}</p>
    </article>
  )
}
