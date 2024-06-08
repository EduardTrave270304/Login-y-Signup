<template>
  <toolbar />
  <div id="app" class="appbackground">

    <h1 class="equipseguridad">Equipos de seguridad</h1>
    <div class="winners">
      <ResultCard v-for="(result, index) in results" :key="index" :result="result" />
    </div>
    <FooterContent />
  </div>
</template>

<script>
import toolbar from "../components/Toolbar-component.vue";
import ResultCard from "../components/result-card.component.vue";
import FooterContent from "../components/footer-content.component.vue";
import ApiService from "../services/result-api.service.js";
export default {
  name: 'pageEquipos',
  components: {
    toolbar,
    ResultCard,
    FooterContent
  },
  data() {
    return {
      results: [],
      loading: true,
      error: null
    };
  },
  async created() {
    try {
      this.results = await ApiService.getEquipos();
      this.loading = false;
    } catch (error) {
      console.error('Error fetching results:', error);
      this.error = 'Error fetching results. Please try again later.';
    }
  }
}


</script>

<style scoped>

.equipseguridad {
  margin-left: 10%;
  color: white;
}

.winners {
  width: 85%;
  display: flex;
  flex-wrap: wrap;
  border-color: #11315C;
  margin-left: 10%;
}

.appbackground{
  background: #11315C;
}

</style>
