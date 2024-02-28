export default function ReviewDetail({
  params,
}: {
  params: {
    productId: string;
    reviewId: string;
  };
}) {
  return (
    <h1>
      Reivew {params.reviewId} for product {params.productId}
    </h1>
  );
}
