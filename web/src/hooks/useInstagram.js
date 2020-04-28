import { useState, useEffect } from "react"

export default function useInstagram() {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    fetch(`/api/instagram.js`)
      .then(res => res.json())
      .then(data => {
        setPosts(data.body);
      });
  }, []);
  return posts;
}