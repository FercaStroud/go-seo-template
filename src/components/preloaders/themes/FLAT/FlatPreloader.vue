<template lang="pug">
transition(name="fade")
  .preloader.flex.flex-col.justify-center.items-center.w-full.h-full(
    v-if="$store.state.isLoading"
  )
    .logo.w-48.h-48.bg-no-repeat.bg-center(
      :style="'background-image: url(' + PUBLIC_ASSETS + 'images/logos/' + $store.state.settings.logo + ');'"
    )
    p.mt-2.font-black.text-xl Cargando
    .circles.flex.mt-2
      .circle.bg-primary.w-2.h-2.m-2(v-for="i in 5", :key="i")
</template>

<script>
export default {
  name: "FlatPreloader",
  data() {
    return {
      PUBLIC_ASSETS: import.meta.env.VITE_PUBLIC_ASSETS,
    };
  },
};
</script>

<style lang="scss" scoped>
.preloader {
  position: fixed;
  top: 0;
  left: 0;
  background-color: white;
  z-index: 9999;

  .circles .circle {
    border-radius: 50%;
    animation: scaleIn 1s ease;
    transform: scale(0);

    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.1s;
    }
    &:nth-child(3) {
      animation-delay: 0.2s;
    }
    &:nth-child(4) {
      animation-delay: 0.3s;
    }
    &:nth-child(5) {
      animation-delay: 0.4s;
    }
  }
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 1s;

  .logo,
  p {
    animation: scaleOut 1s ease;
  }
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@keyframes scaleOut {
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0);
  }
}
@keyframes scaleIn {
  0% {
    transform: scale(0);
  }
  100% {
    transform: scale(1);
  }
}
</style>