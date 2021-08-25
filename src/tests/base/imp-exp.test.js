import { getHeroById, getHeroesByOwner } from "../../base/imp-exp";
import heroes from "../../data/heroes";

describe('Testing - Functions return Heroes ', ()=>{
    test('return a hero', ()=>{
        let id = 1;
        let hero = getHeroById(id);
        let heroData = heroes.find(h=> h.id === id);
        expect(hero).toEqual(heroData);
    } )
    test('return undefined if hero is not found', ()=>{
        let id = 20;
        let hero = getHeroById(id);
        expect(hero).toBe(undefined);
    } )
    test('return an array with DC Heroes', ()=>{
        let owner = 'DC';
        let heroesFiltered = getHeroesByOwner(owner);
        let heroesData = heroes.filter(h => h.owner === owner);
        expect(heroesFiltered).toEqual(heroesData);

    } )
    test('return an array with marvel Heroes and lenght = 2', ()=>{
        let owner = 'Marvel';
        let heroesFiltered = getHeroesByOwner(owner);
        expect(heroesFiltered.length).toBe(2);
    } )
} )
