import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import '../scss/main.scss'

import Header from './header'
import Sidebar from './sidebar'


const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        },
        siteBuildMetadata {
          buildTime,
          buildTimeAgo: buildTime(fromNow: true)
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
        </Helmet>
        <div className="spark-docs-container">
            <Header siteTitle={data.site.siteMetadata.title} />
            <div className="spark-docs-layout">
                <Sidebar buildInfo={data.siteBuildMetadata} />
                <div className="spark-docs-details-body">
                  {children}
                </div>
            </div>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
