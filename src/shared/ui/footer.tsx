import Link from "next/link"

export function Footer() {
  return (
    <footer className="mt-20 backdrop-blur-xl bg-white/[0.03] border-t border-white/[0.08]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-bold tracking-wider text-white mb-4">FATTORE</h3>
            <p className="text-sm text-white/50 leading-relaxed">
              Итальянский стиль, безупречное качество.
              Мужская одежда для тех, кто ценит детали.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Навигация</h4>
            <div className="flex flex-col gap-2">
              <Link href="/" className="text-sm text-white/50 hover:text-white/80 transition-colors">Каталог</Link>
              <Link href="/about" className="text-sm text-white/50 hover:text-white/80 transition-colors">О нас</Link>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-white/80 mb-4">Контакты</h4>
            <div className="flex flex-col gap-2">
              <span className="text-sm text-white/50">info@fattore.it</span>
              <span className="text-sm text-white/50">+7 (999) 000-00-00</span>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/[0.08]">
          <p className="text-xs text-white/30 text-center">
            © 2026 Fattore. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  )
}
