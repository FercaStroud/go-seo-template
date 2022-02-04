<template>
  <div class="footer font-mono py-10">
    <div class="container mx-auto flex flex-row flex-wrap">
      <div class="flex flex-col basis-full sm:basis-1/2 items-center">
        <p class="font-base text-lg mb-5 text-center">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fuga
          similique, ducimus molestias repudiandae aliquid esse fugit
          voluptatibus nihil! Nulla, ab.
        </p>
        <a href="/contact-sober" class="custom-link mb-5 rounded">contact</a>
      </div>
      <div class="flex basis-full sm:basis-1/2">
        <ul class="mx-auto">
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
  background-color: #5c95ff;
  padding: 0.2rem 2rem;
  opacity: 0.8;
  transition: all 0.35s ease;
}
.custom-link:hover {
  opacity: 1;
}
.social {
  transition: all 0.35s ease;
}
.social:hover {
  color: #f87575;
}
</style>
