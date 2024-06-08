<template>
  <toolbar/>
  <div class="container">

    <h1 class="title">Servicios Activados</h1>

    <div class="card1">
      <img class="rounded-image" src="../assets/policeactiveService.png" alt="Image1">
      <p class="name"> Renzo Valdiviezo</p>
      <button class="details-button">Ver detalles</button> <!-- Agrega el botón aquí -->
    </div>
    <div class="card2">
      <img class="rounded-image" src="../assets/imgactiveservice.png" alt="Image2">
      <p class="name"> Alvaro Perez</p>
      <button class="details-button">Ver detalles</button> <!-- Agrega el botón aquí -->
    </div>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  grid-gap: 50px;
  padding: 20px;
  background-color: #11315C;
}

.card1, .card2 {
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 2% 20% 5% 0;
  background-color: white;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  width: 30%;
  justify-content: center;
  align-items: center;
}
.title {
  color: white;
  text-align: center;
  width: 100%;
  font-size: 55px;
  font-family: 'Poppins', sans-serif;
}

.rounded-image {
  border-radius: 50%;
  width: 90px;
  height: 90px;
}

.details-button {
  background-color: #F9A825;
  color: black;
  border: none;
  padding: 10px 20px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 90px 4px 50px; /* Aumenta el margen izquierdo a 50px */
  cursor: pointer;
  border-radius: 5px;
}
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

.name {
  margin-top: 10px;
  font-size: 25px;
  font-family: 'Poppins', sans-serif;
  margin-left: 20px;
}
</style>
<script >
import toolbar from "../components/Toolbar-component.vue";

export default {
  name: 'activeService',
  components: {
    toolbar
  }
}
</script>
