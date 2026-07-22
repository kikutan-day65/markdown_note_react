import axios from "axios";
import { api, apiEndpoints } from "../api/endpoints";
import type { ArticleSummaryWithUser } from "../models/Article";
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
