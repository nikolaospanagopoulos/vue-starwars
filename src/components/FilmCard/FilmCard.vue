<script>
export default {
  props: ["film"],
  render() {
    return (
      <div class="card" onClick={this.toggle}>
        <div class="container">
          <h1> {this.film.title} </h1>
        </div>
        <div class="person-details">
          <p> Episode Number: {this.film.episode_id}</p>
          <p> Director : {this.film.director}</p>
          <p> Producer : {this.film.producer}</p>
          <p> Release Date : {this.film.release_date}  </p>
          <p> Opening Crawl: {this.film.opening_crawl} </p>
          
 
          <div>
             <p>Characters:</p>
           <p> {this.open && this.film.characters.length} </p>
            <p onClick={this.unToggle}>
              {this.open &&
                this.film.characters.map((character) => (
                  <a
                    href={character}
                    key={character}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    {character}{" "}
                  </a>
                ))}{" "}
            </p>
          </div>

          <div>
             <p>Planets:</p>
            <p> {this.open && this.film.planets.length} </p>
            <p onClick={this.unToggle}>
              {this.open &&
                this.film.planets.map((planet) => (
                  <a
                    href={planet}
                    key={planet}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    {planet}{" "}
                  </a>
                ))}{" "}
            </p>
          </div>

          <div>
            <p>Starships:</p>
            <p> {this.open && this.film.starships.length} </p>
            <p onClick={this.unToggle}>
              {this.open &&
                this.film.starships.map((starship) => (
                  <a
                    href={starship}
                    key={starship}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    {starship}{" "}
                  </a>
                ))}{" "}
            </p>
          </div>
        </div>
      </div>
    );
  },
  data() {
    return {
      open: false,
    };
  },
  methods: {
    toggle() {
      this.open = !this.open;
    },
    unToggle() {
      this.open = false;
    },
  },
};
</script>

<style>

</style>
