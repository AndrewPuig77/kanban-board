import { useQuery, gql } from "@apollo/client";
import { Button } from "@/components/ui/button";
import type { GetCountriesQuery } from "@/graphql/generated-types";

const GET_COUNTRIES = gql`
  query GetCountries {
    countries {
      code
      name
    }
  }
`;

export default function CountriesPage() {
  const { data, loading, error, refetch } = useQuery<GetCountriesQuery>(GET_COUNTRIES);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Countries</h1>
      <Button onClick={() => refetch()}>Refetch</Button>
      <ul className="mt-4 space-y-2">
        {data?.countries?.map((country) => (
          <li key={country.code} className="border p-2 rounded">
            <span className="font-semibold">{country.name}</span> ({country.code})
          </li>
        ))}
      </ul>
    </div>
  );
}
