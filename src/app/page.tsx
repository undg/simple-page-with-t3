import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "~/@/ui/button";

import { db } from "~/server/db";

const categories = await db.categories.findMany();
const homePage = await db.pages.findFirst({
  where: { name: "villa-holidays" },
});

export default function HomePage() {
  return (
    <main className="mb:mb-12 m-auto mb-8 grid w-full max-w-screen-2xl gap-8 bg-[#E6F1F8] bg-[url('/img/stamp.png')] bg-[length:33%_auto] bg-[right_1rem_top_1rem] bg-no-repeat md:grid-cols-2 md:bg-auto md:bg-[left_0_top_2rem] md:px-12 md:pt-16 lg:gap-12 lg:px-32">
      <div className="p-8">
        <div className="md:relative md:h-16">
          <span className="font-haikus bg-gradient-to-r from-[#0172B1] to-[#019EF5] bg-clip-text py-4 text-2xl text-transparent md:absolute md:-left-16 md:text-4xl">
            {homePage?.header}
          </span>
        </div>
        <h1 className="font-domaine my-8 text-4xl font-bold md:my-12 md:text-6xl">
          {homePage?.title}
        </h1>
        <p className="text-base md:text-lg">{homePage?.description}</p>
        <div className="mt-12 hidden justify-start md:flex">
          <Link href="/">
            <Button size="fixed">
              <span>Book Now</span> <MoveRight />
            </Button>
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative aspect-square md:h-full md:w-full"
          >
            <Image
              src={category.image}
              alt={category.name}
              fill
              className="object-cover"
            />
            <div className="absolute bottom-0 w-full p-1 text-white">
              <Link href="/">
                <Button variant="ghost" size="full">
                  <span className="text-xl">{category.name}</span>
                  <MoveRight />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center md:hidden">
        <Link href="/">
          <Button size="fixed">
            <span>Book Now</span> <MoveRight />
          </Button>
        </Link>
      </div>
    </main>
  );
}
