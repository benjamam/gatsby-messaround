import React from "react"
import { Link } from "gatsby"

export default function Home() {
  return (
    <div>
      <Link to="/about/">About</Link>
      <h1>Adam was here</h1>
      <p>This is pretty cool</p>
    </div>
  )
}
