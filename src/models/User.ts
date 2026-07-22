export type UserPrivate = {
  id: string;
  username: string;
  email: string;
  avatar_url: string | null;
  created_at: string;
  updated_at: string;
};

export type CurrentUser = {
  id: string;
  username: string;
  avatar_url: string | null;
};

export type UserSummary = {
  id: string;
  username: string;
};
