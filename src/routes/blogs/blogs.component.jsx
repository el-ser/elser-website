import { useEffect, useState } from "react";
import "./blogs.styles.scss";

const GET_USER_ARTICLES = `
    query GetUserArticles($page: Int!) {
        user(username: "elser") {
            publication {
                posts(page: $page) {
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

  console.log(blogs);

  return (
    <main className="blogs-main-container">
      <h1 className="page-title">Blogs</h1>
      {blogs.map(({ title, brief, coverImage, slug }) => {
        return (
          <div className="card-container">
            <div className="image-container">
              <img className="cover-image" src={coverImage} alt={slug} />
            </div>
            <div className="details">
              <div className="title">{title}</div>
              <div className="description">{brief}</div>
              <button className="read-more-button">Read More</button>
            </div>
          </div>
        );
      })}
      <button className="see-all-blogs">See All Blogs</button>
    </main>
  );
};

export default Blogs;
