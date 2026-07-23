import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link } from "react-router";
import type { ArticleSummaryWithUser } from "../../models/Article";
import type { PaginatedResponse } from "../../models/Pagination";
import { listArticlesAPI } from "../../services/ArticleServices";
import AppPagination from "../common/AppPagination";

function ListArticles() {
  const [articlesPage, setArticlesPage] =
    useState<PaginatedResponse<ArticleSummaryWithUser> | null>(null);

  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const listArticles = async () => {
      const response = await listArticlesAPI(page);
      setArticlesPage(response.data);
    };

    listArticles();
  }, [page]);

  return (
    <div>
      {articlesPage?.items.map((article) => (
        <div key={article.id}>
          <Typography
            component={Link}
            to={{ pathname: `/articles/${article.id}` }}
          >
            TITLE: {article.title}
          </Typography>
          <Typography>CREATED AT: {article.created_at}</Typography>
          <Typography>UPDATED AT: {article.updated_at}</Typography>
          <Typography>LIKES: {article.likes_count}</Typography>
          <Typography
            component={Link}
            to={{ pathname: `/users/${article.user.id}` }}
          >
            WRITTEN BY: {article.user.username}
          </Typography>
          <Typography>TAGS: {article.tags.map((tag) => tag.name)}</Typography>
          <br />
          -------------------------------------------------------------------------------------------------------------------------
        </div>
      ))}
      {articlesPage && (
        <div>
          <AppPagination
            page={page}
            totalPages={articlesPage.total_pages}
            onPageChange={setPage}
          />
        </div>
      )}
    </div>
  );
}

export default ListArticles;
