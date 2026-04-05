"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { products } from "@/shared/data/products"
import { Badge } from "@/shared/ui/badge"
import { Separator } from "@/shared/ui/separator"
import { AddToCartButton } from "@/shared/ui/add-to-cart-button"
import { notFound } from "next/navigation"

export function ProductClient({ params }: { params: Promise<{ id: string }> }) {
  const [productId, setProductId] = useState<string | null>(null)
  const [selectedSize, setSelectedSize] = useState<string | null>(null)
  const [selectedColor, setSelectedColor] = useState<string | null>(null)

  useEffect(() => {
    params.then((p) => setProductId(p.id))
  }, [params])

  const product = productId ? products.find((p) => p.id === productId) : null

  if (!productId || !product) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <Link href="/" className="text-sm text-white/50 hover:text-white transition-colors">
          ← Назад к каталогу
        </Link>
        <p className="text-white/40 mt-8">Загрузка...</p>
      </div>
    )
  }

  const handleAddToCart = () => {
    alert(
      `Добавлено в корзину:\n${product.name}\nРазмер: ${selectedSize || "не выбран"}\nЦвет: ${selectedColor || "не выбран"}`
    )
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <Link
        href="/"
        className="text-sm text-white/50 hover:text-white transition-colors mb-8 inline-block"
      >
        ← Назад к каталогу
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-4">
        {/* Image */}
        <div className="backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] rounded-2xl overflow-hidden">
          <img
            src={product.imageUrl}
            alt={product.name}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* Details */}
        <div className="flex flex-col gap-6">
          <Badge className="w-fit">{product.category}</Badge>

          <h1 className="text-4xl font-bold text-white">{product.name}</h1>

          <p className="text-xl font-semibold text-white">
            {product.price.toLocaleString("ru-RU")} ₽
          </p>

          <Separator />

          <p className="text-white/60 leading-relaxed">{product.description}</p>

          <Separator />

          {/* Size */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-3">Размер</h3>
            <div className="flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <AddToCartButton
                  key={size}
                  type="option"
                  label={size}
                  selected={selectedSize === size}
                  onClick={() => setSelectedSize(size)}
                />
              ))}
            </div>
          </div>

          {/* Color */}
          <div>
            <h3 className="text-sm font-semibold text-white/80 mb-3">Цвет</h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <AddToCartButton
                  key={color}
                  type="option"
                  label={color}
                  selected={selectedColor === color}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>

          <AddToCartButton
            type="cart"
            label="Добавить в корзину"
            onClick={handleAddToCart}
          />

          <p className="text-xs text-white/30 mt-2">
            Бесплатная доставка от 15 000 ₽. Возврат в течение 14 дней.
          </p>
        </div>
      </div>
    </div>
  )
}
