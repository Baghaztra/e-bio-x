<script setup>
const isDark = ref(false);

onMounted(() => {
  if (localStorage.getItem("theme") === "dark") {
    isDark.value = true;
    document.documentElement.classList.add("dark");
  }
});

function toggleDark() {
  isDark.value = !isDark.value;
  document.documentElement.classList.toggle("dark");
  localStorage.setItem("theme", isDark.value ? "dark" : "light");
}
</script>

<template>
  <button
    @click="toggleDark"
    class="relative inline-flex items-center h-6 rounded-full w-11 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/50"
    :class="isDark ? 'bg-white/30' : 'bg-white/20'">
    <span class="sr-only">Toggle dark mode</span>
    <span
      class="absolute left-0 w-5 h-5 transform bg-white rounded-full transition-transform duration-300 flex items-center justify-center text-gray-800"
      :class="{ 'translate-x-5': isDark, 'translate-x-0': !isDark }">
      <Icon :name="isDark ? 'lucide-moon' : 'lucide-sun'" class="text-sm" />
    </span>
  </button>
</template>
