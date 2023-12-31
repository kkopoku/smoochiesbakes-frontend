"use client";
import React, { useState } from "react";
import ViewProductModal from "./viewProductModal";
import CheckoutModal from "./checkoutModal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

export default function OrderPage() {
  const [viewProductModalOpen, setViewProductModalOpen] = useState(false);
  const [viewCheckoutModal, setViewCheckoutModal] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [destination, setDestination] = useState({});

  const products = {
    fullcakes: [
      {
        _id: "652c627ef862bc8c735ff010",
        name: "6 inches 2 layers",
        category: "Full Cakes",
        price: 200,
        __v: 0,
        description:
          "A compact yet delightful choice, perfect for intimate gatherings. Priced at GHC200, it's a charming treat for any occasion.",
        bg_url:
          "https://images.pexels.com/photos/140831/pexels-photo-140831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        _id: "652c778b8b20a9e9c1de9db3",
        name: "6 inches 3 layers",
        category: "Full Cakes",
        price: 255,
        __v: 0,
        description:
          "A slightly taller and more extravagant version of the 6-inch cake, priced at GHC255. Ideal for those who crave a bit more cake goodness.",
        bg_url:
          "https://images.pexels.com/photos/10510747/pexels-photo-10510747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        _id: "652c77a28b20a9e9c1de9db5",
        name: "8 inches 2 layers",
        category: "Full Cakes",
        price: 255,
        __v: 0,
        description:
          "A popular choice for medium-sized gatherings, priced at GHC255. It offers more servings while maintaining a manageable size.",
        bg_url:
          "https://images.pexels.com/photos/1120970/pexels-photo-1120970.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        _id: "652c77bd8b20a9e9c1de9db7",
        name: "8 inches 3 layers",
        category: "Full Cakes",
        price: 305,
        __v: 0,
        description:
          "An elegant and grand option, perfect for celebrations that demand something extra special. Priced at GHC305, it's a showstopper.",
        bg_url: "/order_page/arsenalcake.jpeg",
      },
      {
        _id: "652c77cb8b20a9e9c1de9db9",
        name: "10 inches 2 layers",
        category: "Full Cakes",
        price: 355,
        __v: 0,
        description:
          "A cake that's perfect for larger gatherings and celebrations, priced at GHC355. It ensures that everyone gets a slice of the celebration.",
        bg_url:
          "https://images.pexels.com/photos/806363/pexels-photo-806363.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        _id: "652c77e48b20a9e9c1de9dbb",
        name: "12 inches 2 layers",
        category: "Full Cakes",
        price: 405,
        __v: 0,
        description:
          "The biggest of the bunch, priced at GHC405, this cake is designed for grand occasions and serves a substantial number of guests.",
        bg_url:
          "https://images.pexels.com/photos/2067436/pexels-photo-2067436.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        _id: "652c78018b20a9e9c1de9dbd",
        name: "Double Number Cake",
        category: "Full Cakes",
        price: 325,
        __v: 0,
        description:
          "For personalized celebrations, the Double Number Cake, priced at GHC325, lets you customize your cake with numbers or special shapes, making it a memorable centerpiece for any event.",
        bg_url: "/order_page/doublenumbercake.jpeg",
      },
      {
        _id: "652c78018b60a9e9c1de9dbd",
        name: "Single Number Cake",
        category: "Full Cakes",
        price: 275,
        __v: 0,
        description:
          "For personalized celebrations, the Double Number Cake, priced at GHC275, lets you customize your cake with numbers or special shapes, making it a memorable centerpiece for any event.",
        bg_url: "/order_page/singlenumbercake.jpeg",
      },
    ],

    bananacakes: [
      {
        _id: "652c787d354349fb5629a7cb",
        name: "Classic Banana Cake",
        category: "Banana Cakes",
        price: 50,
        __v: 0,
        bg_url: "/order_page/bananacake.jpg",
      },
      {
        _id: "652c78cf354349fb5629a7cf",
        name: "Raisin Banana Cake",
        category: "Banana Cakes",
        price: 50,
        __v: 0,
        bg_url: "https://images.pexels.com/photos/15925185/pexels-photo-15925185/free-photo-of-pieces-of-homemade-bread.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
    cupcakes: [
      {
        _id: "652c7a12354349fb5629a7d1",
        name: "Chocolate Cupcake",
        category: "Cupcakes",
        price: 3.5,
        __v: 0,
        bg_url: "/order_page/chocolatecupcakes.jpg",
      },
      {
        _id: "652c7a2f354349fb5629a7d3",
        name: "Vanilla Cupcake",
        category: "Cupcakes",
        price: 3.5,
        __v: 0,
        bg_url: "/order_page/vanillacupcakes.jpg",
      },
      {
        _id: "652d7a44354349fb5629a7d5",
        name: "Red Velvet Cupcake",
        category: "Cupcakes",
        price: 4.0,
        __v: 0,
        bg_url: "https://images.pexels.com/photos/6375497/pexels-photo-6375497.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
      {
        _id: "652c7a44354349fb5629a7d5",
        name: "Strawberry Cupcake",
        category: "Cupcakes",
        price: 4.0,
        __v: 0,
        bg_url: "https://images.pexels.com/photos/7474203/pexels-photo-7474203.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      },
    ],
  };

  const handleAddToCart = () => {
    const existingItem = cartItems.find(
      (cartItem) => cartItem._id === selectedProduct._id
    );

    if (existingItem) {
      // If the item is already in the cart, increase its quantity by one
      const updatedItems = cartItems.map((cartItem) =>
        cartItem._id === selectedProduct._id
          ? {
              ...cartItem,
              quantity: cartItem.quantity + 1,
              amount: (cartItem.quantity + 1) * selectedProduct.price,
            }
          : selectedProduct
      );
      setCartItems(updatedItems);
    } else {
      // If the item is not in the cart, add it with a quantity of one
      const newItem = {
        ...selectedProduct,
        quantity: 1,
        amount: selectedProduct.price,
      };
      setCartItems((prevSelectedItems) => [...prevSelectedItems, newItem]);
    }
  };

  return (
    <main className=" bg-[#ffe6ee] h-full min-h-screen text-gray-700 font-sans transition-all duration-500">
      {/* <Header /> */}

      {viewProductModalOpen && (
        <ViewProductModal
          isOpen={() => {
            viewProductModalOpen(true);
          }}
          onClose={() => {
            setViewProductModalOpen(false);
          }}
          selectedProduct={selectedProduct}
          handleAddToCart={handleAddToCart}
        />
      )}

      {viewCheckoutModal && (
        <CheckoutModal
          isOpen={() => setViewCheckoutModal(true)}
          onClose={() => setViewCheckoutModal(false)}
          cartItems={cartItems}
        />
      )}

      <div className="flex flex-col justify-center text-center gap-3 py-10">
        <div className="text-4xl font-bold font-sans">{`SMOOCHIES BAKES`}</div>
        <div className="font-light font-sans">
          {`Welcome to Smoochies Bakes. This our easy order/grab and go portal. For
        customized orders, kindly WhatsApp 0554181995/0247069070.`}
        </div>
      </div>

      {/* select products*/}
      <div className="flex flex-col content-center w-screen h-fit gap-10 py-12">
        <div className="flex flex-row justify-center text-2xl font-semibold">
          SELECT PRODUCTS
        </div>

        <div className="flex flex-col items-center p-5">
          <div className="flex flex-row justify-center text-xl font-semibold pb-3">
            FULL CAKE LIST
          </div>
          <div className="bg-white rounded-xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:px-8 font-normal px-5 pb-5 pt-7 w-fit transition-all duration-700">
            {products.fullcakes.map((item, name) => (
              <div
                key={name}
                className="flex flex-col gap-3 justify-self-center text-center"
              >
                <button
                  onClick={() => {
                    setSelectedProduct(item);
                    setViewProductModalOpen(true);
                    console.log(item);
                  }}
                >
                  <div
                    className="rounded-lg w-52 h-48 transition-all hover:scale-105"
                    style={{
                      backgroundImage: `url(${item.bg_url})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="flex flex-col">
                    <div>{item.name}</div>
                    <div>Ghs {item.price}</div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center p-5">
          <div className="flex flex-row justify-center text-xl font-semibold pb-3">
            CUPCAKES LIST
          </div>
          <div className="bg-white rounded-xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-5 lg:px-8 font-normal px-5 pb-5 pt-7 w-fit transition-all duration-700">
            {products.cupcakes.map((item, name) => (
              <div
                key={name}
                className="flex flex-col gap-3 justify-self-center text-center"
              >
                <button
                  onClick={() => {
                    setSelectedProduct(item);
                    setViewProductModalOpen(true);
                    console.log(item);
                  }}
                >
                  <div
                    className="rounded-lg w-52 h-48 transition-all hover:scale-105"
                    style={{
                      backgroundImage: `url(${item.bg_url})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="flex flex-col">
                    <div>{item.name}</div>
                    <div>Ghs {item.price}</div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col items-center p-5">
          <div className="flex flex-row justify-center text-xl font-semibold pb-3">
            BANANA CAKES LIST
          </div>
          <div className="bg-white rounded-xl grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-2 gap-5 lg:px-8 font-normal px-5 pb-5 pt-7 w-fit transition-all duration-700">
            {products.bananacakes.map((item, name) => (
              <div
                key={name}
                className="flex flex-col gap-3 justify-self-center text-center"
              >
                <button
                  onClick={() => {
                    setSelectedProduct(item);
                    setViewProductModalOpen(true);
                    console.log(item);
                  }}
                >
                  <div
                    className="rounded-lg w-52 h-48 transition-all hover:scale-105"
                    style={{
                      backgroundImage: `url(${item.bg_url})`,
                      backgroundSize: "cover",
                      backgroundRepeat: "no-repeat",
                    }}
                  />
                  <div className="flex flex-col">
                    <div>{item.name}</div>
                    <div>Ghs {item.price}</div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      <button
        className="fixed bottom-0 right-0 p-4"
        onClick={() => {
          setViewCheckoutModal(true);
        }}
        disabled={cartItems.length === 0}
      >
        {cartItems.length === 0 ? (
          <></>
        ) : (
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-pink-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-pink-500"></span>
          </span>
        )}
        <div className="btn bg-white border border-gray-700 rounded-lg px-3 py-2 w-20">
          <FontAwesomeIcon icon={faShoppingCart} className="text-xl text-black hover:opacity-60"/>
        </div>
      </button>

      <div className="bg-[url(/patterns/pattern02.jpg)] bg-contain text-center content-center justify-center items-center align-middle text-white h-80">
        FOOTER HERE WAI
      </div>
    </main>
  );
}
