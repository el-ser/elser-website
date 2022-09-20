import Button from "../button/button.component";

const BlogCard = ({ cardDetails }) => {
  const hashnodeUrl = "https://elser.hashnode.dev/";
  const { coverImage, title, brief, slug } = cardDetails;

  return (
    <div
      id="card-container"
      className="grid bg-navy-blue-400 bg-opacity-50 my-4 rounded-[20px] justify-items-center md:grid-cols-blog-card"
    >
      <div id="card-image" className="p-2">
        <img
          className="rounded-[10px] shadow-md shadow-navy-blue-800 h-auto max-w-full md:h-full object-cover md:self-center"
          src={coverImage}
          alt={slug}
        />
      </div>
      <div
        id="card-details"
        className="flex flex-col m-2 gap-4 md:justify-between"
      >
        <div
          id="title"
          className="header-text header-text-size font-bold md:self-center"
        >
          {title}
        </div>
        <div
          id="description"
          className="description-text readable-text-size h-full overflow-visible text-justify lg:text-[1.1vw]"
        >
          {brief}
        </div>
        <Button buttonType="inverted" className="btn-secondary self-end">
          <a href={hashnodeUrl + slug}>Read More</a>
        </Button>
      </div>
    </div>
  );
};

export default BlogCard;
