import { gql } from 'graphql-request'

export const BASE_URL = "https://api-ap-northeast-1.hygraph.com/v2/cl936zt9u3qzq01ul6x28fvg6/master"

export const HOMEQUERY = gql`
{
  posts{
    id,
    title,
    datePublished,
    readingTime,
    slug,
    author{
      name,
      avatar{
        url
      }
    }
    coverPhoto {
      id,
      url
    }
  }
}
`

export const EACHPOSTQUERY = gql`
query Post($slug: String!){
    post(where: {slug: $slug}){
        id,
        title,
        slug,
        coverPhoto{
          url
        },
        excerpt,
        datePublished,
        readingTime,
        author{
            id,
            name,
            profession,
            avatar {
                url
            }
        }
        content{
            html
        }
        coverPhoto{
            id,
            url
        }
    }
}
`

export const SLUGSQUERY = gql`
{
  posts {
    slug
  }
}
`