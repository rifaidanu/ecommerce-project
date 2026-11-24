import ProductCard from './ProductCard.jsx'

const img = (id) => `https://images.unsplash.com/${id}?w=700&q=80&auto=format&fit=crop`

const products = [
  {
    id: 1,
    name: 'Kaos Basic Crew Neck',
    category: 'Pria',
    price: 129000,
    images: [img('photo-1521572163474-6864f9cf17ab'), img('photo-1618354691373-d851c5c3a990')],
  },
  {
    id: 2,
    name: 'Kemeja Lengan Panjang',
    category: 'Pria',
    price: 279000,
    images: [img('photo-1598033129183-c4f50c736f10'), img('photo-1596755094514-f87e34085b2c')],
  },
  {
    id: 3,
    name: 'Kaos Grafis Wanita',
    category: 'Wanita',
    price: 149000,
    images: [img('photo-1554568218-0f1715e72254'), img('photo-1503342217505-b0a15ec3261c')],
  },
  {
    id: 4,
    name: 'Kaos Oversize',
    category: 'Unisex',
    price: 159000,
    images: [img('photo-1583743814966-8936f5b7be1a'), img('photo-1576566588028-4147f3842f27')],
  },
  {
    id: 5,
    name: 'Hoodie Fleece',
    category: 'Unisex',
    price: 299000,
    images: [img('photo-1556821840-3a63f95609a7'), img('photo-1620799140408-edc6dcb6d633')],
  },
  {
    id: 6,
    name: 'Sweater Wanita',
    category: 'Wanita',
    price: 259000,
    images: [img('photo-1515886657613-9f3515b0c78f'), img('photo-1434389677669-e08b4cac3105')],
  },
  {
    id: 7,
    name: 'Kaos Polos Premium',
    category: 'Pria',
    price: 139000,
    images: [img('photo-1586790170083-2f9ceadc732d'), img('photo-1622445275463-afa2ab738c34')],
  },
  {
    id: 8,
    name: 'Kaos Logo Minimalis',
    category: 'Unisex',
    price: 169000,
    images: [img('photo-1529374255404-311a2a4f1fd9'), img('photo-1562157873-818bc0726f68')],
  },
]

export default function NewArrivals() {
  return (
    <section className="page-container pb-24 pt-12">
      <h2 className="font-serif text-3xl md:text-4xl">New Arrivals</h2>
      <div className="mt-6 grid grid-cols-2 gap-y-10 md:grid-cols-4">
        {products.map((p) => (
          <ProductCard key={p.id} {...p} isNew />
        ))}
      </div>
    </section>
  )
}
