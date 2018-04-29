// regions.js services for regions
import HTTP from './http-common'

/**
 * List all cities
 *
 * @returns Promisse
 */
export const listAll = () => HTTP.get('regions')

/**
 * Find one region
 *
 * @param {integer} idRegion
 *
 * @returns Promisse
 */
export const list = (idRegion) => HTTP.get(`regions/${idRegion}`)

/**
 * List all states by region
 *
 * @param {integer} idRegion
 *
 * @returns Promisse
 */
export const listStates = (idRegion) => HTTP.get(`regions/${idRegion}/states`)

/**
 * List all cities by region
 *
 * @param {integer} idRegion
 *
 * @returns Promisse
 */
export const listCities = (idRegion) => HTTP.get(`regions/${idRegion}/cities`)
