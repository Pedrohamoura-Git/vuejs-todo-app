<template>
<header>
  <h1>To-do</h1>
  <label class="theme-switcher" @click="changeIcon">
    <img v-if="darkTheme" src="@/assets/images/icon-sun.svg" alt="Sun icon" id="sun">
    <img v-else src="@/assets/images/icon-moon.svg" alt="Moon icon" id="moon">
  </label>
</header>
</template>

<script>
export default {
  components: {

  },
  data() {
    return {
      darkTheme: true,
      cont: 0,
    }
  },
  methods: {
    changeIcon() {
      const setTheme = theme => document.documentElement.className = theme;

      this.darkTheme = !(this.darkTheme)
      console.log(this.cont++)

      if(this.darkTheme) {
        setTheme('dark')
      } else { setTheme('light') }
    }
  },
  created: () => {
    document.documentElement.className = 'dark'
  }
}
</script>

<style>
header {
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;
  position: relative;

  /* border: 1px solid green; */
}

h1 {
  display: inline;
  color: var(--txt-color-h1);
  font-size: clamp(15px, 8vw, 2.5rem);
  letter-spacing: .5rem;
  text-transform: uppercase;

  /* border: 1px solid greenyellow; */
}

#ts-checkbox {
  float: right;
  opacity: 0;
}

.theme-switcher {
  cursor: pointer;
  display: flex;
  align-items: center;
  transform-style: preserve-3d;
  transition: all .5s;
}

#moon {
  border-radius: 50%;
  padding: 3px;
  transition: all .5s;

}

#sun {
  border-radius: 50%;
  padding: 3px;
  transition: all .5s;
}

</style>