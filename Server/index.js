const express = require("express")
const path = require("path")
const dotenv = require("dotenv")
const cors = require("cors")
dotenv.config()


const MaincategoryController = require("./controller/MaincategoryController")
const SubcategoryController = require("./controller/SubcategoryController")
const BrandController = require("./controller/BrandController")
const ProductController = require("./controller/ProductController")
const UserController = require("./controller/UserController")
const CartController = require("./controller/CartController")
const WishlistController = require("./controller/WishlistController")
const CheckoutController = require("./controller/CheckoutController")
const ContactUsController = require("./controller/ContactUsController")
const NewslatterController = require("./controller/NewslatterController")


require("./dbConnect")
const app = express()

app.use(express.json())
app.use("/public", express.static("public"))
app.use(express.static(path.join(__dirname, 'build')));
app.use(cors())

app.use("/api/maincategory",MaincategoryController)
app.use("/api/subcategory",SubcategoryController)
app.use("/api/brand",BrandController)
app.use("/api/product",ProductController)
app.use("/api/user",UserController)
app.use("/api/cart",CartController)
app.use("/api/wishlist",WishlistController)
app.use("/api/checkout",CheckoutController)
app.use("/api/newslatter",NewslatterController)
app.use("/api/contact",ContactUsController)


app.use('*', express.static(path.join(__dirname, 'build'))); 
var port = process.env.PORT||8000
app.listen(port,()=>{
    console.log(`Server is Running at Port http://localhost:${port}`);
})