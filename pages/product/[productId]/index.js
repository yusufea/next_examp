import { useRouter } from "../../../node_modules/next/router"


export default function prods() {
    const router = useRouter()
    const productId = router.query.productId
    return (
        <div>PRODUCTSS {productId}</div>
    )
}