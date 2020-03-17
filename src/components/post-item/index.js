import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const PostItem = ({ title, excerpt, created, path }) => (
  <div>
    <h1>
      <Link to={path}>{title}</Link>
    </h1>
    <p>{excerpt}</p>
    <span>{created}</span>
  </div>
)

PostItem.propTypes = {
  title: PropTypes.string.isRequired,
  excerpt: PropTypes.string.isRequired,
  created: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default PostItem
