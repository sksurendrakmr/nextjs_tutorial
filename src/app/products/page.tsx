import Link from "next/link"
const ProductList = () => {
  const productId = 20
  return (
    <>
      <Link href="/">Home</Link>
      <h1>Product List</h1>
      <h2><Link href="products/1">product 1</Link></h2>
      <h2><Link href="products/2">product 2</Link></h2>
      <h2><Link href="products/3" replace>product 3</Link></h2>
      <h2><Link href={`products/${productId}`}>product 3</Link></h2>
    </>
  )
}

export default ProductList

//replace props replace the current history state instead of adding a new URL to the stack
//Link allow us to navigate b/w routes using UI elements.