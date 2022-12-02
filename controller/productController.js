productarray =[
    {
        "product_name":"jeans"
    },
    {
        "product_price":"500"
    },
    {
        "product_discription":"nice stuff and color"
    },
    {
        "product_quantity":"200"
    },
    {
        "product_image":"https://image.uniqlo.com/UQ/ST3/AsianCommon/imagesgoods/447647/item/goods_64_447647.jpg?width=1600&impolicy=quality_75"
    },
]

function addProduct(req,res){
    productarray.push(req.body)
    res.json({
        'status':200,
        'success':true,
        'message':'product Inserted',
        'data':req.body
    })
}

function listProduct(req,res){
    res.json({
        'status':200,
        'success':true,
        'message':'product loaded',
        'data':productarray
    })    
}

module.exports = {
    addProduct,
    listProduct
}