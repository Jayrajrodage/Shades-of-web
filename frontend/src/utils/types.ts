// types.ts
export interface Community {
  post_title: string;
  post_excerpt: string;
  image_url: string;
}

export interface ComponentProps {
  data: Community[];
}
