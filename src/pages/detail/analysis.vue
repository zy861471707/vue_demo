<template>
  <div class="sales-board">
      <div class="sales-board-intro">
        <h2>流量分析</h2>
        <p>是指在获得网站访问量基本数据的情况下对有关数据进行统计、分析，从中发现用户访问网站的规律，并将这些规律与网络营销策略等相结合，从而发现目前网络营销活动中可能存在的问题，并为进一步修正或重新制定网络营销策略提供依据。当然这样的定义是站在网络营销管理的角度来考虑的</p>
      </div>
      <div class="form">
        <el-form>
          <el-form-item label="购买数量:" class="form-item">
            <el-number v-on:numChange="isNumberChange"></el-number>
          </el-form-item>
          <el-form-item label="产品类型:" class="form-item">
            <el-select v-if="buyTypes" v-bind:isSelectInit="isSelectInit" v-bind:SelectData="buyTypes" v-on:selectChange="isSelectChange"></el-select>
          </el-form-item>
          <el-form-item label="有效时间:" class="form-item">
            <el-date-picker
              
              type="daterange"
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-form-item>
          <el-form-item label="产品版本:" class="form-item">
            <el-select v-if="versionList" v-bind:SelectData="versionList" v-on:selectChange="proSelectChange"></el-select>
          </el-form-item>
          <el-form-item label="" class="form-item">
            <label slot="label">总&emsp;&emsp;价:</label>
            100元
          </el-form-item>
          <el-form-item size="large">
            
            <el-button type="primary" @click="showPayDialog">立即购买</el-button>
            <el-button type="primary" @click="sublimtBtn">测试数据</el-button>
          </el-form-item>
        </el-form>
      </div>
      <div class="sales-board-des">
        <h2>表格展示</h2>
        <el-table 
          v-if="tableList && tableList.length" :tableData="tableList" 
          :tableThead="tableThead" 
          :showSelect="isShowSelect"
          :showOperation="isShowOperation"
          :indexColumnPopover="isIndexColumnPopover">
        </el-table>
      </div>
      <!-- <my-dialog :is-show="isShowPayDialog" @on-close="hidePayDialog">
        <h3 class="buy-dialog-title">请选择银行</h3>
        <bank-chooser @on-change="onChangeBanks"></bank-chooser>
        <div class="button buy-dialog-btn" @click="confirmBuy">
          确认购买
        </div>
      </my-dialog>
      <my-dialog :is-show="isShowErrDialog" @on-close="hideErrDialog">
        支付失败！
      </my-dialog> -->
      <!-- <check-order :is-show-check-dialog="isShowCheckOrder" :order-id="orderId" @on-close-check-dialog="hideCheckOrder"></check-order> -->
  </div>
  
</template>

<script>
import ElSelect from '../../components/el-select'
import ElNumber from '../../components/el-number'
import ElTable from '../../components/el-table'
// import VMulChooser from '../../components/base/multiplyChooser'
// import Dialog from '../../components/base/dialog'
// import BankChooser from '../../components/bankChooser'
// import CheckOrder from '../../components/checkOrder'
import _ from 'lodash'
export default {
  components: {
    ElSelect,
    ElNumber,
    ElTable
    // VMulChooser,
    // MyDialog: Dialog,
    // BankChooser,
    // CheckOrder
  },
  data () {
    return {
      isNumber: 0,
      typeSelected:'',//产品类型
      proSelected:'',//产品版本
      isSelectInit:0,//初始化select选项
      tableList:'',
      tableThead:[{key:'日期',value:'date'},{key:'姓名',value:'name'},{key:'地址',value:'address'}],//指定表格表头数据，这样可以做到自动化
      isShowSelect:true,//指定表格是否展示多选列
      isShowOperation:true,//指定表格是否展示操作列
      isIndexColumnPopover:'地址',//指定表格第几列需要悬浮提示多余的内容
      // isIndexColumnPopover:['姓名','地址'],//指定表格第几列需要悬浮提示多余的内容
      productEdition:'',
      buyType: {},
      versions: [],
      period: {},
      price: 0,
      versionList: [
        {
          label: '客户版',
          value: 0
        },
        {
          label: '代理商版',
          value: 1
        },
        {
          label: '专家版',
          value: 2
        }
      ],
      periodList: [
        {
          label: '半年',
          value: 0
        },
        {
          label: '一年',
          value: 1
        },
        {
          label: '三年',
          value: 2
        }
      ],
      buyTypes: [
        {
          label: '入门版',
          value: 0
        },
        {
          label: '中级版',
          value: 1
        },
        {
          label: '高级版',
          value: 2
        }
      ],
      isShowPayDialog: false,
      bankId: null,
      orderId: null,
      isShowCheckOrder: false,
      isShowErrDialog: false
    }
  },
  methods: {
    isNumberChange (isNumberChange){
      console.log(isNumberChange)
      this.isNumber = isNumberChange;
    },
    isSelectChange(isSelected){
      this.typeSelected = isSelected;
    },
    proSelectChange(isSelected){
      this.proSelected = isSelected;
    },
    //查看提交的数据
    sublimtBtn (){
      console.log('产品版本',this.proSelected)
      console.log('类型',this.typeSelected)
    },
    //获取table数据
    getTableDataList () {
      this.http.post('api/getTableList').then(res=>{
        if(res&&res.data.result){
          this.tableList = res.data.data;
        }
      })
    },
    showPayDialog () {
      this.isShowPayDialog = true
    },
    hidePayDialog () {
      this.isShowPayDialog = false
    },
    hideErrDialog () {
      this.isShowErrDialog = false
    },
    hideCheckOrder () {
      this.isShowCheckOrder = false
    },
    onChangeBanks (bankObj) {
      this.bankId = bankObj.id
    },
    confirmBuy () {
      let buyVersionsArray = _.map(this.versions, (item) => {
        return item.value
      })
      let reqParams = {
        buyNumber: this.buyNum,
        buyType: this.buyType.value,
        period: this.period.value,
        version: buyVersionsArray.join(','),
        bankId: this.bankId
      }
      this.$http.post('/api/createOrder', reqParams)
      .then((res) => {
        this.orderId = res.data.orderId
        this.isShowCheckOrder = true
        this.isShowPayDialog = false
      }, (err) => {
        this.isShowBuyDialog = false
        this.isShowErrDialog = true
      })
    }
  },
  mounted () {
    this.buyNum = 1
    this.buyType = this.buyTypes[0]
    this.versions = [this.versionList[0]]
    this.period = this.periodList[0]
    this.getTableDataList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.buy-dialog-title {
  font-size: 16px;
  font-weight: bold;
}
.buy-dialog-btn {
  margin-top: 20px;
}
.buy-dialog-table {
  width: 100%;
  margin-bottom: 20px;
}
.buy-dialog-table td,
.buy-dialog-table th{
  border: 1px solid #e3e3e3;
  text-align: center;
  padding: 5px 0;
}
.buy-dialog-table th {
  background: #4fc08d;
  color: #fff;
  border: 1px solid #4fc08d;
}

.form {
  padding: 20px;
  font-size: 16px;
}
.form-item {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.el-form-item__label {
    padding: 0 20px 0 0;
}
</style>
