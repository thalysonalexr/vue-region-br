import * as $regionsService from '../services/regions'

let installed = false

// plugin install
const install = Vue => {
  if (installed) {
    return
  }

  Object.defineProperties(Vue.prototype, {
    $regionsService: {
      get () {
        return $regionsService
      }
    }
  })

  installed = true
}

export default { install }
