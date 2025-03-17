<template>
    <div class="login-container">
        <el-form :model="ruleForm2" :rules="rules2" status-icon ref="ruleForm2" label-position="left" label-width="0px"
            class="demo-ruleForm login-page">
            <h3 class="title">登录</h3>
            <br />
            <el-form-item prop="">
                <el-input type="text" v-model="ruleForm2.username" auto-complete="off" placeholder="user name">
                </el-input>
            </el-form-item>
            <el-form-item prop="password">
                <el-input type="password" v-model="ruleForm2.password" auto-complete="off" placeholder="password">
                </el-input>
            </el-form-item>
            <!-- <el-checkbox v-model="checked" class="rememberme">记住密码</el-checkbox><br> -->

            <!-- <el-form-item style="width:100%;">
                <el-radio-group v-model="radio" size="small" @change="changeTheme">
                    <el-radio v-model="radio" label="1" >学生</el-radio>
                    <el-radio v-model="radio" label="2">老师</el-radio>
                </el-radio-group>
            </el-form-item> -->


            <el-form-item style="width:100%;">
                <el-button type="primary" style="width:100%;" @click="handleSubmit" :loading="logining">登录</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>
 
<script>

export default {
//    最简单 data(){
//         return {
//             logining: false,
//             ruleForm2: {
//                 username: 'admin',
//                 password: '123456',
//             },
//             rules2: {
//                 username: [{required: true, message: 'Please enter the account number', trigger: 'blur'}],
//                 password: [{required: true, message: 'Please input a password', trigger: 'blur'}]
//             },
//             checked: false
//         }
//     },
//     methods: {
//         handleSubmit(event){
//             this.$refs.ruleForm2.validate((valid) => {
//                 if(valid){
//                     this.logining = true;
//                     if(this.ruleForm2.username === 'admin' && 
//                        this.ruleForm2.password === '123456'){
//                            this.logining = false;
//                            sessionStorage.setItem('user', this.ruleForm2.username);
//                            this.$router.push({path: '/main'});
//                     }else{
//                         this.logining = false;
//                         this.$alert('Wrong user name or password!', 'Tips', {
//                             confirmButtonText: 'ok'
//                         })
//                     }
//                 }else{
//                     console.log('error submit!');
//                     return false;
//                 }
//             })
//         }
//     }
// }



    data() {
        return {
            logining: false,
            ruleForm2: {
                username: 'admin',
                password: '123456',
            },
            rules2: {
                username: [{ required: true, message: 'Please enter the account number', trigger: 'blur' }],
                password: [{ required: true, message: 'Please input a password', trigger: 'blur' }]
            },
            checked: false,

            radio: '1'
        }
    },
    methods: {
        changeTheme(val) {
            console.log(val);
        },
        handleSubmit() {
            if (this.radio == '1') {
                localStorage.setItem('userid', this.ruleForm2.username)
                console.log('id值为',localStorage.getItem('userid'))

                localStorage.setItem('usertype', 1)
                
                const xhr = new XMLHttpRequest()
                xhr.open('GET', `http://localhost:3000/login?username=${this.ruleForm2.username}&password=${this.ruleForm2.password}`)
                xhr.send(null)

                const that = this
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        console.log(xhr.response)
                        const res = JSON.parse(xhr.response)
                        if (res.status !== 200) {
                            return that.$message(res.message)
                        }
                        that.$router.push({ path: '/main' });
                    }
                }

            }
            else if (this.radio == '2') {
                localStorage.setItem('usertype', 2)

                 const xhr = new XMLHttpRequest()
                xhr.open('GET', `http://localhost:3000/login1?username=${this.ruleForm2.username}&password=${this.ruleForm2.password}`)
                xhr.send(null)

                const that = this
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        console.log(xhr.response)
                        const res = JSON.parse(xhr.response)
                        if (res.status !== 200) {
                            return that.$message(res.message)
                        }

                        that.$router.push({ path: '/main' });
                    }
                }

            }
        }
    }
}




////////


            // const xhr = new XMLHttpRequest()
            // xhr.open('GET', `http://localhost:3000/login?username=${this.ruleForm2.username}&password=${this.ruleForm2.password}`)
            // xhr.send(null)

            // const that = this
            // xhr.onreadystatechange = function () {
            //     if (xhr.readyState === 4) {
            //         console.log(xhr.response)
            //         const res = JSON.parse(xhr.response)
            //         if (res.status !== 200) {
            //             return that.$message(res.message)
            //         }

            //         that.$router.push({ path: '/main' });
            //     }
            // }

            // if (this.radio === 1) {
            //     localStorage.setItem('usertype', 1)

            //     this.$refs.ruleForm2.validate((valid) => {
            //         if (valid) {
            //             this.logining = true;
            //             if (this.ruleForm2.username === 'admin' &&
            //                 this.ruleForm2.password === '123456') {
            //                 this.logining = false;
            //                 sessionStorage.setItem('user', this.ruleForm2.username);
            //                 this.$router.push({ path: '/main' });
            //             }
            //             else {
            //                 this.logining = false;
            //                 this.$message('用户名或密码错误', '提示', {
            //                     confirmButtonText: 'ok'
            //                 })
            //             }
            //         } else {
            //             console.log('提交错误!');
            //             return false;
            //         }
            //     })
            // }
            // else if (this.radio === 2) {
            //     localStorage.setItem('usertype', 2)
            //     this.$refs.ruleForm2.validate((valid) => {
            //         if (valid) {
            //             this.logining = true;
            //             if (this.ruleForm2.username === 'admin' &&
            //                 this.ruleForm2.password === '123456') {
            //                 this.logining = false;
            //                 sessionStorage.setItem('user', this.ruleForm2.username);

            //                 this.$router.push({ path: '/main' });

            //             }
            //             else {
            //                 this.logining = false;
            //                 this.$message('用户名或密码错误', '提示', {

            //                     confirmButtonText: 'ok'
            //                 })
            //             }
            //         } else {
            //             console.log('提交错误!');
            //             return false;
            //         }
            //     })
            // }
//         }
//     }
//}


</script>
 
<style scoped>
.login-container {
    background: url("~@/assets/images/login.jpg") no-repeat;
    background-position: center;
    height: 100%;
    width: 100%;
    background-size: cover;
    position: fixed;


    /* 登录框上下对齐 */
    display: flex;
    align-items: center;
}

.login-page {
    -webkit-border-radius: 5px;
    border-radius: 5px;
    margin: 0px auto;
    width: 350px;
    padding: 20px 35px 35px 15px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
}

label.el-checkbox.rememberme {
    margin: 0px 0px 15px;
    text-align: left;
}
</style>