import { BrowserRouter as Outlet} from 'react-router-dom';

function Posts() {
    return (
      <div style={{ padding: 20 }}>
        <h2>Blog</h2>
        {/* render any matching child */}
        <Outlet />
      </div>
    );
}

export default Posts;
