import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import NewArrivals from './components/NewArrivals.jsx'

export default function App() {
  return (
    <div className="min-h-screen">
      <div className="relative bg-navy">
        <Navbar />
        <Hero />
      </div>
      <NewArrivals />
    </div>
  )
}
