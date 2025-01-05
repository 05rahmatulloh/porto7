<template>
  <div class="pt-20 pb-20 w-screen bg-white px-5">
    <div class="text-center">
      <h1 class="text-black text-5xl font-heder font-semibold">Portofolio</h1>
      <div class="w-40 h-1 bg-sky-400 mt-1 mx-auto"></div>
    </div>
    <p class="text-black font-paraf text-center">
     Saya seorang Web Developer yang berfokus pada pengembangan aplikasi front-end menggunakan Vue.js. Dengan keahlian dalam membangun antarmuka pengguna yang modern, interaktif, dan responsif, saya percaya bahwa teknologi dapat menyederhanakan dan meningkatkan pengalaman penggun
    </p>
    <div class="pilih w-full justify-center flex mt-5 gap-2">
      <button @click="semuas">
        <div class="w-14 h-7 bg-white text-center">
          <p class="text-black font-sans">ALL</p>
        </div>
      </button>
      <button @click="projeks">
        <div class="w-14 h-7 bg-white text-center">
          <p class="text-black font-sans">Projek</p>
        </div>
      </button>
      <button @click="documentasi">
        <div class="w-27 h-7 bg-white text-center">
          <p class="text-black font-sans">Documentasi</p>
        </div>
      </button>
    </div>

    <div
      class="portofolio w-auto h-auto max-h-[700px]: justify-center flex flex-wrap gap-2 rounded-md overflow-auto"
    >
      <div
        id="gambar"
        class="rounded-lg transition-all hover:fil-50 hover:bg-blend-darken duration-300 group hover:bg-opacity-50 justify-center flex items-center transform w-80 h-80"
        style="background-image: url(/foto3.jpg); background-size: cover"
        :class="{
          ' fixed -z-50  opacity-0 scale-0 w-0 h-0': !semua,
          ' opacity-100': semua,
        }"
      >
        <a href="#" class="text-white hover:bg-transparent">
          <font-awesome-icon
            :icon="['fas', 'search']"
            class="text-5xl text-white p-2 opacity-0 group-hover:opacity-100"
        /></a>
        <a href="#" class="text-white hover:bg-transparent">
          <font-awesome-icon
            :icon="['fas', 'link']"
            class="text-5xl text-white p-2 scale-0 group-hover:scale-100"
          />
        </a>
      </div>

      <div
        class="rounded-lg transition-all hover:fil-50 hover:bg-blend-darken duration-300 group hover:bg-opacity-50 justify-center flex items-center transform bg-cover w-80 h-80"
        style="background-image: url(/foto4.png)"
        :class="{
          ' fixed -z-50  opacity-0 scale-0 w-0 h-0':
            semua == false && documents == true && projek == false,
        }"
      >
        <a href="#" class="text-white hover:bg-transparent">
          <font-awesome-icon
            :icon="['fas', 'search']"
            class="text-5xl text-white p-2 opacity-0 group-hover:opacity-100"
        /></a>
        <a href="#" class="text-white hover:bg-transparent">
          <font-awesome-icon
            :icon="['fas', 'link']"
            class="text-5xl text-white p-2 scale-0 group-hover:scale-100"
          />
        </a>
      </div>

      <div
        class="rounded-lg transition-all bg-cover hover:fil-50 hover:bg-blend-darken duration-300 group hover:bg-opacity-50 justify-center flex items-center transform w-80 h-80"
        style="background-image: url(/foto5.jpg)"
        :class="{
          ' fixed -z-50  opacity-0 scale-0 w-0 h-0':
            semua == false && documents == false && projek == true,
        }"
      >
        <a href="#" class="text-white hover:bg-transparent">
          <font-awesome-icon
            :icon="['fas', 'search']"
            class="text-5xl text-white p-2 opacity-0 group-hover:opacity-100"
        /></a>
        <a href="#" class="text-white hover:bg-transparent">
          <font-awesome-icon
            :icon="['fas', 'link']"
            class="text-5xl text-white p-2 scale-0 group-hover:scale-100"
          />
        </a>
      </div>
    </div>
  </div>
</template>

<script>
// import { ref } from "vue";

export default {
  data() {
    // all = ref(true);
    return {
      semua: true,
      projek: true,
      documents: true,
    };
  },
  methods: {
    semuas() {
      this.semua = true;
      this.projek = false;
      this.documents = false;
    },
    projeks() {
      this.projek = true;
      this.semua = false;
      this.documents = false;
    },
    documentasi() {
      this.projek = false;
      this.semua = false;
      this.documents = true;
    },
  },
};
</script>
