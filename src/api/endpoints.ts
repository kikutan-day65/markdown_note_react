export const api = "http://localhost:8000/api/v1";

export const apiEndpoints = {
  auth: {
    login: "/auth/login",
    logout: "/auth/logout",
    refresh: "/auth/refresh",
  },
  articles: {
    create: "/articles",
    list: "/articles",
    retrieve: (articleId: string) => `/articles/${articleId}`,
    update: (articleId: string) => `/articles/${articleId}`,
    delete: (articleId: string) => `/articles/${articleId}`,
    like: (articleId: string) => `/articles/${articleId}/like`,
    unlike: (articleId: string) => `/articles/${articleId}/unlike`,
    createComment: (articleId: string) => `/articles/${articleId}/comments`,
    listComments: (articleId: string) => `/articles/${articleId}/comments`,
  },
  comments: {
    retrieve: (commentId: string) => `/comments/${commentId}`,
    update: (commentId: string) => `/comments/${commentId}`,
    delete: (commentId: string) => `/comments/${commentId}`,
  },
  tags: {
    list: "/tags",
  },
  users: {
    getMe: "/users/me",
    updateMe: "/users/me",
    deleteMe: "/users/me",
    listMyArticles: "/users/me/articles",
    listMyComments: "/users/me/comments",
    create: "/users",
    retrieve: (userId: string) => `/users/${userId}`,
    listUserArticles: (userId: string) => `/users/${userId}/articles`,
  },
} as const;
