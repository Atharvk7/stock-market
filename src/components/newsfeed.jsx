import React from "react";
import { useState, useEffect } from "react";

export default function NewsFeed() {
  const [data, setData] = useState([]);
  const apiKey = "383f50ed1b334ec1bf15eaf88415ab20";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-10-26&sortBy=publishedAt&apiKey=${apiKey}`
      );
      const result = await res.json();
      const englishArticles = result.articles.filter((article) => article.language === "en");
      setData(englishArticles);
      console.log(data);
    };

    fetchData();
  }, []);

  return (
    <div style={{padding:"2%",width:"100vw"}}>
      <h2 style={{textAlign:"center"}}>News Feed</h2>
      {data.map((article) => (
        <div  key={article.title} style={{padding:"2%",marginBottom:"10vh"}}>
          <div>
            <img src={article.urlToImage} alt={article.title} width="200" height="200" />
          </div>
          <div style={{border:"white 3px solid"}}>
            <h3>{article.title}</h3>
            <a href={article.url}>Read More</a>
            <p>{article.description}</p>
            <p>Published At: {article.publishedAt}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
