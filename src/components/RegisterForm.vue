<template>
  <div>
    <form action="#">
      <h3>Registro estación Platzi</h3>
      <small>Nombre</small>
      <input type="text" />
      <small>Apellido</small>
      <input type="text" />
      <small>Cargo</small>
      <input type="text" />
      <button type="submit">Enviar</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "RegisterForm",
};
</script>
<style lang="scss" scoped>
$form-general-color: #ff9300;

h3 {
  color: #00bfd6;
}

div,
form {
  display: flex;
  flex-flow: column;
}

small {
  color: $form-general-color;
}

input {
  color: #212121;
  outline: 0;
  border-width: 0 0 2px;
  border-color: $form-general-color;
  align-self: left;
}

button {
  display: flex;
  align-items: center;
  align-self: end;
  justify-content: center;
  width: 80px;
  height: 40px;
  margin: 20px 0px 20px 20px;
  border: none;
  background-color: #00bfd6;
  font-family: "Roboto", sans-serif;
  font-weight: bold;
  color: white;
  border-radius: 2px;
  box-shadow: 1px 1px #9090909e;
}
</style>