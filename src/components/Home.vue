<template>
  <section id="home">
    <div class="heading">
      <h1>Hotel deLux</h1>
      <br />
      <h2>Not just nearly Luxury, but really Luxury</h2>
      <br /><br />
      <router-link :to="{ name: 'Bookings' }"
        ><button type="button" class="btn">Explore</button></router-link
      >
    </div>
  </section>
  <section id="about">
    <h3>About Us</h3>
    <div class="container section">
      <div class="row">
        <div class="col-md-6">
          <h4>What we have to offer</h4>
          <p>
            This upscale hotel with a glass facade is 6 km from the Dubai Gold
            Souk and 10 km from The Dubai Fountain. Modern rooms feature Wi-Fi
            and flat-screen TVs, plus floor-to-ceiling windows and minibars.
            Upgraded rooms have sitting areas. Suites add separate living rooms,
            dining areas, additional bathrooms and kitchenettes with
            washer/dryers. Room service is available. Parking is complimentary.
            There are 3 restaurants, including a warm Italian eatery and a pub
            with big-screen sports, along with a coffee shop. There’s also a
            business centre and a gym, plus a hot tub, a sauna, and an outdoor
            pool with a sun deck.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="https://images.mrandmrssmith.com/images/hotel_gallery716/3988965-one-and-only-the-palm-hotel-dubai-united-arab-emirates.jpg"
            alt=""
          />
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <img
            src="https://images.mrandmrssmith.com/images/hotel_gallery716/3988974-one-and-only-the-palm-hotel-dubai-united-arab-emirates.jpg"
            alt=""
          />
        </div>
        <div class="col-md-6">
          <h4>Our favourite rooms</h4>
          <p>
            Standard king rooms here are so large they’d be junior suites at a
            lesser hotel; each has an array of cosy sofas in addition to the
            enormous bed, so you won’t lack places to flop after a hard day
            lounging in the sun. The vaguely Moorish-inspired decor in neutral
            tones is pleasingly relaxing, too. If you’d like a private terrace,
            too, opt for a junior suite.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-6">
          <h4>Swimming Pool</h4>
          <p>
            Take a dip in the temperature-controlled outdoor pool, which
            overlooks the Persian Gulf. Expect your drinks to be whisked to your
            lounger instantaneously, and your sunglasses to be meticulously
            polished as soon as you set them down. The heated outdoor pool is
            family-friendly and supervised by a lifeguard.
          </p>
        </div>
        <div class="col-md-6">
          <img
            src="https://images.mrandmrssmith.com/images/hotel_gallery716/3988958-one-and-only-the-palm-hotel-dubai-united-arab-emirates.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#home {
  height: 100vh;
  background-color: #232323;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)),
    url(https://images.mrandmrssmith.com/images/1482x988/3634023-one-and-only-the-palm-hotel-dubai-united-arab-emirates.jpg);
  background-size: cover;
}
#about {
  background-color: #eadaa2;
  height: 210vh;
}

.heading {
  width: 100%;
}

.btn {
  text-decoration: none;
  background-color: #bd9d6b;
  text-transform: uppercase;
  color: white;
  font-size: 20 px;
  padding: 12px 38px;
  border-radius: 5px;
}

.btn:hover {
  background-color: #705d56;
}

h1 {
  font-weight: bolder;
  font-family: cursive;
  /* font-style: italic; */
  color: white;
  font-size: 150px;
  text-align: center;
  padding-top: 270px;
}

h3 {
  padding-top: 80px;
  font-size: 70px;
  font-family: cursive;
  color: #3a3e3b;
}

.container {
  padding-top: 20px;
}

h2 {
  font-style: italic;
  font-family: cursive;
  color: white;
  font-size: 30px;
}
.section .row {
  margin-top: 7%;
  margin-bottom: 10%;
}
.section .row .col-md-6 {
  background: #f5f5f5;
  margin-right: -2%;
  padding: 5%;
}
.section h3 {
  color: #004085;
}
.section p {
  margin-top: 10%;
  color: #545b62;
}
.section img {
  width: 100%;
}
</style>
