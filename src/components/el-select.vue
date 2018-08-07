<template>
    <el-select v-model="selected" placeholder="请选择" @change="handleChange">
        <el-option
        v-for="item in selectedList"
        :key="item.value"
        :label="item.label"
        :value="item.value">
        </el-option>
    </el-select>
</template>
<script>
export default {
    props:{
        SelectData:{
            type:Array,
            default() {
                return []
            }
        },
        //初始化值，即取Array中的第一个值,或指定的某个值
        isSelectInit:{
            type:[Number,String],
            default() {
                return '全部'
            }
        }
    },
    data(){
        return {
            selected:'',
            selectedList:[]
        }
    },
    methods:{
        handleChange(){
            this.$emit("selectChange",this.selected)
        }
    },
    created(){
        this.selectedList = [...this.SelectData];
        let dataObj = {
            label:'全部',
            value:''
        };
        for(let [index,value] of this.selectedList.entries()){
            dataObj.value += value.value +',';
        }
        dataObj.value = dataObj.value.slice(0,-1);
        //添加到数组首位
        this.selectedList.unshift(dataObj);
        //处理父组件传过来的是0还是‘全部’
        // console.log(typeof this.isSelectInit)
        if(typeof this.isSelectInit === 'number'){
            for(let [index,value] of this.selectedList.entries()){
                if(this.isSelectInit === value.value){
                    this.selected = value.value;
                }
            }
        }else{
            for(let [index,value] of this.selectedList.entries()){
                if(this.isSelectInit === value.label){
                    this.selected = value.value;
                }
            }
        }
        //防止用户采用默认设置,不触发传值操作
        this.handleChange();
    }
}
</script>
<style>

</style>

