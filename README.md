# PokéTrainer Hub

## Descripción
PokéTrainer Hub es una plataforma social para entrenadores Pokémon donde cada usuario puede crear su perfil de entrenador, registrar su colección de Pokémon y explorar las colecciones de otros entrenadores de todo el mundo.

## Features a Implementar
- [ ] Mostrar un spinner de carga (10pts)
- [ ] Implementar un mensaje de 'sin resultados' (10pts)
- [ ] Listar pokemones con diseño de cards (25pts)
- [ ] Crear un buscador por nombre de Pokémon (25pts)
- [ ] Ver detalle de un Pokémon (25pts)
- [ ] Filtrar pokemones por tipo (20pts)
- [ ] Sistema de favoritos con localStorage (40pts)

## Setup Rápido
```bash
npm install
npm run dev
```

## Endpoints de la API
- `GET /pokemon`: Lista de pokemones
  ```json
  {
    "count": 1118,
    "results": [
      {
        "name": "bulbasaur",
        "url": "https://pokeapi.co/api/v2/pokemon/1/"
      }
    ]
  }
  ```
- `GET /pokemon/{id}`: Detalle de un pokemon
  ```json
  {
    "id": 1,
    "name": "bulbasaur",
    "types": [
      {
        "type": {
          "name": "grass"
        }
      }
    ]
  }
  ```
- `GET /type`: Tipos de pokemon
- `GET /ability`: Habilidades

## Criterios de Evaluación
- Correcta implementación de la funcionalidad
- Manejo adecuado de estados de carga y error
- Uso eficiente de la API
- Código limpio y bien estructurado
