import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import type { ArticlePublic } from "../../models/Article";
import { retrieveArticleAPI } from "../../services/ArticleServices";

function ArticleDetail() {
  const { articleId } = useParams();

  const [article, setArticle] = useState<ArticlePublic | null>(null);

  useEffect(() => {
    if (!articleId) {
      return;
    }

    const retrieveArticle = async () => {
      const response = await retrieveArticleAPI(articleId);
      setArticle(response.data);
    };

    retrieveArticle();
  }, [articleId]);

  if (!article) {
    return <p>Loading....</p>;
  }

  return (
    <div>
      <Typography>TITLE: {article.title}</Typography>
      <br />
      <br />
      <Typography>--- CONTENT ---</Typography>
      <Typography>{article.content}</Typography>
      <br />
      <br />
      <Typography>CREATED AT: {article.created_at}</Typography>
      <Typography>UPDATED AT: {article.updated_at}</Typography>
      <br />
      <br />
      <Typography>LIKES: {article.likes_count}</Typography>
      <br />
      <br />
      <Typography>TAGS: {article.tags.map((tag) => tag.name)}</Typography>
      <br />
      <br />
      <Typography
        component={Link}
        to={{ pathname: `/users/${article.user.id}` }}
      >
        WRITTEN BY: {article.user.username}
      </Typography>
    </div>
  );
}

export default ArticleDetail;
