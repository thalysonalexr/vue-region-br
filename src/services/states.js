// states.js services for states
import HTTP from './http-common'

/**
 * List all states
 *
 * @returns Promisse
 */
export const listAll = () => HTTP.get('states')

/**
 * Find one state
 *
 * @param {integer} idState
 *
 * @returns Promisse
 */
export const list = (idState) => HTTP.get(`states/${idState}`)

/**
 * List all cities
 *
 * @param {integer} idState
 *
 * @returns Promisse
 */
export const listCities = (idState) => HTTP.get(`states/${idState}/cities`)
