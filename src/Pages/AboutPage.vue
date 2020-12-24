<template>
  <div>
    <h1 class="about-title">about</h1>
    <h2 class="about-subtitle">a website created by nikolaos panagopoulos</h2>
    <h3 class="about-text">
      you can check the links and learn everything about starwars! Every card
      that you click expands and a lot of information appears along with links
      to more resources.
    </h3>
    <div class="link-to-portfolio-container">
      <a class="link-to-portfolio" href="https://www.nikospan.com/" target="_blank"  rel="noreferrer" 
        >nikolaos panagopoulos</a
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
@font-face {
  font-family: starwars;
  src: url("../assets/fonts/Starjhol.ttf");
}

.about-title {
  color: #ffe066;
  font-family: "starwars";
  font-size: 4.5rem;
  text-align: center;
}
.about-subtitle {
  color: #ffe066;
  font-family: "starwars";
  text-align: center;
  font-size: 2.2rem;
}
.about-text {
  color: #ffe066;
  font-family: "starwars";
  text-align: center;
  font-size: 1.8rem;
  margin-top: 4rem;
}

.link-to-portfolio-container {
  max-width: 100vw;
  text-align: center;
}
.link-to-portfolio {
  text-decoration: none;
  color: #ffe066;
  font-size: 2rem;
  border: 1px solid #ffe066;
  padding: 7px;
  border-radius: 10px;
  transition: 0.5s all;
  font-family: "starwars-title";
  margin: 0;
  font-family: "starwars";
  position: relative;
  top: 33vh;
   -webkit-text-stroke: 2px #ffe066;;
}

.link-to-portfolio:hover {
  background-color:#ffe066;;
  color: black;
  -webkit-text-stroke: 2px black;
 
}
@media screen and (max-width: 868px){
    .about-title{
        font-size: 1.5rem;
    }
    .about-subtitle{
        font-size: 1.2rem;
    }
    .about-text{
        font-size: 1.1rem;
        overflow-wrap: normal;
        
    }
    .link-to-portfolio{
        font-size: 1.2rem;
        -webkit-text-stroke: 1px #ffe066;;
        top: 20vh;
    }
}
</style>
