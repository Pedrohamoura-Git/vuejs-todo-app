<template>
<div id="wrapper">
  <div id="showcase">
    <Header />
    <NewTodoInput />
    <TodoList />
    <Footer />
  </div>
</div>
</template>

<script>
import Header from './components/template/Header.vue'
import NewTodoInput from './components/template/NewTodoInput'
import TodoList from './components/template/TodoList'
import Footer from './components/template/Footer'

export default {
  name: "App",
  components: { Header, NewTodoInput, TodoList, Footer, },
computed: {
  todos() {
    return this.$store.state.todos
  },
}
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap');
:root,
:root.light {
--bg-color-body: hsl(236, 33%, 92%);
--bg-color-cards: hsl(0, 0%, 98%);
--bg-check: linear-gradient(135deg,
    hsl(192, 100%, 67%), 
    hsl(280, 87%, 65%));
--bder-color: hsl(234, 39%, 85%);
--btn-color: hsl(234, 11%, 52%);
--btn-color-active: hsl(220, 98%, 61%);
--img-bg-desktop: url(./assets/images/bg-desktop-light.jpg);
--img-bg-mobile: url(./assets/images/bg-mobile-light.jpg);
--txt-color-cards: hsl(235, 24%, 19%);
--txt-color-h1: hsl(236, 33%, 92%);

}

:root.dark {
--bg-color-body: hsl(235, 21%, 11%);
--bg-color-cards: hsl(235, 24%, 19%);
--bg-check: linear-gradient(135deg,
    hsl(192, 100%, 67%), 
    hsl(280, 87%, 65%));
--bder-color: hsl(233, 14%, 35%);
--btn-color: hsl(234, 11%, 52%);
--btn-color-active: hsl(220, 98%, 61%);
--img-bg-desktop: url('./assets/images/bg-desktop-dark.jpg');
--img-bg-mobile: url('./assets/images/bg-mobile-dark.jpg');
--txt-color-h1: hsl(236, 33%, 92%);
--txt-color-cards: hsl(234, 39%, 85%);
--txt-color-checked: hsl(234, 11%, 52%);
}

* {
  list-style-type: none;
}

body {
  background: var(--bg-color-body) var(--img-bg-mobile) no-repeat top left;
  box-sizing: border-box;
  color: hsl(236, 33%, 92%);
  font-size: 18px;
  font-family: "Josefin Sans", sans-serif;
  min-height: 100vh;
  margin: 0;
  padding: 0;
  position: relative;
  transition: background 0.2s;
  text-decoration: none;
}

#wrapper {
  display: flex;
  align-content: center;
  justify-content: center;
  margin: 0 auto;
  width: 90%;
}

#showcase {
  margin-top: 2rem;
  width: min(90%, 600px);
}

@media (min-width: 376px) {
    body {
      background: var(--bg-color-body) var(--img-bg-desktop) no-repeat top left;
      min-width: 100%;
      min-height: 210px;    
    }
}
</style>
