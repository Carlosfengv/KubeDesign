import React from 'react'
import { MDXProvider } from "@mdx-js/react"
import '../Documents/style.scss'

export default function Layout({ children }) {
  return (
    <MDXProvider
      components={{
/*         // Map HTML element tag to React component
        h1: DesignSystem.H1,
        h2: DesignSystem.H2,
        h3: DesignSystem.H3, */
        // Or define component inline
        /* p: props => <p {...props} style={{ color: "#0099cc" }} />, */
      }}
    >
      {children}{console.log('MDX')}{console.log(children)}
    </MDXProvider>
  )
}