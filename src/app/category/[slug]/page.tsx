import ProductCard from "../../../../components/ProductCard"
import { notFound } from "next/navigation"

async function getProducts(category: string) {
    const res = await fetch(`https://fakestoreapi.com/products/category/${category}`)
    if (!res.ok) return null
    return res.json()
}

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    if (!slug) {
        return notFound()
    }

    const products = await getProducts(slug)

    if (!products || products.length === 0) {
        return notFound()
    }

    return (
        <div>
            <h1 className='text-2xl font-bold capitalize'>{slug}</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4'>
                {products.map((product: any) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
