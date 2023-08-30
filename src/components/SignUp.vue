<template>
    <img src="../assets/logo1.png" alt="" class="logo">
    <h1>sign up</h1>

    <div class="register">
        <input type="text" v-model="name" placeholder="Enter name">
        <input type="email" v-model="email" placeholder="Enter Email">
        <input type="password" v-model="password" placeholder="Enter Password">

        <button @click="signUp">Sign Up</button>
    </div>
</template>

<script>

import axios from 'axios';
export default {
    name:'SignUp',
    data(){
        return{
            name:'',
            email:'',
            password:''
        }
    },
    methods:{
        async signUp(){
            let res= await axios.post('http://localhost:3000/user',{
                name:this.name,
                email:this.email,
                password:this.password
            })
            console.log(res);
            if (res.status==201){
                alert('sign up done')
                localStorage.setItem('user-info',JSON.stringify(res.data))
            }

        }
    }
}

</script>

<style>
.logo{
    height: 100px;
    width: 100px;
}
.register input{
    height: 40px;
    width: 300px;
    padding-left: 20px;
    display: block;
    margin-bottom: 30px;
    margin-right: auto;
    margin-left: auto;
    border: 1px solid skyblue;
}
.register button{
    width: 320px;
    height: 40px;
    background: skyblue;
    cursor: pointer;
    color: white;
}
</style>