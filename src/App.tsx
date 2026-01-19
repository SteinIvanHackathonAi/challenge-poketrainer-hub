import React from 'react';
import { useApi } from '@/hooks/useApi';
import { fetchPokemonList } from '@/lib/api';
import { PokemonListResponse } from '@/types';
import { Spinner, Card, CardContent, CardHeader, CardTitle, EmptyState, ErrorMessage } from '@/components/ui';

const App: React.FC = () => {
  const { data, isLoading, error, refetch } = useApi<PokemonListResponse>(fetchPokemonList, []);

  if (isLoading) return <Spinner size="lg" />;
  if (error) return <ErrorMessage title="Error" message="Failed to load Pokémon." onRetry={refetch} />;
  if (!data || data.results.length === 0) return <EmptyState title="No Pokémon Found" description="Try adjusting your search criteria." icon={<span>🔍</span>} />;

  return (
    <div className="container mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.results.map((pokemon) => (
          <Card key={pokemon.name}>
            <CardHeader>
              <CardTitle>{pokemon.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>View details...</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
