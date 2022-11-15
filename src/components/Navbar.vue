<template>
  <div class="main">
    <div class="box-language">
      <div @click="selectLang('en')">
        <img src="../assets/Images/icons/American-flag.png"/>
      </div>
      <div @click="selectLang('es')">
        <img src="../assets/Images/icons/Chile-flag.png"/>
      </div>
      <p>{{ $t('selectLang')}}</p>
    </div>
    <div>
      <router-link :to="{ name: 'about' }"> {{ $t('about') }} </router-link>
    </div>
    <div>
      <img src="../assets/Images/icons/user.jpg" />
      <p>Loreto Fernandez</p>
      <img class="arrow" src="../assets/Images/icons/arrow-down.png" />
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Navbar",
  methods: {
    selectLang(lang){
      this.$i18n.locale = lang;
    }
  }
};
</script>

<style scoped>
div.main {
  display: flex;
  width: 100%;
  height: 3em;
}

div.main > div {
  width: 33.3%;
  height: 100%;
  display: flex;
  align-items: center;
}

div.main > div:first-child {
  justify-content: start;
  padding-left: 6%;
  color: whitesmoke;
}

div.main > div:nth-child(2) {
  justify-content: center;
}

div.main > div:nth-child(3) {
  gap: 10px;
  justify-content: end;
  padding-right: 6%;
  color: whitesmoke;
}

div.main > div:nth-child(3) > img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
}

div.main > div:nth-child(3) > p {
  margin: unset;
}

div.main > div:nth-child(3) > img.arrow {
  max-width: 24px;
  max-height: 24px;
}

div.main > div:nth-child(3) > img.arrow:hover {
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  border-radius: 5px;
}

input {
  width: 100%;
  height: 25px;
  border-radius: 15px;
  font-family: Lato;
  outline: none;
  border-color: unset;
  text-align: center;
}

input:focus {
  border: unset;
  width: 100%;
  height: 25px;
  text-align: center;
}

div.main > div.box-language {
  align-items: center;
}

div.main > div.box-language > div {
  display: flex;
}

div.main > div.box-language > div > img {
  max-width: 36px;
  max-height: 24px;
}

div.main > div.box-language > p {
  margin: 0px 12px;
}
</style>
