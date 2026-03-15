import { getItems, createItem, deleteItem } from '@/lib/items'

export default async function Home() {
  const items = await getItems()

  return (
    <main className="max-w-2xl mx-auto px-5 py-10">
      <h1 className="text-3xl font-bold m-0">📦 Items DB</h1>
      <p className="text-gray-500 mt-1 mb-8">Next.js + Prisma + PostgreSQL</p>

      <form action={createItem} className="bg-gray-50 border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-base font-semibold mb-4">Add New Item</h2>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1.5">Title *</label>
          <input
            name="title"
            type="text"
            placeholder="Enter title..."
            required
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm font-semibold mb-1.5">Content</label>
          <textarea
            name="content"
            placeholder="Enter content (optional)..."
            rows={3}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:border-blue-500 resize-none"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-6 py-2.5 rounded-lg cursor-pointer"
        >
          + Add Item
        </button>
      </form>

      <div>
        <h2 className="text-base font-semibold mb-4">All Items ({items.length})</h2>
        {items.length === 0 ? (
          <p className="text-gray-400 text-center py-10">No items yet. Add one above!</p>
        ) : (
          <div className="flex flex-col gap-3">
            {items.map(item => (
              <div key={item.id} className="bg-white border border-gray-200 rounded-xl p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-xs text-gray-400 font-semibold">#{item.id}</span>
                  <form action={deleteItem.bind(null, item.id)}>
                    <button
                      type="submit"
                      className="text-gray-400 hover:text-red-500 hover:bg-red-50 text-xs px-1.5 py-0.5 rounded cursor-pointer border-none bg-transparent"
                    >
                      ✕
                    </button>
                  </form>
                </div>
                <h3 className="text-sm font-semibold m-0 mb-1">{item.title}</h3>
                {item.content && <p className="text-sm text-gray-500 m-0 mb-2">{item.content}</p>}
                <span className="text-xs text-gray-300">
                  {new Date(item.createdAt).toLocaleString('th-TH')}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}