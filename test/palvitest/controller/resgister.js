userarray=[{
     "first_name":'Palvi',
     "last_name":'Sagar',
     "email":"palvi@gmail.com",
     "password":123,
     "contact":0987654321,
     "address":"bilga",
}]

function registerUser(req,res){
    res.json({
        'status':200,
        'sucess':true,
        'msg':"user inserted",
        "detail":res.data,
    })
}

function listUser(req,res){
    userarry.puch(res.data)
    res.json({
        'status':200,
        'sucess':true,
        'msg':"list of user",
    })
}

function order(req,res){
    res.json({
        "product_name":"jeans",
        "Product_price":500,
        "product_quantity":2,
        "user_name":'palvi',
        "contact":1234567890,
        "address":"jalandhar",
        "tax":20('percent'),
        "grandtotal":118,

    })

}

// module.exports={
//     registerUser,
//     listUser,
//     order
// }

