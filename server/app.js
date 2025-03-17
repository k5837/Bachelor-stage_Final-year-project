const express=require('express')

const app=express()

app.all('*',(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin",'*')
    next()
})

app.get('/',(req,res)=>{
    console.log('接口被调用')
    
    res.send('接口调用成功')
})

app.get('/login',(req,res)=>{
    console.log('登录接口被调用')

    const{username,password}=req.query

    const usernameServer=['101801','101802','101803','101804','101805','101806','101807','101808','101809','101810',
    '101811','101812','101813',]
    const passwordServer='123456'

    console.log(username,password)
    if(!usernameServer.includes(username)){
        return res.send({status:403,message:'用户不存在'})
    }

    if(password!==passwordServer){
        return res.send({status:403,message:'密码错误'})
    }

    
    res.send({status:200,message:'登录成功'})
})

app.listen(3000,()=>{console.log('服务器启动成功')})


app.get('/login1',(req,res)=>{
    console.log('登录接口被调用')

    const{username,password}=req.query

    const usernameServer=['201801','201802','201803',]
    const passwordServer='123456'

    console.log(username,password)
    if(!usernameServer.includes(username)){
        return res.send({status:403,message:'用户不存在'})
    }

    if(password!==passwordServer){
        return res.send({status:403,message:'密码错误'})
    }

    
    res.send({status:200,message:'登录成功'})
})
