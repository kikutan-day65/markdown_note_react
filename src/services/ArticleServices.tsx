import axios from "axios";
import { api, apiEndpoints } from "../api/endpoints";
import type { ArticlePublic, ArticleSummaryWithUser } from "../models/Article";
import type { PaginatedResponse } from "../models/Pagination";

export const listArticlesAPI = async (page: number) => {
  return await axios.get<PaginatedResponse<ArticleSummaryWithUser>>(
    api + apiEndpoints.articles.list,
    {
      params: {
        page,
      },
    },
  );
};

export const retrieveArticleAPI = async (articleId: string) => {
  return await axios.get<ArticlePublic>(
    api + apiEndpoints.articles.retrieve(articleId),
  );
};
