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
            selected:'',
            wholeParent:''
        }
    },
    methods:{
        handleChange(){
            this.$emit("selectChange",this.selected)
        }
    },
    created(){
        this.selected = this.isSelectInit;
        let dataObj = {
            label:'全部',
            value:''
        };
        for(let [index,elem] of this.SelectData.entries()){
            dataObj.value += elem.value +',';
        }
        dataObj.value = dataObj.value.slice(0,-1);
        this.SelectData.unshift(dataObj);//添加到数组首位
    }

}
</script>
<style>

</style>

