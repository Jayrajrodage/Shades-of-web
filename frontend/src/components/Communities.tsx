import type { ComponentProps } from "../utils/types";
import Card from "./Card";

const Communities = ({ data }: ComponentProps) => {
  return (
    <div className="flex flex-col gap-10">
      <h1 className="text-lg uppercase font-color text-center text-wrap">
        Communities we manage
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {
          <>
            {data.map((item, id) => (
              <Card
                key={id}
                post_title={item.post_title}
                post_excerpt={item.post_excerpt}
                image_url={item.image_url}
              />
            ))}
          </>
        }
      </div>
    </div>
  );
};

export default Communities;
