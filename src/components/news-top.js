import React from 'react';
import NewsAPI from 'newsapi';
import axios from 'axios';
import ListGroup from 'react-bootstrap/ListGroup'

const NewsTop = (props) => {
    const { query } = props;
    const [newArticles, setNewArtichles] = React.useState([]);
    //console.log("process.env.NEWS_API_KEY",process.env.REACT_APP_NEWS_API_KEY)
    //const newsapi = new NewsAPI(process.env.REACT_APP_NEWS_API_KEY, { corsProxyUrl: 'https://cors-anywhere.herokuapp.com/' });
    // To query top headlines
    axios.get(
        `https://newsapi.org/v2/everything?q=${query || 'crypto'}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&pageSize=10&sortBy=publishedAt`
    ).then((result) => {
        if (result.status == 200) setNewArtichles(result.data.articles)
        // Destructure useful data from response
        // const {
        //     title,
        //     source: { name },
        //     description,
        //     url,
        // } = data.articles[0];
        // console.log(data.articles[0])
    });

    return (
        <div>
            <ListGroup defaultActiveKey="#link1">

                {newArticles && newArticles.map((article) => (
                    <ListGroup.Item action href={article.url} target="_blank">
                        {article.title}
                    </ListGroup.Item>
                ))}
            </ListGroup>

        </div>
    );
}

export default NewsTop;
