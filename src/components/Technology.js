import React from 'react';
import Articles from './Articles'
const Technology = () => {
   
    return (
        <Articles
            url={"https://newsapi.org/v2/top-headlines?country=ng&category=technology&apiKey=" + process.env.REACT_APP_API_KEY}
            header={"Technology Headlines"}
        />
    )
}
export default Technology;
