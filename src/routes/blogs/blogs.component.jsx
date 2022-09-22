import MainWrapper from "../../components/main-wrapper/main-wrapper.component";
import PageTitle from "../../components/page-title/page-title.component";
import BlogCard from "../../components/blog-card/blog-card.component";
import Button from "../../components/button/button.component";
import Spinner from "../../components/spinner/spinner.component";
import { useGetBlogsDataQuery } from "../../store/blogs/blogs.api";

const handleDisplay = ({ isLoading, error, data }) => {
  if (isLoading) {
    return <Spinner />;
  }

  if (error) {
    return <div>Encountered an error</div>;
  }

  return (
    <section className="flex flex-col pt-[5vh] px-[5%] items-center lg:px-[10%] animate-fade-in-slide-up-1000">
      {data.user.publication.posts.map((props) => {
        return <BlogCard cardDetails={props} key={props._id} />;
      })}
      <Button
        buttonType="primary"
        className="btn-primary self-end lg:text-xl animate-fade-in-slide-up-1500"
      >
        <a href="https://elser.hashnode.dev/">See All Blogs</a>
      </Button>
    </section>
  );
};

const Blogs = () => {
  const blogsQuery = useGetBlogsDataQuery();

  return (
    <MainWrapper>
      <PageTitle title="Blogs" additionalClass="animate-fade-in-slide-up-500" />
      {handleDisplay(blogsQuery)}
    </MainWrapper>
  );
};

export default Blogs;
