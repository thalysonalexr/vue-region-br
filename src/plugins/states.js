import * as $statesService from '../services/states'

let installed = false

// plugin install
const install = Vue => {
  if (installed) {
    return
  }

  Object.defineProperties(Vue.prototype, {
    $statesService: {
      get () {
        return $statesService
      }
    }
  })

  installed = true
}

export default { install }
