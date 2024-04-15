import { notFound } from "next/navigation"
const ReviewDetails = ({params}: {params: {productId:string, reviewId: string}}) => {
  // Programitically render notFound page based on certain condition
  if(parseInt(params.reviewId) > 1000){
    notFound();
  }
  return (
    <div>{params.reviewId} for product {params.productId}</div>
  )
}

export default ReviewDetails