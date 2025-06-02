import { useEffect, useState } from "react"

function ProductCard() {
  const [visible, setVisible] = useState([])

  async function getProducts() {
    try {
      const response = await fetch("https://fakestoreapi.in/api/products?limit=6")
      if (response.ok) {
        const productData = await response.json()
        
        const Data = productData.products
        return Data
      }
    } catch (error) {
      console.log("Error", error)
    }
  }

  useEffect(() => {
    async function fetchData() {
      const productData = await getProducts()
      console.log(productData)
      if (productData) {
        setVisible(productData) // ✅ set the array directly
      }
    }
    fetchData()
  }, []) // ✅ empty dependency array to run only once

  console.log(Object.keys(visible))
  return (
    <>
    
      {visible.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 shadow rounded-md border flex flex-col"
        >
          <div>
            <img src={product.image} alt={product.title} className="h-32 w-auto object-contain mx-auto" />
          </div>
          <div className="flex flex-col gap-1">
            <h2 className="font-semibold text-sm mt-2">{product.title?.replace(/,/g, " |")}</h2>
            <div className="flex justify-between mt-5 ">
              <p className="text-xs text-gray-500">	₹{product.price}</p>
              <p className="text-xs text-gray-500">Brand {product.brand.toString().toUpperCase()}</p>
            </div>
           </div>
        </div>
      ))}
    </>
  )
}

export default function Product() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-7xl m-auto p-4">
      <ProductCard />
    </div>
  )
}
