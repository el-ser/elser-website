import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import PageTitle from "../../components/page-title/page-title.component";
import BlogCard from "../../components/blog-card/blog-card.component";
import Button from "../../components/button/button.component";
import Spinner from "../../components/spinner/spinner.component";
import { useGetBlogsDataQuery } from "../../store/blogs/blogs.api";

const Blogs = () => {
  const { data, error, isLoading } = useGetBlogsDataQuery();

  return (
    <MainWrapper>
      <PageTitle title="Blogs" />
      {isLoading ? (
        <Spinner />
      ) : (
        <section className="flex flex-col pt-[5vh] px-[5%] items-center lg:px-[10%] animate-fade-in-slide-up-500">
          {data.user.publication.posts.map((props) => {
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
