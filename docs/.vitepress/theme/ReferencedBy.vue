<script setup>
import { useData } from 'vitepress'

const { frontmatter } = useData()
</script>

<template>
  <section
    v-if="frontmatter.referencedBy?.length"
    class="vg-referenced-by"
    aria-labelledby="vg-referenced-by-title"
  >
    <h2 id="vg-referenced-by-title">Referenced by</h2>
    <ul>
      <li v-for="reference in frontmatter.referencedBy" :key="reference.href">
        <a :href="reference.href">{{ reference.title }}</a>
      </li>
    </ul>
  </section>
</template>
