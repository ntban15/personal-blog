import React from "react"

import Layout from "../components/layout"
import PostItem from "../components/post-item"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      {posts.map(({ node: { id, excerpt, frontmatter: { title, date, path } } }) => (
        <PostItem key={id} title={title} created={date} path={path} excerpt={excerpt} />
      ))}
    </Layout>
  )
}

export const pageQuery = graphql`
  query IndexQuery {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          excerpt(pruneLength: 250)
          id
          frontmatter {
            title
            date(formatString: "YYYY/MM/DD")
            path
          }
        }
      }
    }
  }
`

export default IndexPage
