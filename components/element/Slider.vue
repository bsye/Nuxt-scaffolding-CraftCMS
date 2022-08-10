<template>
    <div ref="swiper" class="swiper" :class="{centered}">
        <div class="swiper-wrapper">
            <slot/>
        </div>
    </div>
</template>

<script>
import Swiper from 'swiper/swiper-bundle.min';
import 'swiper/swiper-bundle.min.css';

export default {
  props: {
    centered: {
        type: Boolean,
    },
  },

  async mounted() {
    await this.$nextTick();
    new Swiper(this.$refs.swiper, {
        slidesPerView: this.centered ? 'auto' : 1.08,
        autoplay: true,
        loop: this.centered ? true : false,
        loopedSlides: this.centered ? 8 : 0,
        centeredSlides: this.centered ? this.centered : false,
        spaceBetween: 20,
        breakpoints: {
            1280 : {
                slidesPerView: this.centered ? 'auto' : 4,
                spaceBetween: 40,
            },

            1024 : {
                slidesPerView: this.centered ? 'auto' : 3.24,
                spaceBetween: 40,
            },

            768 : {
                slidesPerView: this.centered ? 'auto' : 2.16,
            },
        }
    });
  },
}
</script>

<style lang="scss">
    .swiper {
        &:not(.centered) {
            margin-left: -20px !important;
            padding-right: 20px !important;
            margin-right: -20px !important;

            @screen sm {
                margin-right: 0 !important;
                padding-right: 0 !important;
                margin-left: 0 !important;
            }
        }

        &.centered {
            .swiper-wrapper {
                @apply
                  w-1/2;

                .swiper-slide {
                    @apply
                      w-auto;
                }
            }
        }

        .swiper-slide {
            @apply
              sm:pr-0;
        }

        .swiper-wrapper {
            @apply
              ml-[20px]
              
              sm:ml-0;
        }
    }
</style>