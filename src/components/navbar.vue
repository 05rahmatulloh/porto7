<template>
  <nav class="">
    <button
      @click="button"
      class="bg-blue-400 p-2 rounded-full fixed right-3 top-3"
    >
      <div
        :class="{
          '-rotate-45  origin-right -translate-x-1 -translate-y-1': buka,
        }"
        class="transition duration-300 h-1 w-8 rounded-2xl my-1 bg-white"
      ></div>
      <div
        :class="{ 'scale-0': buka }"
        class="h-1 w-8 rounded-2xl my-1 bg-white transition duration-300"
      ></div>
      <div
        :class="{
          'rotate-45  origin-bottom -translate-y-[9px] -translate-x-0  ': buka,
        }"
        class="transition duration-300 h-1 w-8 rounded-2xl my-1 bg-white"
      ></div>
    </button>

    <div
      :class="{
        'translate-x-0': buka,
        '-translate-x-full': !buka,
      }"
      class="fixed z-50 top-0 left-0 w-2/3 h-screen border border-r-2 border-sky-500 shadow-sm shadow-slate-800 bg-white transition-transform duration-5000"
    >
      <div class="logo mx-auto w-full max-h -10 text-center mt-20">
        <h1 class="text-slate-600 text-3xl font-heder font-semibold">
          <span class="text-green-600 font-bold">R</span>ahma<span
            class="text-yellow-400"
            >t</span
          >
        </h1>
        <font-awesome-icon
          :icon="['fab', 'instagram']"
          style="color: grey; font-size: 2rem; margin: 5px"
        />
        <font-awesome-icon
          :icon="['fab', 'linkedin']"
          style="color: blue; margin: 5px; font-size: 2rem"
        />
      </div>
      <div class="pt-20 text-center pb-2">
        <ul>
          <li>
            <a href="#">
              <h1
                class="text-[#999999] font-[500px] text-xl font-monserat hover:underline"
              >
                Home
              </h1></a
            >
            <a href="#">
              <h1
                class="text-[#999999] font-[500px] text-xl font-monserat hover:underline"
              >
                About
              </h1></a
            >
            <a href="#">
              <h1
                class="text-[#999999] font-[500px] text-xl font-monserat hover:underline"
              >
                Skill
              </h1></a
            >
            <a href="#">
              <h1
                class="text-[#999999] font-[500px] text-xl font-monserat hover:underline"
              >
                Portofolio
              </h1></a
            >
            <a href="#">
              <h1
                class="text-[#999999] font-[500px] text-xl font-monserat hover:underline"
              >
                Resume
              </h1></a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data() {
    return {
      buka: false,
    };
  },
  methods: {
    button() {
      this.buka = !this.buka;
    },
  },
};
</script>
