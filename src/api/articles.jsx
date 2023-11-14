import { listArticles } from "../graphql/queries";
import { API, graphqlOperation } from 'aws-amplify';


export async function getArticles(numArticles) {
    try 
    {
        const deletedFilter = { _deleted: { ne: true } };
        const result = await API.graphql(graphqlOperation(listArticles, {
            deletedFilter,
            limit: numArticles,
        }));
    
        return result.data.listArticles.items;
    }
    catch (error)
    {
        console.error('Error getting articles:', error);
    }

}