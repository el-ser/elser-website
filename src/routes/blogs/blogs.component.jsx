import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import PageTitle from "../../components/page-title/page-title.component";
import BlogCard from "../../components/blog-card/blog-card.component";
import Button from "../../components/button/button.component";
import Spinner from "../../components/spinner/spinner.component";
import { useGetBlogsDataQuery } from "../../store/blogs/blogs.api";

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

  // const { data, error, isLoading } = useGetBlogsDataQuery();
  // console.log(data);
  // console.log(isLoading);
  // console.log(error);
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
      <PageTitle title="Blogs" />
      {blogs.length === 0 ? (
        <Spinner />
      ) : (
        <section className="flex flex-col pt-[5vh] px-[5%] items-center lg:px-[10%] animate-fade-in-slide-up-500">
          {blogs.map((props) => {
            return <BlogCard cardDetails={props} key={props._id} />;
          })}
          <Button
            buttonType="primary"
            className="btn-primary self-end lg:text-xl"
          >
            <a href="https://elser.hashnode.dev/">See All Blogs</a>
          </Button>
        </section>
      )}
    </MainWrapper>
  );
};

export default Blogs;
