/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import "./styles.css"

const Section = ({ title, path }) => (
  <div className="section-container">
    <h3>
      <Link to={path}>{title}</Link>
    </h3>
  </div>
)

const Layout = ({ children }) => {
  return (
    <div className="layout-container">
      <header className="header-container">
        <div className="section-list">
          <Section title="Blog" path="/" />
          <Section title="Memo" path="/memo" />
          <Section title="About" path="/about" />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
