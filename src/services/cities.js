// cities.js services for cities
import HTTP from './http-common'

/**
 * List all cities
 *
 * @returns Promisse
 */
export const listAll = () => HTTP.get('cities')
