import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'
// import facepaint from 'facepaint'

// const breakpoints = [576, 768, 992, 1200]

// const mq = facepaint(breakpoints.map(bp => `@media (max-width: ${bp}px)`))

const Image = ({ path, alt = '' }) => {
  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `)

  const image = data.images.edges.find(n => n.node.relativePath.includes(path))
  if (!image) return null

  return (
    <Img
      // css={mq({
      //   width: '10%',
      //   margin: '0 auto',
      // })}
      objectFit="contain"
      alt={alt}
      fluid={image.node.childImageSharp.fluid}
    />
  )
}

export default Image
