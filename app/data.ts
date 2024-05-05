import ProductImage1 from '../public/Assets/images/product_1.png'
import ProductImage2 from '../public/Assets/images/product_2.png'
import ProductImage3 from '../public/Assets/images/product_3.png'
import ProductImage4 from '../public/Assets/images/product_4.png'
import ProductImage5 from '../public/Assets/images/product_5.png'
import ProductImage7 from '../public/Assets/images/product_7.png'
import ProductImage8 from '../public/Assets/images/product_8.png'



interface card {
    id:number,
    title:string,
    image:string | any,
    price:number
    category:string
}


export const productCardData: card[]=[
    {
        id:1,
        image:ProductImage1,
        title:"Adicolor Classics Joggers",
        price:63.85,
        category: "Dress"
    },
    {
        id:2,
        image:ProductImage2,
        title:"Nike Sportswear Futura Luxe",
        price:130.00,
        category: "Bag"
    },
    {
        id:3,
        image:ProductImage3,
        title:"Geometric print Scarf",
        price:53.00,
        category: "scarf"
    },
    {
        id:4,
        image:ProductImage1,
        title:"Nike Air Zoom Pegasus",
        price:220.00,
        category: "shoe"
    },
    {
        id:5,
        image:ProductImage4,
        title:"Yellow Reserved Hoodie",
        price:364.00,
        category: "Dress"
    },
    {
        id:6,
        image:ProductImage5,
        title:"Basic Dress Green",
        price:236.00,
        category: "Dress"
    },
    {
        id:7,
        image:ProductImage7,
        title:"Nike Repel Miler",
        price:120.50,
        category: "Dress"
    },
    {
        id:8,
        image:ProductImage8,
        title:"Nike Sportswear Futura Luxe",
        price:160.00,
        category: "Glasses"
    },
]