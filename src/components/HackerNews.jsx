import React, { useEffect } from "react";
import { useNewsStore } from "../store/news-store";

const HackerNews = () => {
  const { fetch, hits, loading, errorMessage } = useNewsStore((state) => state);
  useEffect(() => {
    fetch();
  }, []);
  return (
    <div className="p-5 bg-white rounded-lg max-w-lg mx-auto">
      {loading && (
        <div className="w-10 h-10 border-4 border-blue-500 rounded-full animate-spin border-t-transparent mx-auto"></div>
      )}
      <div className="flex flex-wrap gap-5">
        {!loading &&
          hits.length > 0 &&
          hits.map((item) => (
            <div
              className="p-3 rounded-xl border border-slate-100"
              key={item.title}
            >
              {item.title}
            </div>
          ))}
      </div>
    </div>
  );
};

export default HackerNews;
