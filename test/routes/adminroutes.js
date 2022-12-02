const controller=require(express)
const Registerser=('../controller',registerUser)
const Listuser=('../controller',listUser)
const Order=('../controller',order)



var post=('/registeruser','../controller/RegisterUser')
var get=('/listuser','../controller/ListUser')
var get=('/order','../controller/order')

module.exports
{
    registerUser,
    listUser,
    order
}

