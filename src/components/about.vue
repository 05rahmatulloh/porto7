<template>
  <div class="container">
    <div class="pt-20 pb-20 w-screen bg-white">
      <div id="about1" class="px-5 lg:px-10 flex flex-wrap">
        <div class="">
          <h1 class="text-black text-5xl font-heder font-semibold">About</h1>
          <div class="w-40 h-1 bg-sky-400 mt-1"></div>
        </div>
        <div class="py-10">
          <p class="text-black text-xl lg:text-2xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            molestias similique molestiae eos, esse quam veniam sapiente aliquam
            sequi reiciendis?
          </p>
        </div>
      </div>
      <div class="w-full lg:flex lg:flex-wrap px-5">
        <div
          id="image"
          class="h-[500px] lg:p-5 md flex lg:w-1/3 w-full justify-center"
        >
          <div
            class="h-[400px] w-[350px] ip:h[300px] ip:h[300px] rounded-[20px] bg-cover bg-center m-auto md:w-[500px] md:h-[500px] lg:ml-5 lg:w-full lg:h-full"
            style="
              background-image: url(/public/profil.jpg);
              background-position-y: 9px;
              background-repeat: no-repeat;
            "
          ></div>
        </div>
        <div id="isi" class="w-full lg:w-2/3">
          <h1 class="font-heder font-bold text-2xl text-black py-6">
            WEB Developer
          </h1>
          <p class="py-2 text-black text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo
            reprehenderit iure ipsam sint vel saepe dolor nobis cum quia cumque.
          </p>

          <div class="flex flex-wrap">
            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">Birtday:</span>5 Desember 2005
            </p>
            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">Website:</span
              ><a href="#" class="hover:bg-gray-700 reo">rahmatulloh.my.id</a>
            </p>
            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">Website:</span
              ><a href="#">rahmatulloh.my.id</a>
            </p>
            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">Phone:</span>
              +62 81338613704
            </p>

            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">city:</span>Indonesia,Jawa
              east,Malang
            </p>
            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">age:</span>19
            </p>
            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">Deggre:</span>-
            </p>
            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">Email:</span
              >05rahmatulloh@gmail.com
            </p>
            <p class="block w-full lg:w-1/2 text-black text-xl py-2">
              <span class="text-cyan-600 font-extrabold text-3xl">> </span>
              <span class="font-bold font-heder">Freelance:</span>Availabel
            </p>
          </div>
          <p class="text-black py-2 text-xl">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Rdiandae
            sequi maxime architecto eligendi vitae eveniet provident ea hic
            voluptates quibusdam!
          </p>
        </div>
        <div class="w-full pt-20 md:flex md:flex-wrap flex flex-wrap lg:w-full">
          <div
            id="icon"
            class="w-full md:w-1/2 flex pt-2 pb-2 flex-wrap justify-center"
          >
            <div class="icon w-1/4 mx-3">
              <span class="text-[70px]"> 😁 </span>
            </div>
            <h1 class="text-black text-8xl w-2/4">1</h1>
            <h2
              class="text-black font-semibold w-full font-heder text-3xl text-center"
            > 
              <span class="text-black"> Happy Clients </span>
            </h2>
          </div>
          <div
            id="icon"
            class="w-full md:w-1/2 flex pt-2 pb-2 flex-wrap justify-center"
          >
            <div class="icon w-1/4 mx-3">
              <span class="text-[70px]"> 📜 </span>
            </div>
            <h1 class="text-black text-8xl w-2/4">1</h1>
            <h2
              class="text-black font-semibold font-heder w-full text-3xl text-center"
            >
              <span class="text-black"> Project </span>
            </h2>
          </div>
          <div
            id="icon"
            class="w-full md:w-1/2 flex pt-2 pb-2 flex-wrap justify-center"
          >
            <div class="icon w-1/4 mx-3">
              <span class="text-[70px]"> 🎧 </span>
            </div>
            <h1 class="text-black text-8xl w-2/4">{{ angka }}</h1>
            <h2
              class="text-black font-semibold font-hedercw-full text-3xl text-center"
            >
              <span class="text-black"> Hours Of Support </span>
            </h2>
          </div>
          <!-- <div id="icon" class="w-full md:w-1/2 flex flex-wrap">
            <div class="icon w-1/4">
              <span class="text-[70px]"> 😁 </span>
            </div>
            <h1 class="text-black text-8xl w-3/4">1</h1>
            <h2 class="text-black font-semibold font-heder text-2xl">
              <span class="opacity-70"> Hard Work </span>
            </h2>
          </div> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      angka: 0,
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.angka += 1; // Tambah angka tiap detik
    }, 60000);
  },
};
</script>
