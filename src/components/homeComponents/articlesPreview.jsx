import React, { useState, useEffect } from 'react';
import { getArticles } from '../../api/articles';

function ArticlesPreview() {
  
  const [articles, setArticles] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchArticles() {
      try {
        const articles = await getArticles(10);

        console.log(articles);

        setArticles(articles);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching articles:', error);
        setLoading(false);
      }
    }

    fetchArticles();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div>{articles[0].name}</div>
    </div>
  );
}

export default ArticlesPreview;
