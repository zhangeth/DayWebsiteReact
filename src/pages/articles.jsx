import React, { useEffect, useState } from "react";
import { generateClient } from 'aws-amplify/api';
import { StorageImage } from '@aws-amplify/ui-react-storage';
import ImageSlider from '../components/ImageSlider'; // Assuming ImageSlider component is in the same directory
import * as queries from '../graphql/queries';
import HomeHero from "../components/homeComponents/homeHero";

const client = generateClient();

// now just need to figure out front end part
function ListArticles() {
    const [articles, setArticles] = useState(null);
    const [assets, setAssets] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const listArticlesRes = await client.graphql({ query: queries.listArticles });
                const articleItems = listArticlesRes.data.listArticles.items;
                setArticles(articleItems);

                if (articleItems.length > 0) {
                    let articleObj = {};
                    for (let articleIdx = 0; articleIdx < articleItems.length; articleIdx++)
                    {
                        let suffix = '_' + articleItems[articleIdx].id + articleItems[articleIdx].imageExtension;
                        let length = articleItems[articleIdx].numImages;
                        let articleImageArr = new Array(length + (3 - length % 3) % 3);
                        for (let i = 1; i <= articleItems[articleIdx].numImages; i++)
                        {
                            articleImageArr[i - 1] = i.toString() + suffix;
                        }

                        articleObj[articleItems[articleIdx].id] = articleImageArr;
                    }
                    setAssets(articleObj);
                }
            } catch (error) {
                console.log("Error fetching articles: ", error);
            }
        };

        fetchArticles();
    }, []);

    return (
        <div>
            {articles ? (
                <div>
                    {articles.map((article) => (
                        <div key={article.id}>
                            <h2 className="articleHeading">{article.name}</h2>
                            <ImageSlider images={assets[article.id]} />
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
