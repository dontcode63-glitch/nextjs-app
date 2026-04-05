import Link from "next/link"

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur-xl bg-white/[0.05] border-b border-white/[0.1]">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold tracking-wider text-white">
          FATTORE
        </Link>
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            Каталог
          </Link>
          <Link
            href="/about"
            className="text-sm text-white/70 hover:text-white transition-colors"
          >
            О нас
          </Link>
        </div>
      </div>
    </nav>
  )
}
