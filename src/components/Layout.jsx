import React, { Fragment } from "react"
import {Global, css} from "@emotion/core"
import PropTypes from "prop-types"
import normalize from "../styles/bootstrap-reboot.css"

const Layout = ({ children }) => (
  <Fragment>
    <Global
      styles={css`
        ${normalize}
      `}
    />
    {children}
  </Fragment>
)

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.node]).isRequired
};

export default Layout
