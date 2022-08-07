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
          className="rounded-[10px] h-auto max-w-full md:self-center"
          src={coverImage}
          alt={slug}
        />
      </div>
      <div id="card-details" className="flex flex-col m-2 md:justify-between">
        <div
          id="title"
          className="font-lexendDeca text-2xl font-bold md:self-center md:text-[1.5vw]"
        >
          {title}
        </div>
        <div
          id="description"
          className="font-poppins text-base line-clamp-1 h-24 md:h-auto md:text-[1vw] md:line-clamp-none"
        >
          {brief}
        </div>
        <button
          id="read-more-button"
          className="w-[40%] h-[10%] border-0 font-poppins text-xs text-smoke-500 self-end rounded-lg bg-navy-blue-600 md:h-1/6 md:w-1/5 md:text-[0.8vw]"
        >
          <a href={hashnodeUrl + slug}>Read More</a>
        </button>
      </div>
    </div>
  );
};

export default BlogCard;
