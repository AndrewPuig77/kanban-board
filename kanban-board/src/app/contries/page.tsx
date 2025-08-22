"use client";
import CustomApolloProvider from "../providers/ApolloProvider";
import CountriesPage from "./CountriesPage";

export default function Page() {
  return (
    <CustomApolloProvider>
      <CountriesPage />
    </CustomApolloProvider>
  );
}
// ...existing code...
