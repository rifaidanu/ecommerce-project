import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon, HeartIcon } from './icons.jsx'

const formatRupiah = (n) => 'Rp. ' + n.toLocaleString('id-ID')

const arrowBtn =
  'absolute top-1/2 -translate-y-1/2 p-2 text-neutral-900 opacity-0 transition group-hover:opacity-100 hover:scale-110'

export default function ProductCard({ name, category, price, images, isNew }) {
  const [index, setIndex] = useState(0)
  const go = (step) => setIndex((i) => (i + step + images.length) % images.length)

  return (
    <article className="group">
      <div className="relative aspect-3/4 overflow-hidden bg-neutral-100">
        {images.map((src, i) => (
          <img
            key={src}
            src={src}
            alt={`${name} ${i + 1}`}
            loading="lazy"
            className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-500 ${
              i === index ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}

        {isNew && (
          <span className="absolute left-3 top-3 bg-navy px-2 py-0.5 text-[10px] font-bold tracking-wider text-white">
            NEW
          </span>
        )}
        <button
          aria-label={`Tambah ${name} ke wishlist`}
          className="absolute right-3 top-3 grid size-8 place-items-center rounded-full bg-white/90 text-navy transition hover:scale-110"
        >
          <HeartIcon className="size-4" />
        </button>

        {images.length > 1 && (
          <>
            <button aria-label="Foto sebelumnya" onClick={() => go(-1)} className={`${arrowBtn} left-1`}>
              <ChevronLeftIcon className="size-6" />
            </button>
            <button aria-label="Foto berikutnya" onClick={() => go(1)} className={`${arrowBtn} right-1`}>
              <ChevronRightIcon className="size-6" />
            </button>
            <div className="absolute inset-x-0 bottom-3 flex justify-center gap-1.5 opacity-0 transition group-hover:opacity-100">
              {images.map((src, i) => (
                <span
                  key={src}
                  className={`size-1.5 rounded-full ${i === index ? 'bg-navy' : 'bg-navy/30'}`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <div className="px-3 pb-2 pt-4 md:px-4">
        <p className="text-[11px] font-medium uppercase tracking-[0.15em] text-navy/60">{category}</p>
        <h3 className="mt-1 text-sm font-semibold md:text-base">{name}</h3>
        <p className="mt-1 text-sm font-bold md:text-base">{formatRupiah(price)}</p>
      </div>
    </article>
  )
}
