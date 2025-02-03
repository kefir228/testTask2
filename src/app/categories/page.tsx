import Link from "next/link"
export const dynamicParams = false

async function getCategories() {
    const res = await fetch('https://fakestoreapi.com/products/categories')
    return res.json()
}

export default async function CategoriesPage() {
    const categories = await getCategories()

    return (
        <div className="grid gap-4">
            <h1 className="text-2xl font-bold">Категорія</h1>
            <ul className="space-y-2">
                {categories.map((category: string) => (
                    <li key={category}>
                        <Link href={`/category/${category}`} className="text-blue-500 hover:underline">{category}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )

}

