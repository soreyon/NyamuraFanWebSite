import * as React from "react"
import TypewriterText from "@/components/ui/Typewritertext"
import { useState } from 'react'
import { useEffect } from "react"


export default function BaseIntroduce() {

    const [accept, setAccept] = useState(false)
    
      useEffect(() => {
        // начальное состояние (если уже принимал раньше)
        if (localStorage.getItem("fan-warning-seen")) {
          setAccept(true)
        }
    
        const handler = () => setAccept(true)
    
        window.addEventListener("fan-accepted", handler)
        return () => window.removeEventListener("fan-accepted", handler)
      }, [])

    return (
        <div className="max-w-lg">
            <div className="rounded-xl bg-black/65 backdrop-blur-sm p-6">
                <h1 className="hidden text-4xl font-bold text-white min-[904px]:block">
                    <TypewriterText text="Нямура / Nyamuras" enabled={accept} />
                </h1>

                <h1 className="block text-4xl font-bold text-white min-[904px]:hidden">
                    <TypewriterText text={"Нямура\nNyamuras"} enabled={accept} />

                </h1>

                <hr className="my-3 border-zinc-300" />
                <p className="text-lg text-white">
                    Русскоязычный{" "}
                    <a
                        href="https://ru.wikipedia.org/wiki/Виртуальный_ютубер"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        VTuber
                    </a>
                    , создающий контент на <a
                        href="https://www.youtube.com/@Nyamuras"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-400 hover:underline"
                    >
                        YouTube
                    </a> и ведущий прямые трансляции на
                    <a href="https://www.twitch.tv/nyamuras" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline"> Twitch</a>.
                </p>
            </div>
        </div>
    )
}
