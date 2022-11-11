<template>
  <div class="container">
    <div>
      <img src="../assets/Images/icons/House-colors.svg" />
      <p>Inicio</p>
    </div>
    <div>
      <img src="../assets/Images/icons/fire.svg" />
      <p>Tendencias</p>
    </div>
    <div>
      <img src="../assets/Images/icons/hearth.svg" />
      <p>Comentarios</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
};
</script>

<style lang="scss" scoped>
div.container {
  grid-column-start: first;
  grid-column-end: line2;
  grid-row-start: row1-end;
  grid-row-end: last-line;
  display: flex;
  flex-flow: column;
  width: 100%;
  justify-content: start;
  align-content: center;
  gap: 10px;
  padding-top: 30px;
  border-right: 1px solid #d1cfcfd5;
  box-shadow: 0 2px 8px rgba(239, 239, 239, 0.479);
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#1e5799+0,207cca+0,207cca+13,207cca+22,2989d8+44,2989d8+56,7db9e8+100 */
  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,ffffff+100&1+0,0+100;White+to+Transparent */
  background: -moz-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    -45deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#00ffffff',GradientType=1 ); /* IE6-9 fallback on horizontal gradient */
}

div.container > div {
  width: 100%;
  height: 50px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-flow: column;
  font-size: 12px;
}

div.container > div > img {
  width: 32px;
  height: 32px;
}
</style>