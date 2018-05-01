<template>
<section id="home" class="container">
  <h1 class="display-3">
    {{ title }}
  </h1>
  <div id="errors" v-if="errors.length">
    <span><strong>Erro na aplicação :(</strong></span>
    <ul v-for="error in errors" :key="error.index">
      <li class="alert alert-danger">{{ error }}</li>
    </ul>
  </div>
  <form>
    <div class="form-group">
      <label for="region">Região</label>
      <select v-model="regionSelected" @change="selectStateAndCity" id="region" class="form-control">
        <option disabled value="">Escolha a região</option>
        <option v-for="region in regions" :key="region.index" :value="region.id">
          {{ region.name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="state">Estado</label>
      <select v-model="stateSelected" @change="selectCity" id="state" class="form-control" disabled>
        <option disabled value="">Escolha o estado</option>
        <option v-for="state in states" :key="state.index" :value="state.id">
          {{ state.name }}
        </option>
      </select>
    </div>
    <div class="form-group">
      <label for="citie">Cidade</label>
      <select v-model="citieSelected" id="citie" class="form-control" disabled>
        <option disabled value="">Escolha a cidade</option>
        <option v-for="citie in cities" :key="citie.index" :value="citie.id">
          {{ citie.name }}
        </option>
      </select>
    </div>
  </form>
</section>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      title: 'Selecione sua localidade',
      regionSelected: '',
      stateSelected: '',
      citieSelected: '',
      regions: [],
      states: [],
      cities: [],
      errors: []
    }
  },
  methods: {
    selectStateAndCity: function () {
      this.$regionsService.listStates(this.regionSelected)
        .then(response => {
          if (response.status === 200) {
            this.states = response.data
          }
        }).catch(error => {
          switch (error.response.status) {
            case 404:
              this.errors.push('Nenhum estado cadastrado na base de dados.')
              break
            case 500:
              this.errors.push('Erro ao carregar estados. Contate o administrador.')
              break
          }
        })
      this.$regionsService.listCities(this.regionSelected)
        .then(response => {
          if (response.status === 200) {
            this.cities = response.data
          }
        }).catch(error => {
          switch (error.response.status) {
            case 404:
              this.errors.push('Nenhuma cidade cadastrado na base de dados.')
              break
            case 500:
              this.errors.push('Erro ao carregar cidades. Contate o administrador.')
              break
          }
        })
      document.getElementById('state').removeAttribute('disabled')
    },
    selectCity: function () {
      this.$statesService.listCities(this.stateSelected)
        .then(response => {
          if (response.status === 200) {
            this.cities = response.data
          }
        }).catch(error => {
          switch (error.response.status) {
            case 404:
              this.errors.push('Nenhuma cidade cadastrada na base de dados.')
              break
            case 500:
              this.errors.push('Erro ao carregar cidades. Contate o administrador.')
              break
          }
        })
      document.getElementById('citie').removeAttribute('disabled')
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.$regionsService.listAll()
        .then(response => {
          if (response.status === 200) {
            this.regions = response.data
          }
        }).catch(error => {
          switch (error.response.status) {
            case 404:
              this.errors.push('Nenhuma região cadastrada na base de dados.')
              break
            case 500:
              this.errors.push('Erro ao carregar regiões. Contate o administrador.')
              break
          }
        })
      this.$statesService.listAll()
        .then(response => {
          if (response.status === 200) {
            this.states = response.data
          }
        }).catch(error => {
          switch (error.response.status) {
            case 404:
              this.errors.push('Nenhum estado cadastrado na base de dados.')
              break
            case 500:
              this.errors.push('Erro ao carregar estados. Contate o administrador.')
              break
          }
        })
      this.$citiesService.listAll()
        .then(response => {
          if (response.status === 200) {
            this.cities = response.data
          }
        }).catch(error => {
          switch (error.response.status) {
            case 404:
              this.errors.push('Nenhuma cidade cadastrada na base de dados.')
              break
            case 500:
              this.errors.push('Erro ao carregar cidades. Contate o administrador.')
              break
          }
        })
    })
  }
}
</script>

<style scoped>

h1{ margin: 2%; }

</style>
