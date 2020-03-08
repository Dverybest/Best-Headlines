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
    //if purposely remove api key
    return (
        <Articles
            url={`https://newsapi.org/v2/top-headlines?country=ng&category=${category}&apiKey=`}
            header={`${ capitalizeFirstLetter(category)} Headlines`}
        />
    )
}
export default NewsCategory;