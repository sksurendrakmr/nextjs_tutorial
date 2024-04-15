/**
 * By default all routes must be placed within a folder called app which will
 * exist within the source folder.
 * 
 * Every files that corresponds to a route in the brower should be named page.tsx.
 */
import Link from 'next/link'

import React from 'react'

const Home = () => {
  return (
    <div>
      <h1>Welcome Home!</h1>
      <Link href="/blog">Blog</Link>
      <Link href="/products">Products</Link>
    </div>
  )
}

export default Home