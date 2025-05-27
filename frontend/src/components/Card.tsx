import type { Community } from "../utils/types";

const Card = ({ post_title, post_excerpt, image_url }: Community) => {
  return (
    <div className="flex flex-col justify-between gap-5 shadow-xl">
      <img
        src={image_url}
        alt={post_title}
        loading="lazy"
        className="w-full object-fit"
      />
      <p className="text-gray-600 px-5 text-start font-color">{post_excerpt}</p>
      <div className="flex h-[70px] items-center bg-[#F8F8F8]">
        <h2 className="text-xl text-start px-4 font-semibold font-color">
          {post_title}
        </h2>
      </div>
    </div>
  );
};

export default Card;
