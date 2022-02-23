<template>
  <div class="card">
    <div class="card-content flex flex-col justify-center items-center">
      <div class="img-container flex justify-center items-center mb-2">
        <div class="img">{{ img }}</div>
      </div>
      <div class="title-box flex mb-5">
        <h2 class="card-title font-black text-xl sm:text-2xl">{{ title }}</h2>
      </div>
      <div class="card-drescription">
        <p class="description">
          {{ description }}
        </p>
        <router-link :to="link" class="card-link">read more »</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "card",
  props: {
    img: "",
    title: "",
    description: "",
    link: "",
  },
};
</script>

<style scoped>
.card {
  /* border: 1px solid black; */
  padding: 1rem;
}
.card-content {
  border: 1px solid #eee;
  padding: 1rem;
  transition: all 0.35s ease;
}
.card-content:hover {
  box-shadow: 0.3px 0.3px 2.2px rgba(0, 0, 0, 0.02),
    0.7px 0.7px 5.3px rgba(0, 0, 0, 0.028),
    1.3px 1.3px 10px rgba(0, 0, 0, 0.035),
    2.2px 2.2px 17.9px rgba(0, 0, 0, 0.042),
    4.2px 4.2px 33.4px rgba(0, 0, 0, 0.05), 10px 10px 80px rgba(0, 0, 0, 0.07);
}
.img-container {
  height: 250px;
  width: 300px;
  background-color: #ccc;
}
.card-title {
  position: relative;
}
.card-title::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -5px;
  height: 5px;
  width: 100%;
  border-radius: 1rem;
  background-color: #70d6ff;
}
.card-link {
  color: #ff70a6;
  position: relative;
  transition: all 0.35s ease;
}
.card-link::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -2px;
  height: 2px;
  width: 0px;
  border-radius: 1rem;
  background-color: #ff1f75;
  transition: all 0.35s ease;
}
.card-link:hover {
  color: #ff1f75;
}
.card-link:hover::after {
  width: 100%;
}
</style>