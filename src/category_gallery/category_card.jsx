import { useEffect, useState } from "react";

const CATEGORIES = ["Trending", "Funny", "Sports", "Movies", "Memes"];

const API_KEY = "uBjiL1TsBZMW0cJATR7AHH64nuqj0EqF";

const CategoryGallery = () => {
  const [activeCategory, setActiveCategory] = useState("Trending");
  const [gifs, setGifs] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchGifs = async (category) => {
    setLoading(true);

    const endpoint =
      category === "Trending"
        ? `https://api.giphy.com/v1/gifs/trending?api_key=${API_KEY}&limit=20`
        : `https://api.giphy.com/v1/gifs/search?api_key=${API_KEY}&q=${category}&limit=20`;

    const res = await fetch(endpoint);
    const data = await res.json();
    setGifs(data.data);
    setLoading(false);
  };

  useEffect(() => {
    fetchGifs(activeCategory);
  }, [activeCategory]);

  return (
    <div>
      <div style={{ display: "flex", gap: "10px", marginBottom: "20px" }}>
        {CATEGORIES.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            style={{
              padding: "8px 16px",
              background: activeCategory === cat ? "#000" : "#eee",
              color: activeCategory === cat ? "#fff" : "#000",
              border: "none",
              cursor: "pointer",
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      {loading ? (
        <p style={{ color: "black" }}>Loading...</p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr))",
            gap: "10px",
          }}
        >
          {gifs.map((gif) => (
            <ul>
              <li>
                <img
                  key={gif.id}
                  src={gif.images.fixed_height.url}
                  alt={gif.title}
                />
                <text>{gif.title}</text>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
};

export default CategoryGallery;
