import React, { useState, useEffect } from 'react';
import { listArticles } from "../../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';

function Articles() {
  
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const deletedFilter = { _deleted: { ne: true } };
    async function fetchArticles() {
      try {
        const response = await API.graphql(graphqlOperation(listArticles, {
            deletedFilter,
            limit: 10,
        }));
        // if (!response.ok) {
        //   throw new Error(`Network response was not ok ${response}`);
        // }
        
        const data = response.data.listArticles.items[0];
        console.log(data);
        setData(data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
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
      {/* Render the data */}
      <div>{data.name}</div>
      {/* ...other rendering logic */}
    </div>
  );
}

export default Articles;
