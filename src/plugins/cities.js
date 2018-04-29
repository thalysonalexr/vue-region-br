import * as $citiesService from '../services/cities'

let installed = false

// plugin install
const install = Vue => {
  if (installed) {
    return
  }

  Object.defineProperties(Vue.prototype, {
    $citiesService: {
      get () {
        return $citiesService
      }
    }
  })

  installed = true
}

export default { install }
