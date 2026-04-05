import Link from "next/link"
import { products } from "@/shared/data/products"
import { Card, CardContent } from "@/shared/ui/card"
import { Badge } from "@/shared/ui/badge"
import { Button } from "@/shared/ui/button"

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center py-32 px-6 text-center">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent pointer-events-none" />
        <div className="relative z-10">
          <h1 className="text-6xl md:text-8xl font-bold tracking-widest text-white mb-6">
            FATTORE
          </h1>
          <p className="text-xl md:text-2xl text-white/60 font-light max-w-2xl mx-auto mb-10">
            Итальянский стиль. Безупречное качество. Для тех, кто знает.
          </p>
          <Link href="#catalog">
            <Button size="lg" className="text-base px-10">
              Смотреть каталог
            </Button>
          </Link>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="max-w-7xl mx-auto px-6 pb-20">
        <h2 className="text-3xl font-semibold text-white mb-2">Каталог</h2>
        <p className="text-white/50 mb-10">Подборка лучших моделей сезона</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <Link key={product.id} href={`/product/${product.id}`}>
              <Card className="overflow-hidden group cursor-pointer h-full">
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <Badge className="absolute top-4 left-4">
                    {product.category}
                  </Badge>
                </div>
                <CardContent className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {product.name}
                  </h3>
                  <p className="text-white/50 text-sm mb-3 line-clamp-2">
                    {product.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-xl font-bold text-white">
                      {product.price.toLocaleString("ru-RU")} ₽
                    </span>
                    <Button variant="outline" size="sm">
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </section>
    </div>
  )
}
