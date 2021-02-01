<!--
 * @Author: your name
 * @Date: 2021-02-01 15:09:32
 * @LastEditTime: 2021-02-01 15:12:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \gan\src\packages\radioGroup.vue
-->
<template>
    <div class="one-radio-group">
      <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'oneRadioGroup',
    provide() {
      return {
        RadioGroup: this
      }
    },
    props: {
      value: null
    },
    data() {
        return {

        };
    },
    created() {

    },
    mounted() {

    },
    methods: {

    }
};
</script>

<style scoped lang="less">

</style>
