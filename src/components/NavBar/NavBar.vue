<template>
  <div class="link-component">
    <ul>
      <router-link to="/" class="my-router">
        <li>Home</li>
      </router-link>
      <router-link to="/people" class="my-router">
        <li>People</li>
      </router-link>
      <router-link to="/films" class="my-router">
        <li>Films</li>
      </router-link>
      <router-link to="/about" class="my-router">
        <li>about</li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: starwars;
  src: url("../../assets/fonts/Starjhol.ttf");
}
.my-router {
  font-family: "starwars";
  color: black;

  font-size: 1.3rem;
  font-style: bold;
  letter-spacing: 0.1rem;
  -webkit-text-stroke: 1px black;
  text-decoration: none;
}

.link-component {
  display: flex;

  right: 8px;
  width: 100vw;
  height: 85px;
  position: relative;
  bottom: 10px;
  background-image: linear-gradient(to bottom right, #ffe066, tan);
}
ul {
  display: inline-block;
  list-style: none;
  display: flex;
  padding: 0;
  flex-flow: row nowrap;
}
li {
  padding: 18px 15px;
}

@media screen and (max-width: 865px) {
  .link-component {
    text-align: center;
  }
  ul {
    margin: auto;
  }
  li {
    font-size: 0.9rem;
  }
}
</style>
