<template>
<section id="states" class="container">
  <h1 class="title">
    {{ msg }}
  </h1>
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th>Código</th>
        <th>Sigla</th>
        <th>Descrição</th>
        <th>Região</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="state in states" :key="state.index">
        <td>{{ state.id }}</td>
        <td>{{ state.initials }}</td>
        <td>{{ state.name }}</td>
        <td>{{ state.region }}</td>
      </tr>
    </tbody>
  </table>
</section>
</template>

<script>
export default {
  name: 'States',
  data () {
    return {
      msg: 'Estados do Brasil',
      states: [],
      regions: []
    }
  },
  mounted () {
    this.$nextTick(function () {
      this.$statesService.listAll()
        .then(response => {
          if (response.status === 200) {
            let states = response.data
            this.$regionsService.listAll()
              .then(response => {
                this.regions = response.data
                for (let idxState in states) {
                  for (let idxRegion in this.regions) {
                    if (states[idxState].id_region === this.regions[idxRegion].id) {
                      states[idxState].region = this.regions[idxRegion].name
                      break
                    }
                  }
                }
                this.states = states
              }).catch(error => {
                console.log('error in load regions. ' + error.response)
              })
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

#states{
  padding-top: 3%;
  padding-bottom: 3%;
}
</style>
