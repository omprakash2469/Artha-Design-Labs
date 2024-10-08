"use client";
import { BLOGS_URI } from "@/data/api";
import axios from "axios";
import { useEffect, useState } from "react";

export function getBlogs(limit, slug) {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    axios
      .get(BLOGS_URI, {
        params: {
          limit: limit,
          slug: slug || "",
        },
      })
      .then((res) => setBlogs(res.data?.blogs))
      .catch((error) => console.log(error));
  }, []);
  return blogs;
}
