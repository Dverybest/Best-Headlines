import React, { useEffect, useState } from 'react';
import axios from 'axios';
const Articles = ({url,header}) => {

    useEffect(() => {
        fectchData();
    }, [])

    const [articles, setArticles] = useState([]);
    const [isLoading,setIsLoading] = useState(true);
    const fectchData = () => {
        axios.get(url)
            .then(res => {
                //console.log('respones', res.data)
                setArticles(res.data.articles)
            })
            .catch(err => {
                console.log(err)
            })
            .finally(()=>{
                setIsLoading(false)
            })
    }

    const articlesList = articles.length!==0 ? (
        articles.map((article, index) => {
            return (
                <div className="post card" key={index}>
                    {/* <img src={Pokeball} alt="A pokaball" /> */}
                    <div className="card-body row align-items-center">
                        {/* <Link to={`/${index}`}> */}
                        <div className="col-sm-3 justify-content-center align-items-center">
                            <img src={article.urlToImage} className="rounded" alt="news"/>
                            </div>
                        <div className="col-sm-9">
                            <a target='blank' href={article.url}><h5 className="card-title">{article.title}</h5></a>
                            <p className="card-text">{article.description}</p>
                            <p>{`${new Date(article.publishedAt)}`}</p>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
        <div><p>No Headlines yet</p></div>
    )

    return (
        <div >
            <h2 className="text-center articles">{header}</h2>
            {
                isLoading?(
                    <div className="container h-100">
                        <div className="row h-100 align-items-center justify-content-center">

                        <div className="spinner-border text-primary"></div>
                        </div>
                    </div>
                ):(

                    articlesList
                )
            }
        </div>
    )
}
export default Articles;