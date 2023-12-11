<script lang="ts" setup>
/**
 *
 * Step 2 Let user select the urls that we need to use to generate the SEO juice
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
const seoPagesStore = useSeoPages();
const { siteMap } = storeToRefs(seoPagesStore);
</script>

<template>
  <div>content</div>
</template>
<style scoped></style>
