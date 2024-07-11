import { defineConfig } from "@twind/core";
import presetAutoprefix from "@twind/preset-autoprefix";
import presetTailwind from "@twind/preset-tailwind";
export default defineConfig({
  presets: [presetAutoprefix(), presetTailwind()],
  theme: {
    extend: {
      colors: {
        primary: "var(--color-primary)",
        secondary: "var(--color-secondary)",
      },
      fontFamily: {
        sans: ["montserrat", "sans-serif"],
      },
    },
  },
});

twind.install({
  hash: false,
  rules: [
    ["fk-required-star", { color: "red", },], ['container-wrapper', 'mx-auto w-full xl:max-w-[1140px] lg:max-w-[960px] md:max-w-[720px] xs:max-w-[540px]'], ['container-row', 'flex flex-wrap'],
    ['mode-dark', 'bg-dark text-white'], ['mode-light', 'bg-white text-dark'], ['nav-cards > div', 'py-6'], ['btn-small', 'py-[7px] px-[30px]'],
    ['nav-cards', 'mt-6 mx-auto mb-0 lg:mt-8'], ['fx-account-links', 'lg:(absolute bg-silver-darkest z-[999] -bottom-[65px] right-0 left-0 w-full flex)'],
    ['btn-primary', 'border-2 border-solid border-primary bg-primary text-white'], ['btn-outline-primary', 'bg-white text-primary border-2 border-solid border-primary hover:(bg-primary border-2 border-solid border-primary text-white)'], ['font-montserrat', 'font-family: "MontserratVF", sans-serif']
    ['btn-blue', 'border-2 border-solid border-blue bg-blue text-white'], ['btn-outline-blue', 'border-2 border-solid border-blue text-blue bg-white hover:(border-2 border-solid border-blue bg-blue text-white)'],
    ['content-wide', 'mx-auto relative z-[1] md:max-w-[1000px]'], ['content-narrow', 'mx-auto relative z-[1] md:max-w-[704px]'],
    ['top-spacing', 'lg:pt-24 max-[1100.98px]:(px-[1em] pt-[2.5em])'], ['bottom-spacing', 'lg:pb-24 max-[1100.98px]:(px-[1em] pb-[2.5em])'], ['background-spacing', 'lg:py-24 max-[1100.98px]:(px-[1em] py-[2.5em])'],
    ['column-12', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[100%] max-w-[100%]'], ['column-11', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[91.66666667%] max-w-[91.66666667%]'],
    ['column-10', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[83.33333333%] max-w-[83.33333333%]'], ['column-9', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[75%] max-w-[75%]'],
    ['column-8', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[66.666667%] max-w-[66.666667%]'], ['column-7', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[58.33333333%] max-w-[58.33333333%]'],
    ['column-6', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[50%] max-w-[50%]'], ['column-5', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[41.6666666667%] max-w-[41.6666666667%]'],
    ['column-4', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[33.333333%] max-w-[33.333333%]'], ['column-3', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[25%] max-w-[25%]'],
    ['column-2', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[16.66666667%] max-w-[16.66666667%]'], ['column-1', 'py-4 px-4 w-full relative shrink-0 grow-0 basis-[8.33333333%] max-w-[8.33333333%]'],
    ['column-xl-12', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[100%] max-w-[100%])'], ['column-xl-11', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[91.66666667%] max-w-[91.66666667%])'],
    ['column-xl-10', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[83.33333333%] max-w-[83.33333333%])'], ['column-xl-9', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[75%] max-w-[75%])'],
    ['column-xl-8', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[66.666667%] max-w-[66.666667%])'], ['column-xl-7', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[58.33333333%] max-w-[58.33333333%])'], ['column-xl-6', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[50%] max-w-[50%])'], ['column-xl-5', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[41.6666666667%] max-w-[41.6666666667%])'],
    ['column-xl-4', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[33.333333%] max-w-[33.333333%])'], ['column-xl-3', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[25%] max-w-[25%])'],
    ['column-xl-2', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[16.66666667%] max-w-[16.66666667%])'], ['column-xl-1', 'py-4 px-4 w-full relative xl:(shrink-0 grow-0 basis-[8.33333333%] max-w-[8.33333333%])'], ['column-lg-12', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[100%] max-w-[100%])'], ['column-lg-11', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[91.66666667%] max-w-[91.66666667%])'],
    ['column-lg-10', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[83.33333333%] max-w-[83.33333333%])'], ['column-lg-9', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[75%] max-w-[75%])'],
    ['column-lg-8', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[66.666667%] max-w-[66.666667%])'], ['column-lg-7', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[58.33333333%] max-w-[58.33333333%])'], ['column-lg-6', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[50%] max-w-[50%])'], ['column-lg-5', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[41.6666666667%] max-w-[41.6666666667%])'],
    ['column-lg-4', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[33.333333%] max-w-[33.333333%])'], ['column-lg-3', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[25%] max-w-[25%])'],
    ['column-lg-2', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[16.66666667%] max-w-[16.66666667%])'], ['column-lg-1', 'py-4 px-4 w-full relative lg:(shrink-0 grow-0 basis-[8.33333333%] max-w-[8.33333333%])'], ['column-md-12', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[100%] max-w-[100%])'], ['column-md-11', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[91.66666667%] max-w-[91.66666667%])'],
    ['column-md-10', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[83.33333333%] max-w-[83.33333333%])'], ['column-md-9', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[75%] max-w-[75%])'],
    ['column-md-8', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[66.666667%] max-w-[66.666667%])'], ['column-md-7', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[58.33333333%] max-w-[58.33333333%])'], ['column-md-6', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[50%] max-w-[50%])'], ['column-md-5', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[41.6666666667%] max-w-[41.6666666667%])'],
    ['column-md-4', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[33.333333%] max-w-[33.333333%])'], ['column-md-3', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[25%] max-w-[25%])'],
    ['column-md-2', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[16.66666667%] max-w-[16.66666667%])'], ['column-md-1', 'py-4 px-4 w-full relative md:(shrink-0 grow-0 basis-[8.33333333%] max-w-[8.33333333%])'], ['column-sm-12', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[100%] max-w-[100%])'], ['column-sm-11', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[91.66666667%] max-w-[91.66666667%])'],
    ['column-sm-10', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[83.33333333%] max-w-[83.33333333%])'], ['column-sm-9', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[75%] max-w-[75%])'],
    ['column-sm-8', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[66.666667%] max-w-[66.666667%])'], ['column-sm-7', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[58.33333333%] max-w-[58.33333333%])'], ['column-sm-6', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[50%] max-w-[50%])'], ['column-sm-5', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[41.6666666667%] max-w-[41.6666666667%])'],
    ['column-sm-4', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[33.333333%] max-w-[33.333333%])'], ['column-sm-3', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[25%] max-w-[25%])'],
    ['column-sm-2', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[16.66666667%] max-w-[16.66666667%])'], ['column-sm-1', 'py-4 px-4 w-full relative sm:(shrink-0 grow-0 basis-[8.33333333%] max-w-[8.33333333%])'], ['column', 'max-w-full grow-0 basis-0 px-4 w-full relative'], ['accordion-section', 'relative cursor-pointer rounded-none bg-transparent border-0 border-b-1 py-3 before:(bg-transparent w-0)'], ['accordion-content', 'px-0 py-5 hidden'],
    ['check-list', 'ml-[1.2em] my-[1rem]'], ['list-unstyled', ' pl-0 list-none'], ['nav-cards', 'justify-center mx-auto my-4 min-[1101px]:my-[24px] lg:max-w-[1200px] md:max-w-[1120px]'],
    ['cta-section', 'mx-auto text-center p-[1.75em]'], ['cta-finger-print', 'bg-cover absolute top-0 bottom-0 left-0 right-0'], ['custom-image-banner', 'relative pt-14 pb-12 px-4 xl:(pb-16 pt-24)'], ['custom-banner-image', 'p-0 bottom-0 left-0 right-0 top-0'], ['mega-menu', 'flex items-center'],
    ['master-nav', 'md:h-16 p-0 top-0 left-0 right-0 z-[1030] shadow-[0_2px_6px_0_rgba(0,0,0,.6)] text-[0.8rem] lg:(!flex-row flex-wrap justify-start) justify-between min-[1300px]:text-[0.9rem]'],

  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'primary': '#aa7a1a',
        'blue': '#115577',
        'dark': '#000000',
        'white': '#ffffff',
        'light-blue': '#a7bcc6',
        'blue-dark': '#0d4764',
        'blue-darkest': '#043246',
        'gray': '#404040',
        'silver': '#ccc',
        'silver-light': '#eee',
        'silver-lighter': '#e8e8e8',
        'silver-lightest': '#fbfbfb',
        'silver-dark': '#888',
        'silver-darker': '#555',
        'silver-darkest': '#333',
      },
    },
    fontFamily: { montserrat: '"MontserratVF", sans-serif', },
    screens: { 'xs': '0', 'sm': '576px', 'md': '768px', 'lg': '1101px', 'xl': '1200px', '1xl': '1362px', '2xl': '1500px', },
  }
});