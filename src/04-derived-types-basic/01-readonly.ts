interface IComment {
  id: string
  content: string
}

interface IArticle {
  title: string
  publishedAt: Date
  content: string
  author: string
  comments: ReadonlyArray<IComment>
}

export const processArticle = (article: Readonly<IArticle>) => {
  article.author = 'Jon'
  article.comments.push({ id: '5', content: 'You suck!'})

  // do some processing...
}
