import { Button } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-12">
      <div className="grid max-w-fit gap-4 p-12 border rounded-lg">
        <div className="grid max-w-fit gap-4 p-12 border rounded-md">
          <div className="grid max-w-fit gap-4 p-12 border rounded-sm">
            <Button>default</Button>
            <Button variant={"destructive"}>destructive</Button>
            <Button variant={"ghost"}>ghost</Button>
            <Button variant={"link"}>link</Button>
            <Button variant={"outline"}>outline</Button>
            <Button variant={"secondary"}>secondary</Button>
          </div>
        </div>
      </div>

      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sit
        facilis ducimus, laboriosam, accusantium dolore necessitatibus unde,
        perferendis aliquam mollitia optio maxime minima ullam accusamus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sit
        facilis ducimus, laboriosam, accusantium dolore necessitatibus unde,
        perferendis aliquam mollitia optio maxime minima ullam accusamus.
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorum sit
        facilis ducimus, laboriosam, accusantium dolore necessitatibus unde,
        perferendis aliquam mollitia optio maxime minima ullam accusamus.
      </p>
    </main>
  );
}
