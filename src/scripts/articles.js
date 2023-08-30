import React, { useState, useEffect } from 'react';
import { API } from '@aws-amplify/api';
import { syncArticles } from '../graphql/queries'; // Import your GraphQL query

function ArticleList() {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles();
  }, []);

  async function fetchAllArticles() {
    try {
      const response = await API.graphql({
        query: syncArticles,
        variables: {
          filter: {
            authorId: {eq: "07bf0e0c-cbd9-4581-b4dd-689b1bf28ca1"}
          }, // You can provide filtering conditions if needed
          limit: 100, // Adjust the limit as needed
        },
      });
      console.log(`Res: ${JSON.stringify(response)}`);

      const allArticles = response.data.syncArticles.items;
      setArticles(allArticles);
    } catch (error) {
      console.error('Error fetching articles:', error);
    }
  }

  return (
    <div>
      <h1>Article List</h1>
      <ul>
        {articles.map(article => (
          <li key={article.id}>
            <h2>{article.name}</h2>
            <p>{article.content}</p>
            <p>Date: {article.date}</p>
            <p>Author ID: {article.authorId}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleList;
