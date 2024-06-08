<template>
  <header class="toolbar">
    <div class="tituloybarra">
      <h1 class="toolbar-title">Guardian IQ</h1>
      <div class="search-bar">
        <input type="text" placeholder="Buscar...">
        <button>Buscar</button>
      </div>
    </div>
  </header>
  <div class="toolbar2">
    <div class="button-container">
      <button @click="navigateTo('/')">Home</button>
      <button @click="navigateTo('/personalSafety')">Contratar personal</button>
      <button @click="navigateTo('/activeService')">Servicios activados</button>
      <button @click="navigateTo('/pageTeams')">Equipos</button>
      <button @click="navigateTo('/Login')">Contacto</button>

    </div>
  </div>
</template>


<script>
export default {
  name: 'toolbar',
  methods: {
    navigateTo(routePath) {
      this.$router.push(routePath);
    }
  }
};
</script>


<style scoped>
.toolbar {
  background: #11315C;
  padding: 0;
  height: 80px;
}

.tituloybarra {
  display: flex;
  height: 60%;
  align-items: center;

}

.toolbar-title {
  text-align: left;
  margin-left: 60px;
  margin-top: 30px;
  color: white;
}

.toolbar2 {
  background: #8DA9C4;
  padding: 0.3%;
}

.toolbar2 p {
  margin-left: 20%;
  color: white;
}

.button-container button{
  background: #8da9c4;
  color: #ffffff;
  margin: 20px;
  padding: 10px 20px 20px;
  transition: background 0.3s ease; /* Add transition for smooth color change */
}

.button-container button:hover {
  background: #F9A825; /* Change background color on hover */
}
.search-bar {
  justify-content: center;
  margin-left: auto;
  margin-right: auto;
  align-items: center;
  margin-top: 30px;
}
</style>
