"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

type Section = {
  type: "hero" | "text" | "cards";
  heading?: string;
  body?: string;
  image?: string;
};

type PageData = {
  title: string;
  content: Section[];
};

export default function Home() {
  const [page, setPage] = useState<PageData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchHome = async () => {
      try {
        setLoading(true);
        // Default slug for the root URL is "home"
        const response = await axios.get(`${API_BASE_URL}/pages/home`);
        setPage(response.data);
        setError(null);
      } catch (err: any) {
        if (err.response?.status === 404) {
          setError("Home page not found. Please create a page with slug 'home' in the admin panel.");
        } else {
          setError("Failed to load home page");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchHome();
  }, []);

  if (loading) return <div className="p-20 text-center">Loading...</div>;
  if (error) return <div className="p-20 text-center text-red-500">{error}</div>;
  if (!page) return null;

  return (
    <main>
      <title>{page.title} | CMS Home</title>
      {page.content.map((section, index) => (
        <section key={index} className="py-20 border-b">
           <div className="container mx-auto px-4">
              {section.type === "hero" && (
                <div className="text-center">
                  <h1 className="size-6 text-6xl font-bold mb-6">{section.heading}</h1>
                  <p className="text-xl text-gray-600 max-w-2xl mx-auto">{section.body}</p>
                </div>
              )}

              {section.type === "text" && (
                <div className="max-w-3xl mx-auto">
                  <h2 className="text-3xl font-bold mb-4">{section.heading}</h2>
                  <div className="text-lg leading-relaxed text-gray-700">
                    {section.body}
                  </div>
                </div>
              )}

              {section.type === "cards" && (
                <div>
                   <h2 className="text-3xl font-bold mb-10 text-center">{section.heading}</h2>
                   <div className="grid md:grid-cols-3 gap-8">
                      <div className="p-8 bg-gray-50 rounded-xl">
                        <p className="text-gray-600">{section.body}</p>
                      </div>
                   </div>
                </div>
              )}

              {section.image && (
                <div className="mt-10 flex justify-center">
                   <img src={section.image} alt={section.heading} className="rounded-2xl shadow-xl max-w-full h-auto" />
                </div>
              )}
           </div>
        </section>
      ))}
    </main>
  );
}
