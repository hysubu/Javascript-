var item = [
    {catagory:"Books",Product:["html","css"]},
    {catagory:"Laptop",Product:["hp","dell","asus","mac"]},
    {catagory:"Mobile",Product:["mi","realme","apple","oppo"]},
    {catagory:"Food",Product:["eggs","chicken","fish","paneer"]},
    {catagory:"Bags",Product:["skybags","american turist","","fastrack"]},
    {catagory:"Jobs",Product:["backend devloper","Frontend Devloper"]},
]
item.map((iteminfo,index)=>{
    console.log(index,".",iteminfo.catagory)
    // console.log(iteminfo.Product)
    iteminfo.Product.map((pname,index2)=>{
        console.log("\t", index2,".", pname)
    })
})