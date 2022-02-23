<template>
  <footer
    class="
      flex flex-col
      sm:flex-row
      flex-wrap
      p-5
      sm:px-10
      justify-center
      items-start
    "
  >
    <div
      class="
        column
        basis-full
        sm:basis-1/2
        lg:basis-1/4
        flex flex-col
        gap-10
        mb-10
      "
    >
      <div class="list">
        <div class="title-box flex">
          <h3 class="title uppercase font-black text-lg mb-5">
            get to know us
          </h3>
        </div>
        <ul>
          <li class="mb-1"><a href="#" class="capitalize link">about us</a></li>
          <li class="mb-1"><a href="#" class="capitalize link">careers</a></li>
          <li class="mb-1"><a href="#" class="capitalize link">linkedin</a></li>
          <li class="mb-1">
            <router-link to="/portfolio-flat" class="capitalize link">
              portfolio
            </router-link>
          </li>
          <li class="mb-1">
            <router-link to="/blog-flat" class="capitalize link">
              blog
            </router-link>
          </li>
          <li class="mb-1">
            <router-link to="/contact-flat" class="capitalize link">
              contact
            </router-link>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="
        column
        basis-full
        sm:basis-1/2
        lg:basis-1/4
        flex flex-col
        gap-10
        mb-10
      "
    >
      <div class="list">
        <div class="title-box flex">
          <h3 class="title uppercase font-black text-lg mb-5">
            let us help you
          </h3>
        </div>
        <ul>
          <li class="mb-1">
            <a href="#" class="capitalize link">order history</a>
          </li>
          <li class="mb-1"><a href="#" class="capitalize link">help</a></li>
        </ul>
      </div>

      <div class="list">
        <div class="title-box flex">
          <h3 class="title uppercase font-black text-lg mb-5">get the app</h3>
        </div>
        <ul>
          <li class="mb-1">
            <a href="#" class="capitalize link">app store</a>
          </li>
          <li class="mb-1">
            <a href="#" class="capitalize link">google play</a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="
        column
        basis-full
        sm:basis-1/2
        lg:basis-1/4
        flex flex-col
        gap-10
        mb-10
      "
    >
      <div class="list">
        <div class="title-box flex">
          <h3 class="title uppercase font-black text-lg mb-5">
            doing business
          </h3>
        </div>
        <ul>
          <li class="mb-1">
            <a href="#" class="capitalize link">become a partner</a>
          </li>
          <li class="mb-1">
            <a href="#" class="capitalize link">our clients</a>
          </li>
          <li class="mb-1">
            <a href="#" class="capitalize link">oportunities</a>
          </li>
        </ul>
      </div>
    </div>

    <div
      class="
        column
        basis-full
        sm:basis-1/2
        lg:basis-1/4
        flex flex-col
        gap-10
        mb-10
      "
    >
      <div class="list">
        <div class="title-box flex">
          <h3 class="title uppercase font-black text-lg mb-5">follow us</h3>
        </div>
        <ul>
          <li class="mb-1">
            <a href="#" class="capitalize link">
              <font-awesome-icon :icon="['fab', 'facebook']" />
              Facebook
            </a>
          </li>

          <li class="mb-1">
            <a href="#" class="capitalize link">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              Twitter
            </a>
          </li>

          <li class="mb-1">
            <a href="#" class="capitalize link">
              <font-awesome-icon :icon="['fab', 'instagram']" />
              Instagram
            </a>
          </li>

          <li class="mb-1">
            <a href="#" class="capitalize link">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
footer {
  background-color: #222;
  color: white;
}
.column {
  /* border: 1px solid white; */
  height: 100%;
}
.title {
  position: relative;
}
.title::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -3px;
  height: 3px;
  border-radius: 1rem;
  width: 100%;
  background-color: #ff70a6;
}
.link {
  color: #ccc;
  position: relative;
  transition: color 0.35s ease;
}
.link:hover {
  color: white;
}
.link::after {
  position: absolute;
  content: "";
  left: 0;
  bottom: -2px;
  height: 2px;
  border-radius: 1rem;
  width: 0;
  background-color: #70d6ff;
  transition: width 0.35s ease;
}
.link:hover::after {
  width: 100%;
}
</style>