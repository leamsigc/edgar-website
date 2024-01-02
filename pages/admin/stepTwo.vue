<script lang="ts" setup>
import { HeaderColumns } from "~/composables/ComposableTable";

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

interface SITEMAP {
  url: string;
  title: string;
  priority: number;
}
const seoPagesStore = useSeoPages();
const { siteMap } = storeToRefs(seoPagesStore);

const header = HeaderColumns<SITEMAP>();
</script>

<template>
  <div>
    <DataTable :data="[]" :columns="header" />
  </div>
</template>
<style scoped></style>
