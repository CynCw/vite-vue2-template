import antfu from '@antfu/eslint-config'

export default antfu({
  vue: {
    sfcBlocks: {
      blocks: {
        styles: false,
      },
    },
    vueVersion: 2,
  },
})
