import { useEffect, useState } from "react";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import BlogCard from "../../components/blog-card/blog-card.component";

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

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    const getAllBlogs = async () => {
      const data = await fetch("https://api.hashnode.com/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          query: GET_USER_ARTICLES,
          variables: { page: 0 },
        }),
      });
      return data.json();
    };

    getAllBlogs().then((response) => {
      const posts = response.data.user.publication.posts;
      setBlogs(posts);
    });
  }, []);

  return (
    <MainWrapper>
      <section className="flex flex-col pt-[12vh] px-[10%] items-center">
        <h1 className="text-4xl py-4 lg:text-[3vw]">Blogs</h1>
        {blogs.map((props) => {
          return <BlogCard cardDetails={props} key={props._id} />;
        })}
        <button className="self-end border-0 rounded-lg m-4 h-8 w-2/5 font-poppins font-semibold text-smoke-500 bg-navy-blue-400 lg:w-2/12">
          See All Blogs
        </button>
      </section>
    </MainWrapper>
  );
};

export default Blogs;
