import { Metadata } from "next"

type Props = {
  params: {
    productId: string;
  };
}

/**
 * Note: generateMetadata() can also be defined as async function 
 *
 */
// export const generateMetadata = async ({ params }: Props): Promise<Metadata> => {
//   const title = await new Promise(resolve => {
//     setTimeout(() => {
//       resolve(`Iphone ${params.productId}`)
//     }, 100)
//   })
//   return {
//     title: `Product ${title}`
//   }
// }

export const generateMetadata = ({ params }: Props): Metadata => {
  return {
    title: `Product ${params.productId}`
  }
}

const ProductDetails = ({ params }: Props) => {
  return (
    <div>
      <h1>ProductDetails - {params.productId}</h1>
    </div>
  )
}

export default ProductDetails

/**
 * This is possible because Next.js treats [] in a folder name as a dynamic segment
 * enabling us to create Dynamic routes.
 * 
 * Every page in the app router receives route parameters as a prop
 */