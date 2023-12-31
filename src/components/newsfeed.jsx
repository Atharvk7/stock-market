import React from "react";
import { useState, useEffect } from "react";

export default function NewsFeed() {
  const [data, setData] = useState([]);
  const apiKey = "383f50ed1b334ec1bf15eaf88415ab20";

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(
        `https://newsapi.org/v2/everything?q=tesla&from=2023-11-30&sortBy=publishedAt&apiKey=383f50ed1b334ec1bf15eaf88415ab20`
      );
      const result = await res.json();

      setData(result.articles); // Set data to the articles array
      console.log(result)
    };

    fetchData();
  }, []);

  return (
    <div style={{ padding: "2%", width: "95vw", height: "9000vh" }}>
      <h1 style={{ textAlign: "center", color: "white", marginBottom: "20px" }}>News Feed</h1>
      {data && data.length > 0 ? (
        data.map((article) => (

          <div key={article.title} style={{ marginBottom: "5vh", display: "flex", flexDirection: "row", justifyContent: "space-between", backgroundColor: "white", color: "black", borderRadius: "10px" }}>

            <img src={article.urlToImage} alt={article.title} width="300" height="300" style={{ borderTopLeftRadius: "10px", borderBottomLeftRadius: "10px" }} />

            <div style={{ border: "white 3px solid", borderRadius: "10px", padding: "2%" }}>
              <h3>{article.title}</h3>
              <a href={article.url}>Read More</a>
              <p>{article.description}</p>
              <p>Published At: {article.publishedAt}</p>
            </div>

          </div>
        ))
      ) : (
        <div>
          {!data && <p style={{ textAlign: "center" }}>Loading...</p>}
          {data && data.length === 0 && <p style={{ textAlign: "center" }}>No articles found.</p>}
        </div>
      )}
    </div>
  );
}
