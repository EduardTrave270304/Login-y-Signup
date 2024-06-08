<template>
  <div id="app">
    <toolbar />
    <div class="button-cont">
      <button class="space" >Iniciar sesion</button>
      <button class="color" @click="showPopup = true">Registrase</button>
      <Popup :show="showPopup" @close="showPopup = false" />
    </div>

    <div class="fondo">
      <img src="../assets/publicidad.png" alt="Publicidad" class="imagen">
      <div class="container">
        <div class="section">
          <p class="section-text">Planes personalizados adaptados para ti</p>
          <p class="section-text">Diseñados para complacer al cliente</p>
        </div>
        <div class="section">
          <p class="section-text">Asesorias a tu alcance</p>
          <p class="section-text">Clases con especialistas</p>
        </div>
        <div class="section">
          <p class="section-text">Postulate para personal de seguridad</p>
          <p class="section-text">únete a nuestro equipo</p>
        </div>
      </div>
    </div>
    <footer />
  </div>
</template>

<script>
import toolbar from "../components/Toolbar-component.vue";
import Popup from "../components/popup-component.vue";

export default {
  name: 'Home',
  components: {
    toolbar,
    Popup
  },
  data() {
    return {
      showPopup: false
    };
  }
};
</script>

<style scoped>
.button-cont{
  color: #ffffff;
  padding: 10px 50px 20px 10px;
  position: absolute;
  top: 30px;
  right: 30px;
  justify-content: flex-end;
  align-items: flex-start;
  user-select: text;
}

.imagen{
  margin-left: 265px;
  display: inline-block;

}

.fondo{
  background-color: #11315C;
}

.space{
  margin-right: 20px;
  background-color: #F9A825;
}

.color{
  background-color: #F9A825;
}

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 50px;
  padding: 40px;
}

.section {
  flex: 1;
  text-align: center;
}

.section-text {
  color: #ffffff;
}

</style>
