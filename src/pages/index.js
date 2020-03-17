import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark

  return (
    <Layout>
      {posts.map(({ node: post }) => (
        <div>
          <Link key={post.id} to={post.frontmatter.path}>
            {post.frontmatter.title}-{post.frontmatter.date}
          </Link>
          <p>{post.excerpt}</p>
        </div>
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
