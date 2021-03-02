import { defineComponent, h, ref, computed } from "@vue/runtime-core";

import { PAGE, getPageComponent } from "./page/index.js";

export default defineComponent({
  setup() {
    const currentPageName = ref(PAGE.start);
    const currentPage = computed(() => {
      return getPageComponent(currentPageName.value);
    });
    const handleNextPage = (nextPage) => {
      currentPageName.value = nextPage;
    };

    return {
      handleNextPage,
      currentPage,
    };
  },
  render(ctx) {
    const vnode = h("Container", [
      h(ctx.currentPage, { onNextPage: ctx.handleNextPage }),
    ]);
    return vnode;
  },
});
