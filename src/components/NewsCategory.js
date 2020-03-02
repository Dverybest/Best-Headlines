import React, {useEffect,useState } from 'react';
import Articles from './Articles'
const NewsCategory = (props) => {
    const [category,setCategory] = useState('');
    useEffect(()=>{
        // setCategory(props.match.params.category);
    },[])
    const capitalizeFirstLetter = (string)=>{
        return string.charAt(0).toUpperCase()+string.slice(1);
    }
    return (
        <Articles
            url={`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=6e8866e3bb6a42c98f9508978f00e7ca`}
            header={`${ capitalizeFirstLetter(category)} Headlines`}
        />
    )
}
export default NewsCategory;