<template>
  <div class="container mx-auto px-4 py-6">
    <h1 class="text-3xl font-bold text-green-600">{{ course.name }}</h1>
    <span class="text-lg text-gray-600">Bareng {{ course.teacher }}</span>

    <div class="flex overflow-x-auto border-b mt-4 space-x-2 pb-2">
      <button
        @click="activeTab = 'materi'"
        :class="[
          'flex items-center gap-1 px-3 py-2 border rounded-lg text-sm font-medium whitespace-nowrap',
          activeTab === 'materi'
            ? 'bg-white text-green-600 border-green-300 shadow'
            : 'bg-gray-100 text-gray-600 border-gray-200',
        ]">
        <Icon name="simple-icons:bookstack" />
        Materi
      </button>
      <button
        @click="activeTab = 'upload-materi'"
        :class="[
          'flex items-center gap-1 px-3 py-2 border rounded-lg text-sm font-medium whitespace-nowrap',
          activeTab === 'upload-materi'
            ? 'bg-white text-green-600 border-green-300 shadow'
            : 'bg-gray-100 text-gray-600 border-gray-200',
        ]">
        <Icon name="material-symbols:upload-rounded" />
        Upload
      </button>
      <button
        @click="activeTab = 'siswa'"
        :class="[
          'flex items-center gap-1 px-3 py-2 border rounded-lg text-sm font-medium whitespace-nowrap',
          activeTab === 'siswa'
            ? 'bg-white text-green-600 border-green-300 shadow'
            : 'bg-gray-100 text-gray-600 border-gray-200',
        ]">
        <Icon name="arcticons:classchartsstudents" />
        Siswa
      </button>
      <button
        @click="activeTab = 'buat-kuis'"
        :class="[
          'flex items-center gap-1 px-3 py-2 border rounded-lg text-sm font-medium whitespace-nowrap',
          activeTab === 'buat-kuis'
            ? 'bg-white text-green-600 border-green-300 shadow'
            : 'bg-gray-100 text-gray-600 border-gray-200',
        ]">
        <Icon name="fluent:quiz-new-24-filled" />
        Buat Kuis
      </button>
      <button
        @click="activeTab = 'kuis'"
        :class="[
          'flex items-center gap-1 px-3 py-2 border rounded-lg text-sm font-medium whitespace-nowrap',
          activeTab === 'kuis'
            ? 'bg-white text-green-600 border-green-300 shadow'
            : 'bg-gray-100 text-gray-600 border-gray-200',
        ]">
        <Icon name="hugeicons:quiz-04" />
        Kuis
      </button>
    </div>

    <div class="mb-3">
      <MaterialUpload v-if="activeTab === 'upload-materi'" class="mb-3" :courseId="courseId" />
      <MaterialList v-if="activeTab === 'materi'" class="mb-3" :courseId="courseId" />
      <StudentList v-if="activeTab === 'siswa'" class="mb-3" :students="course.students" />
      <QuizCreate v-if="activeTab === 'buat-kuis'" class="mb-3" :courseId="Number(courseId)" />
      <QuizList v-if="activeTab === 'kuis'" class="mb-3" :courseId="Number(courseId)" />
    </div>
  </div>
</template>

<script setup>
import { useSwal } from "~/utils/swal";

const activeTab = ref("materi");
const route = useRoute();
const swal = useSwal();
const courseId = route.params.id;

const config = useRuntimeConfig();
const token = useCookie("access_token").value;
const course = ref([]);

const { data, error } = await useAsyncData("my-courses", () =>
  $fetch(`${config.public.backend}/api/courses/${courseId}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
);

if (error.value) {
  swal.fire({
    icon: "error",
    title: "Gagal",
    text: "Terjadi kesalahan saat memuat data kelas",
  });
} else {
  course.value = data.value;
}

definePageMeta({
  middleware: "auth",
  role: "teacher",
});
</script>
