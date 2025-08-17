import { useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div data-theme="light" className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4">
        <Hero />
        <div className="card bg-base-100 shadow-xl mt-8">
          <div className="card-body">
            <h2 className="card-title">Vite + React + TailwindCSS + daisyUI</h2>
            <p>This starter is ready to go. Edit <code>src/App.jsx</code> and save to test HMR.</p>
            <div className="flex items-center gap-4">
              <button className="btn btn-primary" onClick={() => setCount((c) => c + 1)}>
                count is {count}
              </button>
              <a className="link" href="https://daisyui.com/components/" target="_blank" rel="noreferrer">
                daisyUI Components
              </a>
            </div>
          </div>
        </div>
      </main>
      <footer className="footer footer-center p-4 bg-base-200 text-base-content mt-12">
        <aside>
          <p>
            © {new Date().getFullYear()} Vite + React + Tailwind + daisyUI Starter
          </p>
        </aside>
      </footer>
    </div>
  )
}

export default App
