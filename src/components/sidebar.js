import React from 'react'
import { StaticQuery, Link, graphql } from 'gatsby'
// import PropTypes from 'prop-types'
// import './layout.css'
const Sidebar = ({ data, buildInfo }) => (
    <StaticQuery
      query={graphql`
        query {
          allMarkdownRemark(
            sort: {
              order: ASC,
              fields: [frontmatter___title]
            }
          ) {
            edges {
              node {
                frontmatter {
                  title
                  path
                }
              }
            }
          }
        }
      `}
      render={ data => (
          <div className="spark-docs-sidebar">
            <PagesList pages={data.allMarkdownRemark.edges} />
            <div class="u-color--grey-light">
              built at <span class="" title={buildInfo.buildTime}>{buildInfo.buildTimeAgo}</span>
            </div>
          </div>
        )
      }
    />
)

const PagesList = ({ pages }) => (
  pages.map((edge, index) => {
    const { frontmatter } = edge.node
    return (
      <Link
        className="o-link spark-docs-sidebar-item"
        activeClassName="spark-docs-sidebar-item--current"
        to={frontmatter.path} >
        <div key={index}> {frontmatter.title} </div>
      </Link>
    )
  })
)

export default Sidebar
