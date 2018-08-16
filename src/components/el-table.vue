<template>
    <el-table ref="multipleTable" :data="data" tooltip-effect="dark" max-height="600" style="width: 100%"
        @selection-change="handleSelectionChange">
    <el-table-column type="selection" v-if="showSelect">
    </el-table-column>
    <el-table-column v-for="(item,index) in tableThead" :key="index" :label="item.key">        
        <template slot-scope="scope">
            <p v-if="item.key !== indexColumnPopover">{{ scope.row[item.value] }}</p>            
            <el-popover trigger="hover" placement="top" :openDelay="openDelay">
                <p v-if="item.key === indexColumnPopover">{{ item.key }}: {{ scope.row[item.value] }}</p>
                <div slot="reference" class="name-wrapper el-tooltip" v-if="item.key === indexColumnPopover">
                    {{ scope.row[item.value] }}
                </div>
            </el-popover>
        </template>
    </el-table-column>
    <el-table-column label="操作" v-if="showOperation">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<script>
export default {
    props:{
        //表格数据
        tableData:{
            type:Array,
            default:function(){
                return [];
            }
        },
        //表头需要展示的数据
        tableThead:{
            type:[Array,Object],
            default:function(){
                return [];
            }
        },
        //是否展示多选列
        showSelect:{
            type:Boolean,
            default:function(){
                return true;
            }
        },
        //是否展示操作列
        showOperation:{
            type:Boolean,
            default:function(){
                return true;
            }
        },
        //第几列需要弹出提示框
        indexColumnPopover:{
            type:String,
            // type:Array,
            default:function(){
                return [];
            }
        }
    },
    data() {
        return {
            radio:'',
            data: [],
            multipleSelection: [],
            openDelay:500//显示延迟时间
        };
    },
    methods:{
        // toggleRowSelection
        handleSelectionChange(val){                      
            this.multipleSelection = [...val];
            console.log(this.multipleSelection)
        },  
        handleEdit(index, row) {
            console.log('edit',index, row);
        },
        handleDelete(index, row) {
            console.log('delete',index, row);
        }
    },
    created(){
        console.log(this.indexColumnPopover);
        this.data = [...this.tableData];
        console.log(this.tableThead)
    }
};
</script>
<style>
    .el-table th.gutter {
        display: table-cell!important;
    }
    .el-table td, .el-table th.is-leaf {
        text-align: center;
    }
    .el-tooltip {
        white-space: nowrap;
        min-width: 50px;
    }
</style>
