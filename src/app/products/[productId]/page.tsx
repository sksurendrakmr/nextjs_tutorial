const ProductDetails = ({ params }: {params: {productId:string}}) => {
  return (
    <div>ProductDetails - {params.productId}</div>
  )
}

export default ProductDetails

/**
 * This is possible because Next.js treats [] in a folder name as a dynamic segment
 * enabling us to create Dynamic routes.
 * 
 * Every page in the app router receives route parameters as a prop
 */