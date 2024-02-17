import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="flex text-2xl flex-col justify-around">
      <text className="m-2 p-2"> Hello world!</text>
      <label className="m-2 p-2"> Home Page</label>
      <Link href={"/login"}> Login </Link>
    </main>
  );
}
