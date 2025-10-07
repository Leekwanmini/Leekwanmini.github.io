"use client";

import Image from "next/image";
import React from "react";
import { Artist } from "./components/types";
import { artistsData } from "./components/data";
import ArtistCard from "./components/card";
import Navbar from "./components/navbar";
import { useEffect, useState } from "react";
import WelcomeBanner from "./components/welcomeBanner";

//Home page
export default function Home() {
  const [name, setName] = useState("");
  const [greetName, setGreetName] = useState<string>(""); 
  const [error, setError] = useState<string>("");

  useEffect(() => {
    const saved = localStorage.getItem("welcomeName");
    if (saved) {
      setName(saved);
      setGreetName(saved);
    }
  }, []);

  useEffect(() => {
    if (greetName) localStorage.setItem("welcomeName", greetName);
    else localStorage.removeItem("welcomeName");
  }, [greetName]);
//handling submission
  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const trimmed = name.trim();
    if (!trimmed) {
      setError("Please Enter your name");
      setGreetName("");
      return;
    }
    setError("");
    setGreetName(trimmed);
  }
  return (
      <div style={{display: 'flex',  flexWrap: 'wrap', 
        gap: 20,justifyContent: 'center'}}>          
          <main style={{ padding: 20 }}>
              <section className="card">
              {/* This welcomeBanner is from welcomeBanner.tsx*/}
                <WelcomeBanner name={greetName} />
                <form onSubmit={handleSubmit} className="row" style={{ marginTop: 12 }}>
                  <input
                    className="input"
                    placeholder="Please enter your name"
                    aria-label="Your name"
                    autoFocus
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{padding: '10px', margin:'80px 0px 80px 150px', color:'grey'}}
                  />
                  <button type="submit" className="btn btnPrimary" style={{padding: '10px 20px'}}>Submit</button>
                </form>

                {error && <p className="error" role="alert" style={{ marginTop: 8 }}>{error}</p>}
              </section>
            </main>
        </div>
    );
}

