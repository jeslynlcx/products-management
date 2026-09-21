const { Schema, model } = require("mongoose")

const ProductSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    description: String,
    price: {
        type: Number,
        required: true
    },
    category : String,
    inStock : {
        type: Boolean,
        default: true
    },
    imageUrl : {
        type: String,
    }
})

const Product = model("Product", ProductSchema)

module.exports = Product