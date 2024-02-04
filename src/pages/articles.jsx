import { Amplify, graphqlOperation } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import React, { useEffect, useState } from "react";

const client = generateClient();

function ListArticles()
{
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try
            {
                const listArticlesRes = await client.graphql({query: queries.listArticles});
                console.log(listArticlesRes);

                setArticles(listArticlesRes.data.items);
            }
            catch (error)
            {
                console.log("Error fetching articles: ", error);
            }
        }

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Articles</h1>
        </div>
    );
}
function Articles() {
    return(
        <div>{ListArticles()}</div>
    )
}
export default Articles;