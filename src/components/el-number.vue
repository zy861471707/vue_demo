<template>
    <el-input-number v-model="isNum" @change="handleChange" :min="0" label="请选择"></el-input-number>
</template>
<script>
export default {
     data() {
      return {
        isNum: 0
      };
    },
    methods: {
      handleChange(value) {
        this.$emit('numChange',value);
      }
    }
}
</script>
<style>

</style>


