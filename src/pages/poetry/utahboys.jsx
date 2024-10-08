import ErrorBoundary from "../errorboundary";

function Utahboys(){
    throw new Response("This poem is no longer available on our website, sorry!", {status: 410});
    return(
        <>
        <ErrorBoundary />
        </>
    );
}

export default Utahboys;