<template>
  <div class="marquee">
    <div :class="['marquee__inner', direction]" aria-hidden="true">
      <span class="marquee__inner-container">
        <slot></slot>
      </span>
      <span class="marquee__inner-container">
        <slot></slot>
      </span>
      <span class="marquee__inner-container">
        <slot></slot>
      </span>
      <span class="marquee__inner-container">
        <slot></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Marquee",
  props: {
    direction: {
      validator(value) {
        return ['right', 'left'].includes(value);
      }
    },
  }
}
</script>