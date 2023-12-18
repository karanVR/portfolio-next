import NavMenu from "@/components/nav-menu";
import { ModeToggle } from "@/components/theme-button";
import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <UserButton />
      <div className="flex justify-between">
        <Link href="/sign-in">
          <Button className="p-4 m-4">
            login to see exclusive features (unprotected route)
          </Button>
        </Link>
        <ModeToggle className="m-2" />
      </div>
    </main>
  );
}
