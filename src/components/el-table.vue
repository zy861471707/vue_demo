<template>
    <el-table ref="multipleTable" :data="data" tooltip-effect="dark" max-height="600" style="width: 100%"
        @selection-change="handleSelectionChange">
    <el-table-column type="selection">
    </el-table-column>
    <el-table-column prop="date" label="日期">
      <!-- <template slot-scope="scope">{{ scope.row.date }}</template> -->
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
    </el-table-column>
    <el-table-column label="操作">
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
        tableData:{
            type:Array,
            default:function(){
                return [];
            }
        },
        tableThead:{
            type:[Array,Object],
            default:function(){
                return [];
            }
        }
    },
    data() {
        return {
            data: [],
            multipleSelection: [],
            openDelay:500
        };
    },
    methods:{
        // toggleRowSelection
        handleSelectionChange(val){
            console.log(val)
        },        
        handleEdit(index, row) {
            console.log('edit',index, row);
        },
        handleDelete(index, row) {
            console.log('delete',index, row);
        }
    },
    created(){
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
