import type { APIRoute } from "astro"
import { getPokemonList } from '../../../services/pokemon';
import { addPokemon } from "../../../services/pokemon";




export const GET: APIRoute = async (context) => {
  try{
    const pokeList = await getPokemonList();

    return new Response(JSON.stringify({ pokeList }), {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  } catch (error: any) { 
    return new Response(JSON.stringify({ error: error.toString() }), {
      status: 500,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
};


export const POST: APIRoute = async (context) => {
  try{
    const pokemon = await context.request.json();
    await addPokemon(pokemon);
    return new Response(JSON.stringify({pokemon}), {
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }catch (error: any) { 
    return new Response(JSON.stringify({ error: error.toString() }), {
      status: 500,
      headers: {
        'content-type': 'application/json',
        'Access-Control-Allow-Origin': '*',
      }
    });
  }
};