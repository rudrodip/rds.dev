import { SheetClose } from "@src/components/ui/sheet";
import Link from "next/link";
import { Button } from "../ui/button";
import { pages } from "@src/constants/pages";

export default function MobileNav() {
  return (
    <>
      {pages.map((page) => {
        return (
          <SheetClose asChild key={page.url}>
            <Button
              asChild
              variant="ghost"
              className="flex justify-start underline"
            >
              <Link href={page.url}>{page.name}</Link>
            </Button>
          </SheetClose>
        );
      })}
    </>
  );
}
