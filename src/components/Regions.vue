<template>
<section id="regions" class="container">
  <h1 class="title">
    {{ msg }}
  </h1>
  <table class="table table-striped table-hover">
    <thead class="thead-dark">
      <tr>
        <th>Código</th>
        <th>Sigla</th>
        <th>Descrição</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="region in regions" :key="region.index">
        <td>{{ region.id }}</td>
        <td>{{ region.initials }}</td>
        <td>{{ region.name }}</td>
      </tr>
    </tbody>
  </table>
</section>
</template>

<script>
export default {
  name: 'Regions',
  data () {
    return {
      msg: 'Regiões do Brasil',
      regions: []
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

#regions{
  padding-top: 3%;
  padding-bottom: 3%;
}
</style>
