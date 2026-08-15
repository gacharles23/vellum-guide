<script setup>
import { useData } from 'vitepress'
const { frontmatter } = useData()
</script>

<template>
  <div class="vg-byline" v-if="frontmatter.authors?.length || frontmatter.version">
    <span>Written by the <a href="/contributors">Vellum community</a></span>
    <template v-if="frontmatter.authors?.length">
      <span class="vg-dot">·</span>
      <span class="vg-names">{{ frontmatter.authors.join(', ') }}</span>
    </template>
    <template v-if="frontmatter.version">
      <span class="vg-dot">·</span>
      <span class="vg-chip">checked against {{ frontmatter.version }}</span>
    </template>
  </div>
</template>
