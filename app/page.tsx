import NavMenu from "@/components/nav-menu";
import { ModeToggle } from "@/components/theme-button";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main>
      <div className="flex justify-between">
        <Button className="p-4 m-4">login to see exclusive features</Button>
        <ModeToggle className="m-2" />
      </div>
    </main>
  );
}
