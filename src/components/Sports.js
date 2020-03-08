import React from 'react';
import Articles from './Articles'
const Sports = () => {
//if purposely remove api key
    return (
        <Articles
            url={"https://newsapi.org/v2/top-headlines?country=ng&category=sports&apiKey="}
            header={"Sports Headlines"}
        />
    )
}
export default Sports;
