const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  viewBox: '0 0 24 24',
}

export const SearchIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </svg>
)

export const HeartIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M12 20.5s-7.5-4.6-9.3-9.4C1.5 7.8 3.6 4.5 7 4.5c2 0 3.6 1.1 5 3 1.4-1.9 3-3 5-3 3.4 0 5.5 3.3 4.3 6.6-1.8 4.8-9.3 9.4-9.3 9.4Z" />
  </svg>
)

export const UserIcon = (p) => (
  <svg {...base} {...p}>
    <circle cx="12" cy="7.5" r="3.5" />
    <path d="M5 21v-3.5A3.5 3.5 0 0 1 8.5 14h7a3.5 3.5 0 0 1 3.5 3.5V21" />
  </svg>
)

export const CartIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M2 3h3l2.4 12.2a1.5 1.5 0 0 0 1.5 1.3h9.4a1.5 1.5 0 0 0 1.5-1.2L21.5 7H6" />
    <circle cx="9.5" cy="20.5" r="1.3" />
    <circle cx="17.5" cy="20.5" r="1.3" />
  </svg>
)

export const MenuIcon = (p) => (
  <svg {...base} {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </svg>
)

export const ChevronLeftIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m15 5-7 7 7 7" />
  </svg>
)

export const ChevronRightIcon = (p) => (
  <svg {...base} {...p}>
    <path d="m9 5 7 7-7 7" />
  </svg>
)
