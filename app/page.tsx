import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-y-1 p-24">
      <Image
        src={"/avatar.jpeg"}
        alt={""}
        width={100}
        height={100}
        className={"rounded-full"}
      ></Image>
      <span>Hi 👋🏻</span>
      <span>It moved to</span>
      <Link
        href={"https://yanggggjie.github.io/rising-repo/"}
        className={"underline"}
      >
        https://yanggggjie.github.io/rising-repo/
      </Link>
      <span className={"text-xl"}>with SSG, much faster!</span>
    </main>
  );
}
