import { IResult } from "@/interface/result"
import Image from "next/image"
import Link from "next/link"

interface IItemProps {
  result: IResult
}

export default function Item({ result }: IItemProps) {
  const itemsTextCol = (
    <div className="flex flex-col justify-center">
      <h2>
        <Link
          className="text-xl font-bold underline"
          href={`https://en.wikipedia.org/?curid=${result.pageid}`}
        >
          {result.title}
        </Link>
      </h2>
      <p>{result.extract}</p>
    </div>
  )

  return result.thumbnail?.source ? (
    <article className="max-w-lg m-4">
      <div className="flex flex-row gap-4 ">
        <div className="flex flex-col justify-center">
          <Image
            src={result.thumbnail.source}
            alt={result.title}
            width={result.thumbnail.width}
            height={result.thumbnail.height}
          />
        </div>
        {itemsTextCol}
      </div>
    </article>
  ) : (
    <article className="max-w-lg m-4">{itemsTextCol}</article>
  )
}
