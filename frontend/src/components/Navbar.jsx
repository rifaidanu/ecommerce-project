import { CartIcon, HeartIcon, MenuIcon, SearchIcon, UserIcon } from './icons.jsx'

const iconBtn =
  'text-white/90 transition hover:text-white hover:scale-110'

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-10 mx-auto flex max-w-6xl items-center justify-center gap-6 bg-transparent px-6 py-4 md:gap-40 md:px-10">
      <nav className="flex items-center gap-6 font-serif text-lg tracking-wide text-white">
        <a href="#" className="transition hover:text-white/70">MAN</a>
        <a href="#" className="transition hover:text-white/70">WOMAN</a>
      </nav>

      <div className="flex items-center gap-4">
        <label className="hidden w-60 items-center rounded-sm bg-neutral-100 px-3 py-2 sm:flex">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-transparent text-xs text-neutral-700 placeholder:text-neutral-500 focus:outline-none"
          />
          <SearchIcon className="size-4 text-neutral-500" />
        </label>

        <button aria-label="Wishlist" className={iconBtn}>
          <HeartIcon className="size-5" />
        </button>
        <button aria-label="Akun" className={iconBtn}>
          <UserIcon className="size-5" />
        </button>
        <button aria-label="Keranjang" className={iconBtn}>
          <CartIcon className="size-5" />
        </button>
        <button aria-label="Menu" className={iconBtn}>
          <MenuIcon className="size-6" />
        </button>
      </div>
    </header>
  )
}
