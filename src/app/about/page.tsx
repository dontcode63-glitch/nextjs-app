import { Separator } from "@/shared/ui/separator"

const values = [
  {
    title: "Итальянское качество",
    description: "Каждая деталь продумана. Мы работаем только с лучшими ткачами Италии и используем ткани премиум-класса.",
  },
  {
    title: "Вечный стиль",
    description: "Мы не следуем трендам — мы создаём их. Наши вещи не выходят из моды, они становятся классикой.",
  },
  {
    title: "Персональный подход",
    description: "Каждый клиент — уникален. Мы помогаем подобрать идеальный образ и заботимся о каждой детали.",
  },
  {
    title: "Устойчивость",
    description: "Мы осознаём свою ответственность. Эко-материалы, этичное производство, долгий срок службы каждой вещи.",
  },
]

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20">
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold tracking-wide text-white mb-6">
          О бренде
        </h1>
        <p className="text-lg text-white/50 max-w-2xl mx-auto leading-relaxed">
          Fattore — это больше чем одежда. Это философия стиля, основанная
          на итальянских традициях и современном подходе к качеству.
        </p>
      </div>

      <Separator className="mb-16" />

      <section className="mb-20">
        <div className="backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] rounded-2xl p-8 md:p-12">
          <h2 className="text-2xl font-semibold text-white mb-6">Наша история</h2>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              Fattore родился в 2018 году из простой идеи: мужская одежда должна быть
              одновременно стильной, комфортной и сделанной на совесть. Основатель бренда,
              проведя годы в мире итальянского fashion, решил объединить европейское
              мастерство с доступностью.
            </p>
            <p>
              Мы начали с нескольких моделей рубашек, сшитых в маленькой мастерской на
              окраине Милана. Сегодня Fattore — это полноценная коллекция мужской одежды,
              от базовых вещей до premium-линии пиджаков и обуви.
            </p>
            <p>
              Наше имя говорит само за себя: &ldquo;fattore&rdquo; по-итальянски — это
              &ldquo;создатель&rdquo;, &ldquo;фактор&rdquo;. Мы создаём стиль, который
              становится частью вашей личности.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <h2 className="text-2xl font-semibold text-white mb-8 text-center">Наши ценности</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] rounded-2xl p-8 transition-all hover:bg-white/[0.08]"
            >
              <div className="text-3xl font-bold text-white/20 mb-4">0{i + 1}</div>
              <h3 className="text-lg font-semibold text-white mb-2">{value.title}</h3>
              <p className="text-sm text-white/50 leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section>
        <div className="text-center backdrop-blur-xl bg-white/[0.05] border border-white/[0.1] rounded-2xl p-12">
          <h2 className="text-2xl font-semibold text-white mb-4">Миссия</h2>
          <p className="text-xl text-white/50 font-light max-w-xl mx-auto leading-relaxed">
            &ldquo;Делать людей увереннее через одежду, в которую вложено
            сердце и мастерство.&rdquo;
          </p>
        </div>
      </section>
    </div>
  )
}
