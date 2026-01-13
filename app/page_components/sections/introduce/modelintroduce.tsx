import Image from "next/image"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"

import { modelImages } from "@/app/page_components/data/models"

export default function NyamuraModelIntroduce() {
  return (
    <div className="flex justify-center lg:justify-end">
      <Carousel
        opts={{ startIndex: 1 }}
        className="max-w-[380px] rounded-xl bg-black/65 backdrop-blur-sm"
      >
        <div className="p-4">
          <CarouselContent>
            {modelImages.map((model, index) => (
              <CarouselItem
                key={model.id}
                className="flex flex-col items-center gap-3"
              >
                <h3 className="text-lg font-semibold text-white text-center">
                  {model.title}
                </h3>

                <div className="relative w-[270px] h-[480px] rounded-xl bg-zinc-900/80 border border-white/10 shadow-lg overflow-hidden">
                  <Image
                    src={model.src}
                    alt={model.title}
                    fill
                    className="object-contain"
                    style={{ transform: `scale(${model.scale})` }}
                    priority={index === 0}
                  />
                </div>

                <p className="text-sm text-white/80 text-center max-w-[280px]">
                  {model.description}
                </p>
              </CarouselItem>
            ))}
          </CarouselContent>
        </div>

        <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
        <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
      </Carousel>
    </div>
  )
}

