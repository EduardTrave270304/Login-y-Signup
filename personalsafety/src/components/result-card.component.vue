<template>
  <div class="result-card">
    <div class="avatar">
      <img :src="result.imagen" :alt="`wow`">
    </div>
    <div class="details">
      <p><strong>Modelo:</strong> {{ result.modelo }}</p>
      <p><strong>Marca:</strong> {{ result.marca }}</p>
    </div>
    <div class="clickinfo"> <button>Ver mas</button></div>
  </div>
</template>

<script>
export default {
  props: {
    result: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.result-card {
  margin-top: 10px;
}

.avatar {
  margin-right: 15px;
}

.clickinfo{
  background: orange;
  padding: 10px;
  border-radius: 5px;
  height: 30px;
  width: 180px;
}

.clickinfo button{
  display: flex;
  width: 100%;
  height: 100%;
  background: orange;
  border-color: orange;
}


.avatar img {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin: auto  ;
}

.details {
  flex: 1;
}

.details h2 {
  margin-top: 0;
}



.result-card {
  background: white;
  border-radius: 5px;
  padding: 0;
  width: 200px;
  margin-bottom: 20px;
  margin-left: 80px;
  margin-right: 80px;
  align-content: center;
}

</style>
