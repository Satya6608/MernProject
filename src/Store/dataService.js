//Services for Maincategory
export async function createMaincategoryAPI(data){
    var response = await fetch("/maincategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getMaincategoryAPI(){
    var response = await fetch("/maincategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function deleteMaincategoryAPI(data){
    var response = await fetch("/maincategory/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateMaincategoryAPI(data){
    var response = await fetch("/maincategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


//Services for Subcategory
export async function createSubcategoryAPI(data){
    var response = await fetch("/subcategory",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getSubcategoryAPI(){
    var response = await fetch("/subcategory",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function deleteSubcategoryAPI(data){
    var response = await fetch("/subcategory/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateSubcategoryAPI(data){
    var response = await fetch("/subcategory/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


//Services for Brand
export async function createBrandAPI(data){
    var response = await fetch("/brand",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getBrandAPI(){
    var response = await fetch("/brand",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function deleteBrandAPI(data){
    var response = await fetch("/brand/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateBrandAPI(data){
    var response = await fetch("/brand/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


//Services for Product
export async function createProductAPI(data){
    var response = await fetch("/product",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getProductAPI(){
    var response = await fetch("/product",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}
export async function getSingleProductAPI(data){
    var response = await fetch("/product/"+data.id,{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function deleteProductAPI(data){
    var response = await fetch("/product/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateProductAPI(data){
    var response = await fetch("/product/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}


//Services for User
export async function createUserAPI(data){
    var response = await fetch("/user",{
        method:"post",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}

export async function getUserAPI(){
    var response = await fetch("/user",{
        method:"get",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function deleteUserAPI(data){
    var response = await fetch("/user/"+data.id,{
        method:"delete",
        headers:{
            "content-type":"application/json"
        }
    })
    return await response.json()
}

export async function updateUserAPI(data){
    var response = await fetch("/user/"+data.id,{
        method:"put",
        headers:{
            "content-type":"application/json"
        },
        body:JSON.stringify(data)
    })
    return await response.json()
}
