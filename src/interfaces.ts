export type PhotoData = {
  id: string;
  alt_description: string;
  blur_hash: string;
  color: string;
  description: string;
  height: number;
  views: number;
  likes: number;
  urls: { large: string; regular: string; raw: string; small: string, thumb: string };
  promoted_at: string;
  width: number;
  user: { name: string; username: string };
};
