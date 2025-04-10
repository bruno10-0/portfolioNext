"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

interface ProjectGalleryProps {
  mainImage: string
  gallery: string[]
}

export function ProjectGallery({ mainImage, gallery }: ProjectGalleryProps) {
  const [currentImage, setCurrentImage] = useState(mainImage)
  const allImages = [mainImage, ...gallery]

  const handlePrevious = () => {
    const currentIndex = allImages.indexOf(currentImage)
    const newIndex = currentIndex === 0 ? allImages.length - 1 : currentIndex - 1
    setCurrentImage(allImages[newIndex])
  }

  const handleNext = () => {
    const currentIndex = allImages.indexOf(currentImage)
    const newIndex = currentIndex === allImages.length - 1 ? 0 : currentIndex + 1
    setCurrentImage(allImages[newIndex])
  }

  return (
    <div className="space-y-4">
      <div className="relative aspect-[4/3] overflow-hidden rounded-lg border">
        <Image src={currentImage || "/placeholder.svg"} alt="Project image" fill className="object-cover" priority />
        <div className="absolute inset-0 flex items-center justify-between p-2">
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full opacity-70 transition-opacity hover:opacity-100"
            onClick={handlePrevious}
          >
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous image</span>
          </Button>
          <Button
            variant="secondary"
            size="icon"
            className="h-8 w-8 rounded-full opacity-70 transition-opacity hover:opacity-100"
            onClick={handleNext}
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next image</span>
          </Button>
        </div>
      </div>

      <div className="flex gap-2 overflow-auto pb-2">
        {allImages.map((image, index) => (
          <button
            key={index}
            className={cn(
              "relative aspect-[4/3] h-20 flex-shrink-0 overflow-hidden rounded-md border transition-all",
              currentImage === image ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100",
            )}
            onClick={() => setCurrentImage(image)}
          >
            <Image
              src={image || "/placeholder.svg"}
              alt={`Project thumbnail ${index + 1}`}
              fill
              className="object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  )
}
