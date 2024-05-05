"use client";

import Image from "next/image";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Products from "./sections/Products";
import Footer from "./components/Footer";

import { ApolloProvider } from "@apollo/client";
import client from "./lib/apolloClient";

export default function Home() {
  return (
    <ApolloProvider client={client}>
      <Hero />
      <Products />
      <Footer />
    </ApolloProvider>
  );
}
