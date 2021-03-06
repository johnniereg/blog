import React from "react"
import { graphql, Link } from "gatsby"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="blog-post-container">
      <Link to="/">home</Link>
      <div className="blog-post">
        <h1 style={{ textTransform: `lowercase`, margin: `0` }}>
          {frontmatter.title}
        </h1>
        <h2
          style={{
            textTransform: `lowercase`,
            fontSize: `0.8rem`,
            marginTop: `0`,
          }}
        >
          {frontmatter.date}
        </h2>
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
          style={{ maxWidth: `1000px` }}
        />
      </div>
    </div>
  )
}
export const pageQuery = graphql`
  query($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
