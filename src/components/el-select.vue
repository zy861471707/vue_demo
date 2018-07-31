<template>
    <el-select v-model="selected" placeholder="请选择">
        <el-option
        v-for="item in SelectData"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
</template>
<script>
export default {
    // 还需要加一个是否需要初始化值，即取Array中的第一个值,或指定的某个值
    props:{
        SelectData:{
            type:Array,
            default() {
                return []
            }
        }
    },
    data(){
        return {
            selected:''
        }
    }
}
</script>
<style>

</style>

