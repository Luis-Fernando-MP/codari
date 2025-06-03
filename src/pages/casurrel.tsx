import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";

export default function CarouselBlock() {
  return (
    <div className="flex justify-center items-center min-h-[300px] bg-gradient-to-r from-indigo-200 via-purple-200 to-pink-200 rounded-xl shadow-lg p-8">
      <Carousel className="w-full max-w-xl">
        <CarouselContent className="flex gap-4">
          <CarouselItem className="basis-1/3 bg-white rounded-lg shadow p-6 flex items-center justify-center text-lg font-semibold text-indigo-700">
            Item 1
          </CarouselItem>
          <CarouselItem className="basis-1/3 bg-white rounded-lg shadow p-6 flex items-center justify-center text-lg font-semibold text-purple-700">
            Item 2
          </CarouselItem>
          <CarouselItem className="basis-1/3 bg-white rounded-lg shadow p-6 flex items-center justify-center text-lg font-semibold text-pink-700">
            Item 3
          </CarouselItem>
        </CarouselContent>
      </Carousel>
    </div>
  );
}