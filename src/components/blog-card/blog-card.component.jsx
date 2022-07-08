const BlogCard = ({ cardDetails }) => {
  const { coverImage, title, brief, slug } = cardDetails;
  return (
    <div id="card-container" className="grid bg-navy-blue-400 bg-opacity-50 rounded-[20px] justify-items-center lg:grid-cols-blog-card lg:mx-[15%]">
      <div id="card-image" className="p-2">
        <img className="rounded-[10px] h-auto max-w-full" src={coverImage} alt={slug} />
      </div>
      <div id="card-details" className="flex flex-col gap-2 m-2">
        <div id="title" className="font-lexendDeca text-2xl font-bold">{title}</div>
        <div id="description" className="font-poppins text-base overflow-hidden h-24">{brief}</div>
        <button id="read-more-button" className="w-[40%] h-[10%] border-0 font-poppins text-xs text-smoke-500 self-end rounded-lg bg-navy-blue-400">Read More</button>
      </div>
    </div>
  );
};

export default BlogCard;
