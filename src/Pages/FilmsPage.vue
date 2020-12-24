<script>
import axios from "axios";
import FilmCard from "../components/FilmCard/FilmCard";
import Loader from "../components/Loader/Loader";
export default {
  components: { FilmCard },
  data() {
    return {
      films: [],
      loading: true,
    };
  },
  methods: {
    async fetchFilms() {
      const { data } = await axios.get("//swapi.dev/api/films");
      this.loading = false;
      this.films = data.results;
    },
  },
  mounted() {
    this.fetchFilms();
  },
  render() {
    return (
      <div>
        {this.loading ? (
          <Loader />
        ) : (
          <div class="grid-container">
            {this.films.map((film) => (
              <div class="grid-item" key={film.episode_id}>
                <FilmCard film={film} />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  },
};
</script>

<style>
.grid-container {
  display: grid;

  grid-template-columns: 1fr 1fr 1fr;
  gap: -100px;
  margin: 0 auto;
  grid-auto-rows: minmax(100px, auto);
  justify-items: center;
}

.grid-item {
  padding: 18px;
  font-size: 150%;
  display: flex;
  align-items: flex-start;
}

@media screen and (max-width: 950px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
  }
  .grid-item {
    padding: 10px;
  }
}

@media screen and (max-width: 1424px) {
  .grid-container {
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
  }
  .grid-item {
    padding: 13px;
  }
}

@media screen and (max-width: 650px) {
  .grid-container {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
  }
  .grid-item {
    padding: 15px;
  }
}
</style>
