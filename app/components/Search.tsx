"use client"
import { useRouter } from "next/navigation"
import { FormEvent, useRef } from "react"

export function Search() {
  const search = useRef<HTMLInputElement>(null)
  const router = useRouter()

  // useRef
  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    if (!search?.current) return
    router.push(`/${search.current.value}`)
    console.log("search.current.value =>", search.current.value)
    search.current.value = ""
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex justify-center w-50 md:justify-between"
    >
      <input
        type="text"
        className="p-2 text-xl bg-white w-80 rounded-xl"
        ref={search}
        placeholder="Search"
      />
      <button className="p-2 ml-2 text-xl font-bold rounded-xl bg-slate-300">
        🔍
      </button>
    </form>
  )
}
