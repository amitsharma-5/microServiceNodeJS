import React from "react";
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
    return (
        <div className='container'>
            <h1>Postlist</h1>
            <PostCreate />
            <hr />
            <h2>Posts</h2>
            <PostList />
        </div>
    );
};
export default App;
