"use client";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useRouter } from "next/navigation";
const products = [
  {
    id: 1,
    name: "Samsung Galaxy F06 5G (Bahama Blue, 64 GB)",
    image: "/temp/img1.jpg",
    rating: 4.1,
    reviews: 18569,
    price: 8199,
    oldPrice: 12499,
    discount: 34,
  },
  {
    id: 2,
    name: "Samsung M05 (Mint Green, 64 GB)",
  image: "/temp/img2.jpg",
    rating: 4.3,
    reviews: 2886,
    price: 6636,
    oldPrice: 9999,
    discount: 33,
  },
  {
    id: 3,
    name: "Samsung Galaxy F06 5G (Bahama Blue, 64 GB)",
    image: "/temp/img3.jpg",
    rating: 4.1,
    reviews: 18569,
    price: 8199,
    oldPrice: 12499,
    discount: 34,
  },
  {
    id: 4,
    name: "Samsung M05 (Mint Green, 64 GB)",
    image: "/temp/img4.jpg",
    rating: 4.3,
    reviews: 2886,
    price: 6636,
    oldPrice: 9999,
    discount: 33,
  },
  {
    id: 5,
    name: "Samsung Galaxy F06 5G (Bahama Blue, 64 GB)",
    image: "/temp/img5.jpg",
    rating: 4.1,
    reviews: 18569,
    price: 8199,
    oldPrice: 12499,
    discount: 34,
  },
  {
    id: 6,
    name: "Samsung M05 (Mint Green, 64 GB)",
   image: "/temp/img1.jpg",
    rating: 4.3,
    reviews: 2886,
    price: 6636,
    oldPrice: 9999,
    discount: 33,
  },
  {
    id: 7,
    name: "Samsung Galaxy F06 5G (Bahama Blue, 64 GB)",
   image: "/temp/img2.jpg",
    rating: 4.1,
    reviews: 18569,
    price: 8199,
    oldPrice: 12499,
    discount: 34,
  },
  {
    id: 8,
    name: "Samsung M05 (Mint Green, 64 GB)",
   image: "/temp/img3.jpg",
    rating: 4.3,
    reviews: 2886,
    price: 6636,
    oldPrice: 9999,
    discount: 33,
  },
  {
    id: 9,
    name: "Samsung Galaxy F06 5G (Bahama Blue, 64 GB)",
    image: "/temp/img4.jpg",
    rating: 4.1,
    reviews: 18569,
    price: 8199,
    oldPrice: 12499,
    discount: 34,
  },
  {
    id: 10,
    name: "Samsung M05 (Mint Green, 64 GB)",
    image: "/temp/img5.jpg",
    rating: 4.3,
    reviews: 2886,
    price: 6636,
    oldPrice: 9999,
    discount: 33,
  },
  // Add more products...
];

const ProductGrid = () => {
  const router = useRouter();
  const handleNavigation = () => {
    router.push(`/product/${"utli"}`); // Navigate to the checkout page
  };
  return (
    <div className="max-w-7xl  p-4">
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4  ">
        {products?.map((product) => (
          <div
            key={product.id}
            className="cursor-pointer border  p-3 hover:shadow-lg transition bg-white"
            onClick={handleNavigation}
          >
            <div className="w-full h-65  z-1 ">
              <Image
                src={product.image}
                alt={product.name}
                width={900}
              height={150}
                priority
                // layout="fill"
                // objectFit="contain"
                className="rounded-md z-0 h-65 w-full"
              />
            </div>

            <h3 className="mt-3 text-sm font-medium text-gray-800 line-clamp-2">
              {product.name}
            </h3>

            <div className="flex items-center mt-2">
              <span className="bg-green-600 text-white text-xs px-2 py-1 rounded flex items-center gap-1">
                {product.rating} <FaStar size={10} />
              </span>
              <span className="ml-2 text-xs text-gray-600">
                ({product.reviews.toLocaleString()})
              </span>
            </div>

            <div className="mt-2 flex items-center gap-2">
              <span className="text-lg font-semibold">
                ₹{product.price.toLocaleString()}
              </span>
              <span className="text-gray-500 line-through text-sm">
                ₹{product.oldPrice.toLocaleString()}
              </span>
              <span className="text-green-600 text-sm font-medium">
                {product.discount}% off
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default ProductGrid;
