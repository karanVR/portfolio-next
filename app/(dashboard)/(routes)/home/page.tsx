import NavMenu from "@/components/nav-menu";
import { ModeToggle } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <main>
      <div className="flex-col justify-center items-center h-full">
        <UserButton afterSignOutUrl="/" />
        <div className="flex justify-between">
          <Button className="p-4 m-4">
            this is home page(protected route)
          </Button>
          <ModeToggle className="m-2" />
        </div>
      </div>
    </main>
  );
}
