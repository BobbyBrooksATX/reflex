import * as React from "react"
import { Metatags } from "@reflexjs/gatsby-plugin-metatags"
import { MDXProvider } from "@reflexjs/gatsby-theme-core"
import { Block } from "@reflexjs/gatsby-theme-block"

export const Layout = ({
  header = "header",
  footer = "footer",
  children,
  pathname,
}) => (
  <React.Fragment>
    <Metatags pathname={pathname} />
    <MDXProvider>
      {header && <Block src={header} />}
      {children}
      {footer && <Block src={footer} />}
    </MDXProvider>
  </React.Fragment>
)
