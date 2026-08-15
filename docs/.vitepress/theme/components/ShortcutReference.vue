<script setup lang="ts">
import { shortcutIntroduction, shortcutSections, shortcutSlug } from '../shortcuts'
</script>

<template>
  <p>{{ shortcutIntroduction }}</p>

  <section v-for="section in shortcutSections" :key="section.title">
    <h2 :id="shortcutSlug(section.title)" tabindex="-1">
      {{ section.title }}
      <a
        class="header-anchor"
        :href="`#${shortcutSlug(section.title)}`"
        :aria-label="`Permalink to ${section.title}`"
      >​</a>
    </h2>

    <p v-if="section.introduction">{{ section.introduction }}</p>

    <table>
      <thead>
        <tr>
          <th>Action</th>
          <th>macOS</th>
          <th>Windows / Linux</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="shortcut in section.shortcuts" :key="shortcut.action">
          <td>{{ shortcut.action }}</td>
          <td><code>{{ shortcut.mac }}</code></td>
          <td><code>{{ shortcut.windows }}</code></td>
        </tr>
      </tbody>
    </table>

    <template v-for="(supplement, index) in section.supplements" :key="index">
      <h3 v-if="supplement.title" :id="shortcutSlug(supplement.title)" tabindex="-1">
        {{ supplement.title }}
        <a
          class="header-anchor"
          :href="`#${shortcutSlug(supplement.title)}`"
          :aria-label="`Permalink to ${supplement.title}`"
        >​</a>
      </h3>
      <template v-if="supplement.example">
        <p v-if="supplement.paragraphs?.[0]">{{ supplement.paragraphs[0] }}</p>
        <pre><code>{{ supplement.example }}</code></pre>
        <p v-for="paragraph in supplement.paragraphs?.slice(1)" :key="paragraph">{{ paragraph }}</p>
      </template>
      <p v-else v-for="paragraph in supplement.paragraphs" :key="paragraph">{{ paragraph }}</p>

      <table v-if="supplement.items && supplement.title === 'Search syntax cheat sheet'">
        <thead>
          <tr><th>To…</th><th>Use</th></tr>
        </thead>
        <tbody>
          <tr v-for="item in supplement.items" :key="item.label">
            <td>{{ item.label }}</td>
            <td><code>{{ item.value }}</code></td>
          </tr>
        </tbody>
      </table>

      <ul v-else-if="supplement.items">
        <li v-for="item in supplement.items" :key="item.label">
          <strong>{{ item.label }}:</strong> {{ item.value }}
        </li>
      </ul>

    </template>
  </section>
</template>
