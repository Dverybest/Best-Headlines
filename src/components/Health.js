import React from 'react';
import Articles from './Articles'
const Health = () => {
//if purposely remove api key
    return (
        <Articles
            url={"https://newsapi.org/v2/top-headlines?country=ng&category=health&apiKey="}
            header={"Health Headlines"}
        />
    )
}
export default Health;
