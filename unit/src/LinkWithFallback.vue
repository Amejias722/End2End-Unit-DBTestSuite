<template>
  <a
    v-if="link"
    :href="link"
    :class="{ external: link.startsWith('http') }"
  >
    {{ text || 'link' }}
  </a>
  <span v-else>
    {{ text || 'no link' }}
  </span>
</template>

<script>
/**
 * This is an internal component, only used by people on this team. So we don't need to worry about
 * stress testing it, but it would be nice to have some "happy path" tests in place.
 */
export default {
  name: 'ExampleComponent',
  props: {
    link: {
      type: String,
      default: undefined
    },
    text: {
      type: String,
      default: undefined
    }
  }
};
</script>

<style>
.external {
  border-bottom: 1px dotted currentColor;
  text-decoration: none;
}
</style>
