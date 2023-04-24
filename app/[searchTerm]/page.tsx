import { IResult, ISearchResults } from "@/interface/result"
import { getWikiResults } from "@/lib/getWikiResults"
import React from "react"
import Item from "./components/Item"

interface ISearchProps {
  params: {
    searchTerm: string
  }
}

export async function generateMetadata({
  params: { searchTerm },
}: ISearchProps) {
  const wikiData: ISearchResults = await getWikiResults(searchTerm)
  const displayTerm = searchTerm.replaceAll("%20", " ")
  if (!wikiData.query?.pages) return { title: `${displayTerm} Not Found` }
  return {
    title: displayTerm,
    description: `Search results for ${displayTerm}`,
  }
}

export default async function Search({ params: { searchTerm } }: ISearchProps) {
  const wikiData: ISearchResults = await getWikiResults(searchTerm)
  const results: IResult[] | undefined = wikiData.query?.pages
  console.log("Wiki", wikiData)
  return (
    <main className="max-w-lg min-h-screen py-1 mx-auto bg-slate-200">
      <p>
        {results ? (
          Object.values(results).map((result) => (
            <Item key={result.pageid} result={result} />
          ))
        ) : (
          <h2>Not Found</h2>
        )}
      </p>
    </main>
  )
}
