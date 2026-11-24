import ProductCard from './ProductCard.jsx'

const img = (id) => `https://images.unsplash.com/${id}?w=500&q=80&auto=format&fit=crop`

const products = [
  { id: 1, name: 'Kaos Basic Putih', price: 129000, image: img('photo-1521572163474-6864f9cf17ab') },
  { id: 2, name: 'Kemeja Linen Pria', price: 279000, image: img('photo-1598033129183-c4f50c736f10') },
  { id: 3, name: 'Kaos Grafis Wanita', price: 149000, image: img('photo-1554568218-0f1715e72254') },
  { id: 4, name: 'Kaos Oversize', price: 159000, image: img('photo-1583743814966-8936f5b7be1a') },
]

export default function NewArrivals() {
  return (
    <section className="mx-auto max-w-6xl px-8 pb-24 pt-6 md:px-16">
      <h2 className="font-serif text-2xl md:text-[1.7rem]">New Arrivals</h2>
      <div className="mt-2 grid grid-cols-2 gap-x-6 gap-y-8 md:grid-cols-4 md:gap-x-16">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} isNew />
        ))}
      </div>
    </section>
  )
}
