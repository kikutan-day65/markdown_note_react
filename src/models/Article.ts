import type { TagSummary } from "./Tag";
import type { UserSummary } from "./User";

export type ArticleSummaryWithUser = {
  id: string;
  title: string;
  created_at: string;
  updated_at: string;
  user: UserSummary;
  tags: TagSummary[];
  likes_count: number;
};

export type ArticlePublic = {
  id: string;
  title: string;
  content: string;
  created_at: string;
  updated_at: string;
  user: UserSummary;
  tags: TagSummary[];
  likes_count: number;
};
