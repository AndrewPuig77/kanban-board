"use client";
import CustomApolloProvider from "../providers/ApolloProvider";
import CountriesPage from "./page";

export default function PageWrapper() {
  return (
    <CustomApolloProvider>
      <CountriesPage />
    </CustomApolloProvider>
  );
}
