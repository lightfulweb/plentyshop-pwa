<template>
  <div v-if="cart?.items?.length ?? 0 > 0" class="md:grid md:grid-cols-12 md:gap-x-6" data-testid="cart-page-content">
    <div class="col-span-7 mb-10 md:mb-0">
      <div v-for="cartItem in cart?.items" :key="cartItem.id">
        <UiCartProductCard :cart-item="cartItem" />
      </div>
    </div>
    <div class="relative col-span-5 md:sticky md:top-20 h-fit" :class="{ 'pointer-events-none opacity-50': loading }">
      <SfLoaderCircular v-if="loading" class="absolute top-[130px] right-0 left-0 m-auto z-[999]" size="2xl" />
      <OrderSummary v-if="cart" :cart="cart">
        <SfButton :tag="NuxtLink" :to="localePath(paths.checkout)" size="lg" class="w-full mb-4 md:mb-0">
          {{ $t('goToCheckout') }}
        </SfButton>

        <PayPalExpressButton class="mt-4" type="CartPreview" />
      </OrderSummary>
    </div>
  </div>
  <div v-else class="flex items-center justify-center flex-col pt-24 pb-32" data-testid="cart-page-content">
    <NuxtImg src="/images/empty-cart.svg" :alt="$t('emptyCartImgAlt')" width="192" height="192" />
    <h2 class="mt-8">{{ $t('emptyCart') }}</h2>
  </div>
</template>

<script lang="ts" setup>
import { SfButton } from '@storefront-ui/vue';
import { SfLoaderCircular } from '@storefront-ui/vue';
import { useCart } from '~/composables';

const localePath = useLocalePath();

const { data: cart, loading } = useCart();

const NuxtLink = resolveComponent('NuxtLink');
</script>
