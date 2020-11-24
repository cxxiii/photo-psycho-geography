import React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/Layout'
import SEO from '../components/Seo'

const NotFoundPage = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>Unfortunately, this page does not exist ...</p>
      <Link to="/" style={{ color: 'var(--def)' }}>
        Return
      </Link>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
