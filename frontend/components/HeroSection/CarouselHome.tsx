"use client"
import Autoplay from "embla-carousel-autoplay"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { Button } from "../ui/button"
import { useRef, useState, useEffect } from "react"

export function CarouselHome() {
  const plugin = useRef(
    Autoplay({
      delay: 9000,
      stopOnInteraction: false,
    })
  )
  
  const [isMobile, setIsMobile] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }
    
    checkMobile()
    window.addEventListener('resize', checkMobile)
    
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Disable vertical carousel on mobile
  const carouselOptions = isMobile 
    ? {
        align: "start" as const,
        dragFree: false,
        axis: "x" as const, // Horizontal على mobile
        containScroll: "trimSnaps" as const,
      }
    : {
        align: "start" as const,
        dragFree: true,
        axis: "y" as const, // Vertical على desktop
        containScroll: "trimSnaps" as const,
      }

  return (
    <div className=" overflow-auto" ref={carouselRef}>
      <Carousel
        opts={carouselOptions}
        orientation={isMobile ? "horizontal" : "vertical"}
        className="w-full"
        plugins={isMobile ? [] : [plugin.current]} // Disable autoplay على mobile
      >
        <CarouselContent className={isMobile ? "h-screen" : "h-[calc(100vh-100px)]"}>
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className={isMobile ? "basis-full" : "lg:basis-1/2"}>
              <Card className="bg-[#50211E] rounded-none">
                <CardContent className={`${isMobile ? 'h-screen' : 'h-[calc(100vh-90px)]'} bg-[url(/Home.webp)] bg-cover flex items-center justify-around`}>
                  <div></div>
                  <div className="space-y-6 z-10 md:ml-24 px-6">
                    <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
                      Un roman de vacances <br /> vacances par O bag
                    </h2>
                    <p className="text-lg sm:text-xl text-white/90 max-w-md">
                      Le sac fourre-tout le plus apprécié de O bag se décline
                      cette fois dans un look encore plus spécial : une texture
                      matelassée !
                    </p>
                    <Button className="bg-white text-primary px-6 py-3 rounded-full duration-700 hover:bg-white shadow hover:shadow-lg cursor-pointer transition font-medium">
                      choisissez o bag maintenant !
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  )
}