<template>
<section id="cities" class="container">
  <h1 class="title">
    {{ msg }}
  </h1>
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th>Código</th>
        <th>Descrição</th>
        <th>Estado</th>
        <th>Região</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="citie in cities" :key="citie.index">
        <td>{{ citie.id }}</td>
        <td>{{ citie.name }}</td>
        <td>{{ citie.state }}</td>
        <td>{{ citie.region }}</td>
      </tr>
    </tbody>
  </table>
</section>
</template>

<script>
export default {
  name: 'Cities',
  data () {
    return {
      msg: 'Cidades do Brasil',
      cities: [],
      states: [],
      regions: []
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.$citiesService.listAll()
        .then(response => {
          if (response.status === 200) {
            let cities = response.data
            this.$statesService.listAll()
              .then(response => {
                this.states = response.data
                this.$regionsService.listAll()
                  .then(response => {
                    this.regions = response.data
                    for (let idxState in this.states) {
                      for (let idxRegion in this.regions) {
                        if (this.states[idxState].id_region === this.regions[idxRegion].id) {
                          this.states[idxState].region = this.regions[idxRegion].name
                          break
                        }
                      }
                    }
                    for (let idxCitie in cities) {
                      for (let idxState in this.states) {
                        if (cities[idxCitie].id_state === this.states[idxState].id) {
                          cities[idxCitie].state = this.states[idxState].name
                          cities[idxCitie].region = this.states[idxState].region
                          break
                        }
                      }
                    }
                    this.cities = cities
                  }).catch(error => {
                    console.log('error in load regions. ' + error.response)
                  })
              }).catch(error => {
                console.log(error.response)
              })
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

<style>
@import url('https://fonts.googleapis.com/css?family=Merriweather+Sans');
.title{
  font-size: 36px;
  font-family: 'Merriweather Sans', sans-serif!important;
}

#cities{
  padding-top: 3%;
  padding-bottom: 3%;
}
</style>
