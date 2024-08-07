import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const { posts } = props;
    const renderArticles = () => {
        posts.map((post, index) => (
            <Article key={index} post={post} />
        ));
    }

    return (
        <main>
            
        </main>
    )
};

export default ArticleList;