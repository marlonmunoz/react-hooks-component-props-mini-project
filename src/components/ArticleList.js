import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const { posts } = props;
    const renderArticles = () => {
        return posts.map((post, index) => (
            <Article key={index} post={post} />
        ));
    }

    return (
        <main>{renderArticles()}</main>
    )
};

export default ArticleList;