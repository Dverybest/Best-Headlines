import React from 'react';
import Articles from './Articles'
import dotevn from 'dotenv'
dotevn.config()
const Home = () => {
//if purposely remove api key
    return (
        <Articles
            url={"https://newsapi.org/v2/top-headlines?country=ng&apiKey=" + process.env.REACT_APP_API_KEY}
            header={"General Headlines"}
        />
    )
}
export default Home;