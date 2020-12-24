

<script>
import axios from "axios";
import Loader from '../components/Loader/Loader'
import PersonCard from "../components/PersonCard/PersonCard.vue";
export default {
  components: { PersonCard },
  data() {
    return {
      people: [],
      loading:true
    };
  },
  methods: {
    async fetchPeople() {
      const { data } = await axios.get("//swapi.dev/api/people");
      this.loading = false;
      this.people = data.results;
    },
  },
  mounted() {
    this.fetchPeople();
  },
  render() {
    return (
      <div>
        {this.loading ? (
          <Loader />
        ) : (
          <div class="grid-container">
            {this.people.map((person) => (
              <div class="grid-item" key={person.height}>
                <PersonCard person={person} />
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
