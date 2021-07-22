import { request } from "./index"

const BASE_URL = 'https://dog.ceo/api/'

export function getBreeds() {
  return request(`${BASE_URL}breeds/list/all`) 
}

export  function getImagesByBreed(breed: string) {
  const [mainBreed, subBreed] = breed.split(': ')
  return request(`${BASE_URL}breed/${mainBreed}${subBreed ? '/' : ''}${subBreed ? subBreed : ''}/images/random/5`)
}