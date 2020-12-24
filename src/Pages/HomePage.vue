<script>
import axios from "axios";
import Loader from '../components/Loader/Loader'


export default {
  data() {
    return {
      json_data: [],
      loading:true
    };
  },
  components:{},
  methods: {
    async fetchPlanets() {
      const { data } = await axios.get("//swapi.dev/api/planets");
      this.loading = false
      this.json_data = data.results;
    },
  },
  render() {
    return (
      
      <div>
        {this.loading ? <Loader/> : (
          <div>
          <h1 class="main-title">star wars</h1>
        <h3 class="main-subtitle">
          {" "}
          An App created to spread the star wars knowledge to the world{" "}
        </h3>

        <div class="download-container">
          <downloadCsv data={this.json_data}>
            <button class="download-button">download planet information</button>
          </downloadCsv>
      
        </div>
          
          </div>
        )}
        
      </div>
    );
  },
  mounted() {
    this.fetchPlanets();
  },
};
</script>

<style>
@font-face {
  font-family: starwars;
  src: url("../assets/fonts/Starjhol.ttf");
}
.main-title {
  font-family: "starwars";
  font-size: 7rem;
  color: #ffe066;
  text-align: center;
}

.download-container {
  width: 100%;
  text-align: center;
  position: relative;
  top: 28vh;
}

.download-button {
  height: 50px;
  font-family: "starwars";
  margin: 0 auto;
  color: #ffe066;
  background-color: transparent;
  cursor: pointer;
  border: 2px solid white;
  border-radius: 10px;
  outline: none;
  transition: 0.5s all;
  font-size: 1rem;
  font-weight: bold;
}

.download-button:hover {
  background-color: #ffe066;
  color: black;
}

.main-subtitle {
  font-family: "starwars";
  font-size: 3rem;
  color: #ffe066;
  text-align: center;
}
@media screen and (max-width: 768px) {
  .main-title {
    font-size: 5rem;
  }
  .main-subtitle {
    font-size: 2rem;
  }
  .download-container {
    top: 0vh;
  }
}
</style>
