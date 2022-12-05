<template>
  <header data-testid="header">
    <router-link class="logo" to="/">
      <Image class="logo" :image="images.logo" />
    </router-link>
    <nav>
      <router-link class="nav-link" to="/">HOME</router-link>
      <router-link class="nav-link" to="/faq">FAQ</router-link>
    </nav>
    <Button>Get the App</Button>
  </header>
  <div class="sub-nav">
    <router-link class="nav-link" to="/">HOME</router-link>
    <router-link class="nav-link" to="/faq">FAQ</router-link>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Button, Image } from "../atoms";
import images from "../../assets/img/images";

export default defineComponent({
  components: {
    Button,
    Image,
  },
  data() {
    return {
      images,
    };
  },
});
</script>

<style scoped>
header {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  background-color: #242a40;
  height: 8vh;
  width: 100vw;
  position: fixed;
  top: 0;
  left: 0;
  padding: 10px 3%;
  display: flex;
  align-items: center;
  z-index: 20;
  display: flex;
  justify-content: space-between;
}

.router-link-active {
  color: #ccd322 !important;
}

#menu-button {
  height: 100%;
  width: 40px;
  margin-right: 20px;
}

nav {
  display: none;
}

.nav-link {
  color: rgb(212, 212, 212);
  text-decoration: none;
  font-weight: bold;
  transition: transform 0.7s ease-in-out;
}

.nav-link:hover {
  color: white;
}

.sub-nav {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  position: fixed;
  top: 8vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.424);
  z-index: 20;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  font-size: 1.3em;
  backdrop-filter: blur(5px);
}

.logo {
  width: auto;
  height: 100%;
  transition: transform 0.3s ease-in-out;
  transform: scale(100%);
}

.logo:hover {
  transform: scale(105%);
}

@media (min-width: 700px) {
  header {
    padding: 10px 2%;
  }

  nav {
    display: block;
    margin-left: auto;
    text-align: right;
    font-size: 1.3em;
    text-decoration: none;
  }

  .sub-nav {
    display: none;
  }

  a {
    margin-right: 3vw;
  }
}
</style>
