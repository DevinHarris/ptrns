import React from 'react';

const NewsHeader = ({ newsArticles }) => {

    //const { author, content, source, description, title, url, urlToImage, publishedAt } = newsArticles;
    console.log(newsArticles);
    const articles = newsArticles.map((article, index) => {
        return (
            <div className="news-header" key={index} style={{ background: `url(${article.urlToImage}) center center no-repeat fixed`, backgroundSize: 'cover' }}>
                <a href={article.url} target="_blank" rel="noreferrer" className="new-header__link">
                    <h1 className="news-header__title">{article.title}</h1>
                </a>
                <p className="news-header__description">{article.description}}</p>
            </div>
        )
    })

    return (
        <div>
            { articles }
        </div>
    )

}

export default NewsHeader;