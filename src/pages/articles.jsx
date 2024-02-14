import React, { useEffect, useState } from "react";
import { generateClient } from 'aws-amplify/api';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import ImageSlider from '../components/ImageSlider'; // Assuming ImageSlider component is in the same directory
import * as queries from '../graphql/queries';

const client = generateClient();

function ListArticles() {
    const [articles, setArticles] = useState(null);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const listArticlesRes = await client.graphql({ query: queries.listArticles });
                console.log(listArticlesRes);
                const fetchedArticles = listArticlesRes.data.listArticles.items;
                setArticles(fetchedArticles);

                if (fetchedArticles.length > 0) {
                    const listAssetsRes = await client.graphql({
                        query: queries.listAssets,
                        variables: {
                            filter: {
                                articleId: { eq: fetchedArticles[0].id }
                            }
                        }
                    });
                    console.log('Assets:', listAssetsRes.data.listAssets.items);
                    setAssets(listAssetsRes.data.listAssets.items);
                }
            } catch (error) {
                console.log("Error fetching articles: ", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            <h1>Articles</h1>
            {articles ? (
                <div>
                    {articles.map((article) => (
                        <div key={article.id}>
                            <h2>{article.name}</h2>
                            <ImageSlider images={assets.map(asset => asset.imgKey)} />
                        </div>
                    ))}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </div>
    );
}

function Articles() {
    return (
        <div>
            <ListArticles />
        </div>
    );
}

export default Articles;
