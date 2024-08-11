import React from "react"
import bootstrap from 'bootstrap'

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      <link rel="stylesheet" href="/static/css/bootstrap.min.css" />
      {children}
    </>
  )
}