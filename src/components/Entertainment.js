import React from 'react';
import Articles from './Articles'
const Entertainment = () => {
//if purposely remove api key
    return (
        <Articles
            url={"https://newsapi.org/v2/top-headlines?country=ng&category=entertainment&apiKey=" + process.env.REACT_APP_API_KEY}
            header={"Entertainment Headlines"}
        />
    )
}
export default Entertainment;
