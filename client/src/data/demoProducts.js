export const categories = [
  { id: "sarees", name: "Sarees", image_url: "/images/banner2.jpg" },
  { id: "kurtis", name: "Kurtis", image_url: "/images/banner13.jfif" },
  { id: "dresses", name: "Dresses", image_url: "/images/banner44.jpg" },
  { id: "lehengas", name: "Lehengas", image_url: "/images/banner14.jfif" }
];

export const products = [
  { id:"demo-1", name:"Floral Edit Kurti", description:"A graceful everyday silhouette with a soft boutique finish.", price:1499, sale_price:null, category_id:"kurtis", category_name:"Kurtis", image_url:"/images/banner13.jfif", is_new_arrival:true, is_featured:true, variants:[{id:"v1",size:"S",color:"Pink",stock:3},{id:"v2",size:"M",color:"Pink",stock:4},{id:"v3",size:"L",color:"Pink",stock:0},{id:"v4",size:"XL",color:"Pink",stock:2}] },
  { id:"demo-2", name:"Festive Drapes", description:"An elegant festive saree curated for celebrations and special occasions.", price:2499, sale_price:2199, category_id:"sarees", category_name:"Sarees", image_url:"/images/banner2.jpg", is_new_arrival:true, is_featured:true, variants:[{id:"v5",size:null,color:"Wine",stock:4}] },
  { id:"demo-3", name:"Everyday Grace Dress", description:"A versatile boutique dress with a relaxed, flattering fit.", price:1899, sale_price:null, category_id:"dresses", category_name:"Dresses", image_url:"/images/banner44.jpg", is_new_arrival:false, is_featured:true, variants:[{id:"v6",size:"S",color:"Black",stock:2},{id:"v7",size:"M",color:"Black",stock:2},{id:"v8",size:"L",color:"Black",stock:1}] },
  { id:"demo-4", name:"Celebration Lehenga", description:"A statement festive look designed for memorable occasions.", price:4999, sale_price:null, category_id:"lehengas", category_name:"Lehengas", image_url:"/images/banner14.jfif", is_new_arrival:true, is_featured:false, variants:[{id:"v9",size:"M",color:"Gold",stock:1},{id:"v10",size:"L",color:"Gold",stock:1}] }
];

export const settings = {
  store_name:"Inthi", whatsapp:"", phone:"", instagram:"", email:"",
  address:"Your boutique address", maps_url:"", opening_hours:"Mon – Sun · 10:00 AM – 9:00 PM",
  logo_url:"/images/logoBoutique.png",
  whatsapp_template:"Hello {{store_name}} 👋\n\nI'd like to order:\n\n{{products}}\n\nTotal: ₹{{total}}\nOrder Reference: {{order_reference}}\n\nPlease confirm availability."
};
