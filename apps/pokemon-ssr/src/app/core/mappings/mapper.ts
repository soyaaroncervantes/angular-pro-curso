import { classes } from '@automapper/classes';
import { addProfile, createMapper } from '@automapper/core';
import { pokemonProfile } from '../../pokemons/pokemon.mapper';

export const mapper = createMapper({
  strategyInitializer: classes()
})

addProfile(mapper, pokemonProfile)
