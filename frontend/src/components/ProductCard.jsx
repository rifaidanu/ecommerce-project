import { HeartIcon } from './icons.jsx'

const formatRupiah = (n) => 'Rp. ' + n.toLocaleString('id-ID')

export default function ProductCard({ name, price, image, isNew }) {
  return (
    <article className="group w-full max-w-[170px] cursor-pointer">
      <div className="relative aspect-[135/128] overflow-hidden bg-navy">
        <img
          src={image}
          alt={name}
          loading="lazy"
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
        />
        {isNew && (
          <span className="absolute left-1.5 top-1.5 rounded-sm bg-white px-1.5 py-px text-[9px] font-bold text-navy">
            NEW
          </span>
        )}
        <button
          aria-label={`Tambah ${name} ke wishlist`}
          className="absolute right-1.5 top-1.5 grid size-5 place-items-center rounded-full bg-white text-navy transition hover:scale-110"
        >
          <HeartIcon className="size-3.5" />
        </button>
      </div>
      <h3 className="mt-3 text-sm font-semibold">{name}</h3>
      <p className="text-sm font-bold">{formatRupiah(price)}</p>
    </article>
  )
}
