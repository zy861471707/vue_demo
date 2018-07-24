<template>
    <el-form ref="form" :model="form" :rules="rules" label-width="80px" class="demo-ruleForm" label-position="left">
        <el-form-item label="用户名" prop="name">
            <el-input type="text" placeholder="请输入用户名" clearable v-model="form.name"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
            <el-input type="password" placeholder="请输入密码" clearable v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="onSubmit('form')">登录</el-button>
            <el-button>忘记密码</el-button>
        </el-form-item>
    </el-form>
</template>
<script>
export default {
    data(){
        return {
            form:{
                name:'',
                password:''
            },
            rules:{
                name:[
                    {required:true,message:"请输入用户名",trigger:"blur"}
                ],
                password:[
                    {required:true,message:"密码不能为空",trigger:"blur"},
                    { min: 6, max: 18, message: '最小为6位，最大为18位', trigger: 'blur' }
                ]
            }
        }
    },
    methods:{
        onSubmit(formName){
            console.log(this.$refs)
            this.$refs[formName].validate((valid)=>{
                console.log(valid)
            })
        }
    }
}
</script>
<style>

</style>

