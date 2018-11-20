interface IComment {
  id: string
  content: string
}

interface IArticle {
  title: string
  content: string
  author: string
  comments: IComment[]
  meta: {
    publishedAt: Date
  }
}

export const processArticle = (article: IArticle) => {
  article.author = 'Jon'
  article.meta.publishedAt = new Date()
  article.comments.push({ id: '5', content: 'You suck!'})

  // do some processing...
}
