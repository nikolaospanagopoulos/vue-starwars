<script>
export default {
  props: ["person"],
  render() {
    return (
      <div class="card" onClick={this.toggle}>
        <div class="container">
          <h1> {this.person.name} </h1>
        </div>
        <div class="person-details">
          <h5> Height: {this.person.height} cm</h5>
          <h5> Mass: {this.person.mass} kg</h5>
          <h5> Hair color: {this.person.hair_color} </h5>
          <h5> Skin color: {this.person.skin_color} </h5>
          <h5> Eye color: {this.person.eye_color} </h5>
          <h5> Birth year: {this.person.birth_year} </h5>
          <h5> Gender: {this.person.gender} </h5>
          <h5>
            {" "}
            <p>Homeworld:</p>
            <a href={this.person.homeworld} target="_blank" rel="noreferrer">
              {this.person.homeworld}
            </a>{" "}
          </h5>
          <div>
             <p>Films:</p>
            <p> {this.open && this.person.films.length} </p>
            <p onClick={this.unToggle}>
              {this.open &&
                this.person.films.map((film) => (
                  <a href={film} key={film} target="_blank" rel="noreferrer">
                    {" "}
                    {film}{" "}
                  </a>
                ))}{" "}
            </p>
          </div>

          <div>
             <p>Vehicles:</p>
            <p> {this.open && this.person.vehicles.length} </p>
            <p onClick={this.unToggle}>
              {this.open &&
                this.person.vehicles.map((vehicle) => (
                  <a
                    href={vehicle}
                    key={vehicle}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {" "}
                    {vehicle}{" "}
                  </a>
                ))}{" "}
            </p>
          </div>

          <div>
            <p>Starships:</p>
            <p> {this.open && this.person.starships.length} </p>
            <p onClick={this.unToggle}>
              {this.open &&
                this.person.starships.map((starship) => (
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
@font-face {
  font-family: starwars;
  src: url("../../assets/fonts/Starjhol.ttf");
}
.card {
  border: 2px solid #ffe066;
  border-radius: 20px;
  box-shadow: 0 0 30px rgba(0, 0, 0, 0.18);
  padding: 0.7rem;
  width: 25rem;
  overflow: hidden;
  word-wrap: break-word;
  cursor: pointer;
  background-color: rgba(255, 255, 128, 0.2);
  padding: 30px;
}
.container h1 {
  font-family: "starwars";
  color: #ffe066;
  position: relative;
  font-size: 2.5rem;

  text-transform: lowercase;
}

.person-details {
  color: thistle;
}
.person-details a {
  max-width: 100%;
  color: #ffe066;
}

@media screen and (max-width: 768px) {
  .container-title {
    font-size: 20px;
  }
  .card {
    max-width: 82vw;
    padding: 10px;
  }
}
</style>
