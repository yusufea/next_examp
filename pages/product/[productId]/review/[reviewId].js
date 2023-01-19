import { useRouter } from "../../../../node_modules/next/router";

export default function Review() {
    const router = useRouter()
    const { productId, reviewId } = router.query
    return (
        <h1>review {reviewId} {productId}</h1>
        )
}