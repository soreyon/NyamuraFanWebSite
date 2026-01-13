import BaseIntroduce from "./baseintroduce"
import NyamuraModelIntroduce from "./modelintroduce"
import NyamuraDetailIntroduce from "./detailintroduce"

export default function NyamuraIntroduce() {
  return (
    <section className="relative w-full min-h-[65vh] bg-[url('/NyamurasBIGSCREEN.webp')] bg-cover bg-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-black/80" />

      <div className="relative gap-6 flex flex-col px-12 py-12 items-center sm:flex-row sm:items-start sm:justify-between ">
        <div className="flex flex-col gap-6">
        <BaseIntroduce/>
        <NyamuraDetailIntroduce/>
        </div>
        <NyamuraModelIntroduce />
      </div>
    </section>
  )
}
