import Link from "next/link"

const data = await fetch(
  'http://localhost:1338/api/articles?populate=*', {cache: 'no-store'}
)

const response = await data.json()

console.log(response)

const Blog = () => {
  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="mx-auto max-w-7xl">

        {/* Page Header */}
        <h1 className="mb-8 text-4xl font-bold text-gray-900">
          Blogs List - Main
        </h1>

        {/* Blog Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {response.data &&
            response.data.map((data) => {
              return (
                <div
                  key={data.id}
                  className="rounded-xl bg-white p-6 shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  {/* Blog Slug */}
                  <h2 className="mb-3 text-xl font-bold text-blue-600">
                    <Link href={`/blogpost/${data.slug}`}>{data.slug}</Link>
                    
                  </h2>

                  {/* Description */}
                  <p className="mb-4 text-gray-600">
                    {data.description}
                  </p>

                  {/* Created Date */}
                  <div className="border-t border-gray-200 pt-4">
                    <span className="text-sm text-gray-500">
                      Created: {data.createdAt}
                    </span>
                  </div>
                </div>
              )
            })}
        </div>
      </div>
    </div>
  )
}

export default Blog

