export interface IResult {
  pageid: string
  title: string
  extract: string
  thumbnail?: IThumbnail
}
interface IThumbnail {
  source: string
  width: number
  height: number
}

export interface ISearchResults {
  query?: IPage
}

interface IPage {
  pages?: IResult[]
}
