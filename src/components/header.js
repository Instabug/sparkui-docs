import React from 'react'
import { Link } from 'gatsby'

const Header = ({ siteTitle }) => (
  <div className="spark-docs-layout__header">
    <Link
      to="/"
      className="u-color--ink u-font--super"
      style={{
        textDecoration: 'none',
      }}>
      {siteTitle}
    </Link>
  </div>
)

export default Header
