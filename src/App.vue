<script>
import Particle from "./components/Background/Particle.vue";
import NavBar from './components/NavBar/NavBar'
import StarWarsIntro from "./components/StarWarsIntro/StarWrsIntro.vue";

export default {
  name: "App",
  components: {
    Particle,
   
  },
  render() {
    return (
      <div onClick={() => this.enterWebsite()}>
       {!this.close && <NavBar />}
        {this.close && <StarWarsIntro />}
        
        {!this.close && <RouterView />}
          

        <Particle />
       
      </div>
    );
  },
  data() {
    return {
      close: true,
    };
  },
  methods: {
    enterWebsite() {
      this.close = false;
    },
  },
};
</script>

<style>
body {
  background-color: black;
}
</style>
