<template>
    <el-select v-model="selected" placeholder="请选择" @change="handleChange">
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
        },
        isSelectInit:{
            type:[Number,String],
            default() {
                return 0
            }
        }
    },
    data(){
        return {
            selected:''
        }
    },
    methods:{
        handleChange(){
            this.$emit("selectChange",this.selected)
        }
    },
    created(){
        //这里进行初始化,这里还需要进行push一条‘全部’的数据,采用循环data里面的属性进行赋值，然后再push进去
        this.selected = this.isSelectInit;
        console.log(this.selected)
    }

}
</script>
<style>

</style>

