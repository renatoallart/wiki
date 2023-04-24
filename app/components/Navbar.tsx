import Link from "next/link"
import { Search } from "./Search"

export function Navbar() {
  return (
    <nav className="top-0 flex flex-col justify-between p-4 bg-slate-600 lex md:flex-row drop-shadow-xl">
      <h1 className="grid mb-2 text-3xl font-bold text-white place-content-center md:mb-0">
        <Link href="/">Wiki</Link>
      </h1>
      <Search />
    </nav>
  )
}
