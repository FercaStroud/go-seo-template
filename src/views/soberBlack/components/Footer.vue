<template>
  <div class="footer font-mono py-10 px-5 sm:px-0">
    <div class="container mx-auto flex flex-row flex-wrap">
      <div class="flex flex-col basis-full sm:basis-2/3 items-start sm:pr-5">
        <p class="font-base text-md md:text-lg mb-5 text-left">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          similique, ducimus molestias repudiandae aliquid esse fugit
          voluptatibus nihil! Nulla, ab.
        </p>
        <router-link to="/contact-sober" class="custom-link mb-5 rounded">contact</router-link>
      </div>
      <div class="flex basis-full sm:basis-1/3">
        <ul class="mx-0 sm:ml-5">
          <li>
            <a href="#" class="font-base text-lg social">
              <font-awesome-icon :icon="['fab', 'facebook']" />
              Facebook
            </a>
          </li>
          <li>
            <a href="#" class="font-base text-lg social">
              <font-awesome-icon :icon="['fab', 'twitter']" />
              Twitter
            </a>
          </li>
          <li>
            <a href="#" class="font-base text-lg social">
              <font-awesome-icon :icon="['fab', 'instagram']" />
              Instagram
            </a>
          </li>
          <li>
            <a href="#" class="font-base text-lg social">
              <font-awesome-icon :icon="['fab', 'whatsapp']" />
              Whatsapp
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Footer",
};
</script>

<style scoped>
.footer {
  background-color: #333;
}
.custom-link {
  background-color: #305fb6;
  padding: 0.2rem 2rem;
  transition: all 0.35s ease;
}
.custom-link:hover {
  background-color: #5c95ff;
}
.social {
  transition: all 0.35s ease;
}
.social:hover {
  color: #f87575;
}
</style>
