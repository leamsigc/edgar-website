<script lang="ts" setup>
/**
 *
 * Step one  for the Seo wizard
 *
 * @author Reflect-Media <reflect.media GmbH>
 * @version 0.0.1
 *
 * @todo [ ] Test the component
 * @todo [ ] Integration test.
 * @todo [✔] Update the typescript.
 */

import { cn } from "@/lib/utils";
import { buttonVariants } from "~/components/content/ui/button";
</script>

<template>
  <div class="md:hidden">
    <NuxtImg src="img/SEO-JUICE.jpeg" />
  </div>

  <div
    class="container relative hidden h-[800px] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0"
  >
    <a
      href="/examples/authentication"
      :class="
        cn(
          buttonVariants({ variant: 'ghost' }),
          'absolute right-4 top-4 md:right-8 md:top-8'
        )
      "
    >
      Login
    </a>
    <div
      class="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex"
    >
      <div class="absolute inset-0 bg-zinc-900">
        <NuxtImg
          src="img/SEO-JUICE.jpeg"
          class="absolute inset-0 h-full w-full opacity-40"
        />
      </div>
      <div class="relative z-20 mt-auto">
        <blockquote class="space-y-2">
          <p class="text-lg">Step one to take over SEO from a competitor</p>
          <footer class="text-sm">SEO Heist</footer>
        </blockquote>
      </div>
    </div>
    <div class="lg:p-8">
      <div class="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
        <div class="flex flex-col space-y-2 text-center">
          <h1 class="text-2xl font-semibold tracking-tight">
            Enter the url from the competitor that you would like to use as target
          </h1>
          <p class="text-sm text-muted-foreground">
            Enter the base url of the competitor
          </p>
        </div>
        <UserAuthForm />
        <p class="px-8 text-center text-sm text-muted-foreground">
          By clicking continue, you agree to our
          <a href="/terms" class="underline underline-offset-4 hover:text-primary">
            Terms of Service
          </a>
          and
          <a href="/privacy" class="underline underline-offset-4 hover:text-primary">
            Privacy Policy
          </a>
          .
        </p>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
