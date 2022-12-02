categoryarray =[
    {
        "category_name":"Kids Wear"
    },
    {
        "category_name":"Footwear"
    },
]

function addcategory(req,res){
    categoryarray.push(req.body)
    res.json({
        'status':200,
        'success':true,
        'message':'category Inserted',
        'data':req.body
    })
}

function listCategory(req,res){
    res.json({
        'status':200,
        'success':true,
        'message':'category loaded',
        'data':categoryarray
    })    
}

module.exports = {
    addcategory,
    listCategory
}