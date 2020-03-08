import React from 'react';
import Articles from './Articles'
const Home = () => {
//if purposely remove api key
    return (
        <Articles
            url={"https://newsapi.org/v2/top-headlines?country=ng&apiKey="}
            header={"General Headlines"}
        />
    )
}
export default Home;