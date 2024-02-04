import { Amplify, graphqlOperation } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import * as queries from '../graphql/queries';
import React, { useEffect, useState } from "react";

const client = generateClient();

let articleIds = {};
function ListArticles()
{
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const fetchArticles = async () => {
            try
            {
                const listArticlesRes = await client.graphql({query: queries.listArticles});
                console.log(listArticlesRes);
                articleIds = listArticlesRes.data.listArticles.items;
                setArticles(listArticlesRes.data.listArticles.items);
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
            {articles ? (
                
            // Render the data once it's available
            <div>
                {articles[0].name}
            </div>
            ) : (
                // Render a loading indicator while data is being fetched
                <div>Loading...</div>
            )}
        </div>
    );
}

function assetsAfterArticles()
{
    if (Object.keys(articleIds).length !== 0)
    {
        return ListAssets(articleIds[0].id);
    }
    else {
        return (
            <div>
                <p>Booty Cheeks</p>
            </div>
        );
    }
}

function ListAssets(articleId)
{
    // trying to do too much, need to understand more about hooks
    const [assets, setAssets] = useState(null);

    useEffect(() => {
        const fetchAssets = async (articleId) => {
            try{
                const listAssetsRes = await client.graphql({
                    query: queries.listAssets,
                    variables: {
                        filter: {
                            articleId: { eq: articleId }
                        }
                    }
                });
                console.log('AssetRes: ', listAssetsRes);

                setAssets(listAssetsRes.data.listAssets.items);
            }
            catch (error)
            {
                console.log("Error fetching assets: ", error);
            }
        }

        fetchAssets();
    }, [articleId]);

    return (
        <div>
            <h1>Assets</h1>
            {assets ? (
            // Render the data once it's available
            <div>
                {assets[0].imgKey}
            </div>
            ) : (
                // Render a loading indicator while data is being fetched
                <div>Loading...</div>
            )}
        </div>
    );
}

function Articles() {
    return(
        <div>
            {ListArticles()}
        </div>
    )
}
export default Articles;