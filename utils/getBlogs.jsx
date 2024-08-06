"use client";
import { BLOGS_URI } from "@/data/api";
import { useEffect, useState } from "react";

export function getBlogs(limit) {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch(`${BLOGS_URI}?limit=${limit}`)
      .then((res) => res.json())
      .then((data) => setBlogs(data?.blogs))
      .catch((error) => console.log(error));
  }, []);
  return blogs;
}
