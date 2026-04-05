"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"

interface AddToCartButtonProps {
  type: "option" | "cart"
  label: string
  selected?: boolean
  onClick?: () => void
}

export function AddToCartButton({ type, label, selected, onClick }: AddToCartButtonProps) {
  if (type === "cart") {
    return (
      <button
        onClick={onClick}
        className="w-full px-6 py-3 rounded-lg text-base font-medium transition-all backdrop-blur-xl bg-white/15 text-white border border-white/20 hover:bg-white/25 shadow-lg cursor-pointer"
      >
        {label}
      </button>
    )
  }

  return (
    <button
      onClick={onClick}
      className={cn(
        "px-4 py-2 rounded-lg text-sm font-medium transition-all backdrop-blur-xl cursor-pointer",
        selected
          ? "bg-white/25 text-white border border-white/30"
          : "bg-white/10 text-white/70 border border-white/15 hover:bg-white/20 hover:text-white"
      )}
    >
      {label}
    </button>
  )
}
