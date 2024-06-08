<template>
  <div class="popup-overlay" v-if="showPopup">
    <div class="popup">
      <button @click="closePopup">Como usuario</button>
      <button @click="closePopup">Como P.D.S</button>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Popup',
  props: {
    show: Boolean
  },
  data() {
    return {
      showPopup: false
    };
  },
  watch: {
    show(newValue) {
      this.showPopup = newValue;
    }
  },
  methods: {
    closePopup() {
      this.$emit('close');
    }
  }
};
</script>

<style scoped>
.popup-overlay {
  width: 170px;
  height: 200px;
  position: absolute;
  top: 50px;
  right: 30px;
  justify-content: flex-end;
  align-items: flex-start;
  user-select: text;
}

.popup {
  background-color: white;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
}
</style>
