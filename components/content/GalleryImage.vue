<script lang="ts" setup>
/**
 *
 * Component Description:Desc
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */
import Lightgallery from "lightgallery/vue";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

interface Props {
  images: Array<{
    id: number;
    src: string;
    size: string;
    thumb: string;
    alt: string;
    html: string;
  }>;
}
const props = defineProps<Props>();
const { images } = toRefs(props);
const plugins = [lgThumbnail, lgZoom];

const onInit = (detail: any) => {
  //   if (detail) {
  //     console.log("calling method", detail.instance);
  //     detail.instance.openGallery();
  //   }
};

const onBeforeSlide = () => {
  console.log("calling before slide");
};
</script>

<template>
  <section class="max-w-screen-2xl mx-auto px-14 py-20">
    <lightgallery
      :settings="{ speed: 500, plugins: plugins, pager: false, thumbnail: false }"
      :onInit="onInit"
      :onBeforeSlide="onBeforeSlide"
      class="grid grid-cols-5 gap-2"
    >
      <a
        v-for="item in images"
        :key="item.id"
        :data-lg-size="item.size"
        className="gallery-item"
        :data-src="item.src"
        :data-tweet-text="item.alt"
        :data-sub-html="item.html"
      >
        <img className="img-responsive" :src="item.thumb" :alt="item.alt" />
      </a>
    </lightgallery>
  </section>
</template>
<style lang="css" scoped>
@import "lightgallery/css/lightgallery.css";
@import "lightgallery/css/lg-thumbnail.css";
@import "lightgallery/css/lg-zoom.css";
</style>
