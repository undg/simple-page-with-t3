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
    <main className="m-auto grid w-full max-w-screen-2xl bg-[#E6F1F8] bg-[url('/img/stamp.png')] bg-[length:33%_auto] bg-[right_1rem_top_1rem] bg-no-repeat md:grid-cols-2 md:bg-auto md:bg-[left_0_top_2rem] md:px-32 md:pt-16">
      <div className="p-8">
        <span className="text-base">{homePage?.header}</span>
        <h1 className="text-xl font-bold">{homePage?.title}</h1>
        <p className="text-base">{homePage?.description}</p>
        <div className="mt-8 hidden justify-start md:flex">
          <Button>
            <span>Book Now</span> <MoveRight />
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-2 grid-rows-2">
        {categories.map((category) => (
          <div
            key={category.id}
            className="relative aspect-square md:h-full md:w-full"
          >
            <Image src={category.image} alt={category.name} fill className="object-cover" />
            <div className="absolute bottom-0 w-full p-1 text-white">
              <Button variant="ghost" size="full">
                <span className="text-xl">{category.name}</span>
                <MoveRight />
              </Button>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center md:hidden">
        <Button>
          <span>Book Now</span> <MoveRight />
        </Button>
      </div>
    </main>
  );
}
