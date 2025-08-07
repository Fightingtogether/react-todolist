
'use client'
import Header from "@/components/Header";
import List from "@/components/List";
import Footer from "@/components/Footer";
import { useState } from "react";
export default function Home() {
  const todos = useState([
    {
      id: 1,
      name: "任务1",
      done: false
    },
    {
      id: 2,
      name: "任务2",
      done: true
    }
  ]);
  return (
    <div className="app-wrap">
      <Header />
      <List  />
      <Footer />
    </div>
  );
}
