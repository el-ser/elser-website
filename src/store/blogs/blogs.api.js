import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "elser") {
            publication {
                posts(page: $page) {
                    _id
                    title
                    brief
                    slug
                    coverImage
                }
            }
        }
    }
`;

export const blogsApi = createApi({
  reducerPath: "blogsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.hashnode.com/" }),
  endpoints: (builder) => ({
    getBlogsData: builder.query({
      query: () => ({
        // document: gql``,
      }),
    }),
  }),
});

export const { useGetBlogsDataQuery } = blogsApi;
