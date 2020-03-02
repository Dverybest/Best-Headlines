import React from 'react';
import Articles from './Articles'
const Home = () => {

    return (
        <Articles
            url={"https://newsapi.org/v2/top-headlines?country=ng&apiKey=6e8866e3bb6a42c98f9508978f00e7ca"}
            header={"General Headlines"}
        />
    )
}
export default Home;