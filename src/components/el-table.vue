<template>
    <el-table ref="multipleTable" :data="data" tooltip-effect="dark" max-height="600" style="width: 100%"
        @selection-change="handleSelectionChange">
    <el-table-column type="selection" v-if="showSelect">
    </el-table-column>
    <!--<el-table-column label="">
        <template scope="scope">
        <el-radio :label="scope.row.id" v-model="radio" @change.native="getCurrentRow(scope.$index, scope.row)">&thinsp;</el-radio>
        </template>
    </el-table-column>
    <el-table-column prop="date" label="日期">
    </el-table-column>
    <el-table-column prop="name" label="姓名">
    </el-table-column>
    <el-table-column prop="address" label="地址">
        <template slot-scope="scope">
        <el-popover trigger="hover" placement="top" :openDelay="openDelay">
          <p>地址: {{ scope.row.address }}</p>
          <div slot="reference" class="name-wrapper el-tooltip">
            {{ scope.row.address }}
          </div>
        </el-popover>
      </template>
    </el-table-column>-->
    <el-table-column v-for="(item,index) in tableThead" :key="index" :label="item.key">
        <template slot-scope="scope">{{scope.row[item.value]}}</template>
        <!--<template slot-scope="scope" v-if="indexColumnPopover[0] === index+1">
            <el-popover trigger="hover" placement="top" :openDelay="openDelay">
            <p>{{item.key}}: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper el-tooltip">
                {{ scope.row.address }}
            </div>
            </el-popover>
        </template>-->
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
            type:Array,
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
            openDelay:500
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
        },
        getCurrentRow(index, row){
            console.log('radio',index, row);
        }
    },
    created(){
        console.log(this.indexColumnPopover);
        this.data = [...this.tableData];
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
