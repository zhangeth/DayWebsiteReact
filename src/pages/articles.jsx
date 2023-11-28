import { API, graphqlOperation } from 'aws-amplify';
import { useEffect, useState} from 'react';
import { listArticles, assetsByArticleId } from '../graphql/queries';
import { StorageImage } from '@aws-amplify/ui-react-storage';

const Articles = () => {
    // assets will be keyed via the articleId
    const [loading, setLoading] = useState(true);
    const [assets, setAssets] = useState(null);
    

    useEffect (() => {
        async function fetchAssets(articles)
        {
            try {
                const deletedFilter = { _deleted: { ne: true } };

                let articleData = await API.graphql(
                    graphqlOperation(listArticles, {
                      deletedFilter,
                      limit: 10,
                    })
                );
                
                // for (const article of articles)
                // {
                    const assets = await API.graphql(
                        graphqlOperation(assetsByArticleId, {
                            articleId: articleData.data.listArticles.items[0].id,
                            deletedFilter,
                            limit: 10,
                        }
                    ));
                    setAssets(assets.data.assetsByArticleId.items[0].imgKey);
                    console.log(assets);
                //}
            }
            catch (error)
            {
                console.error('Error fetching assets:', error);
                setLoading(false);
            }
        }
        fetchAssets();
    }, []);
    
    // useEffect kicks in while the loading component displays

    if (loading)
    {
        return <div><h2>Loading</h2></div>;
    }
    else
    {
        return <StorageImage alt="cat" imgKey={assets} accessLevel="guest" />;
    }
    
}

export default Articles;