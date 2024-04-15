const ReviewDetails = ({params}: {params: {productId:string, reviewId: string}}) => {
  return (
    <div>{params.reviewId} for product {params.productId}</div>
  )
}

export default ReviewDetails