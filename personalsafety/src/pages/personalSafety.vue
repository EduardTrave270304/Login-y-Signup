

<script>
import Toolbar from "../components/Toolbar-component.vue";

export default {
  components: {Toolbar},
  data() {
    return {
      guards: []
    };
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await fetch('https://my-json-server.typicode.com/rivacortez/personsafe/personalsafety');
        const data = await response.json();
        this.guards = data;
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
  }
};
</script>

<template>
  <toolbar></toolbar>
  <div class="guard-grid">
    <div class="guard-card" v-for="guard in guards" :key="guard.nombre">
      <img class="guard-photo" :src="guard.foto" alt="Foto de {{ guard.nombre }}" />
      <h2 class="guard-name">{{ guard.nombre }}</h2>
      <p class="guard-district">{{ guard.distrito }}</p>
      <p class="guard-age">Edad: {{ guard.edad }}</p>
      <p class="guard-sex">Sexo: {{ guard.sexo }}</p>
      <p class="guard-experience">Experiencia: {{ guard.experiencia }}</p>
      <p class="guard-availability">Disponibilidad: {{ guard.disponibilidad }}</p>
      <button class="guard-button">Contratar</button>
      <button class="guard-button">Contactar</button>
    </div>
  </div>
</template>
<style >
.guard-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 20px;
  background-color: #11315C;
}

.guard-card {
  background-color: #f8f8f8;
  border-radius: 10px;
  width: 300px;
  margin: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.guard-photo {
  width: 200px;
  height:200px;
}

.guard-button {
  background-color: #F9A825;
  color: white;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  border-radius: 5px;
}
</style>
