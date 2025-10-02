import React, { useState, useMemo } from 'react';
import { AlertTriangle, Star, Skull, Package2, ShoppingCart } from 'lucide-react';

const STORE_DATA = {
  Pants: {
    title: "THE PANTS STORE",
    product: {
      name: "STANDARD BLUE JEANS",
      baseImage: "pants",
      price: "$34.99",
      description: "Choose from our wide selection of business slacks, suit pants, jeans, shorts and sweatpants. Top quality American made pants are 100% cotton and are wrinkle free. For ultimate comfort please wash pants once before wearing. Pants available in various styles, sizes and fits.",
      options: {
        Color: ["Blue", "Yellow"],
        Pleats: ["Yes", "No"],
        Parachute: ["Yes", "No"],
        Cuffs: ["Yes", "No"],
        Size: ['L', 'XL', '2XL', '3XL', '4XL'],
      }
    }
  },
  Shoes: {
    title: "THE SHOES STORE",
    product: {
      name: "STANDARD WALKING SHOES",
      baseImage: "shoes",
      price: "$29.99",
      description: "Premium quality shoes made for walking. Available in various sizes. Top quality American made shoes are 100% leather and pre-walked for comfort.",
      options: {
        Color: ["Blue", "Yellow"],
        Style: ["Walking", "Running"],
        Size: ['8', '9', '10', '11', '12']
      }
    }
  },
  Shirts: {
    title: "THE SHIRTS STORE",
    product: {
      name: "ORNATE LEISURE SHIRT",
      baseImage: "shirts",
      price: "$24.99",
      description: "Premium quality shirts made for the business professional and the fun-at-heart. Each shirt comes pre-worn and tested for maximum comfort.",
      options: {
        Color: ["Blue", "Pink"],
        Style: ["Checker", "Wild"],
        Size: ['XS', 'ML', 'WL', 'XL', '2XL'],
        Qnty: ['1', '5', '8', '8+']
      }
    }
  },
  Coats: {
    title: "THE COATS STORE",
    product: {
      name: "WINTER COAT",
      baseImage: "coats",
      price: "$59.99",
      description: "Do you have a job interview in the near future? How about a wedding, a funeral, or a bar mitsvah? Check out our rich selection of coats. Stun the croud with your racing jacket as you send Pep-Pep to the underworld!",
      options: {
        Color: ["Blue", "Yellow"],
        Style: ["Racing", "Trench", "Leather"],
        Size: ['XS', 'SSL', 'DL', 'XWL', '2XDL'],
        Qnty: ['1', '5', '8', '8+']
      }
    }
  },
  Hats: {
    title: "THE HATS STORE",
    product: {
      name: "CASUAL HAT",
      baseImage: "hats",
      price: "$19.99",
      description: "Are you balding? Cover up that ugly shiny spot with one of our wonderful hats! With options like Fedora, Bucket, or Hair Fez you never have to show that horrifying scalp ever again. Hello confidence!",
      options: {
        Color: ["Black", "Yellow", "Red"],
        Style: ["Fedora", "Bucket", "Hair Fez"],
        Size: ['S','L'],
        Qnty: ['1', '5', '8', '8+']
      }
    }
  }
};

const getImagePath = (product, selectedOptions) => {
  if (!product || !selectedOptions) return null;
  
  const color = (selectedOptions.Color || product.options.Color[0]).toLowerCase();
  
  if (product.baseImage === 'pants') {
    const pleats = selectedOptions.Pleats === 'Yes' ? 'yes' : 'no';
    const parachute = selectedOptions.Parachute === 'Yes' ? 'yes' : 'no';
    const cuffs = selectedOptions.Cuffs === 'Yes' ? 'yes' : 'no';
    return `${product.baseImage}${color}pleats${pleats}parachute${parachute}cuffs${cuffs}`;
  }
  
  if (product.baseImage === 'hats') {
    const style = (selectedOptions.Style || '').toLowerCase().replace(' ', '');
    return `${product.baseImage}${color}${style}`;
  }
  
  const style = (selectedOptions.Style || product.options.Style?.[0] || '').toLowerCase();
  return `${product.baseImage}${color}${style}`;
};

const ProductImage = ({ product, selectedOptions }) => {
  const imageName = useMemo(() => 
    getImagePath(product, selectedOptions), 
    [product, selectedOptions]
  );

  const [imageError, setImageError] = useState(false);
  
  const imagePath = `/images/pages/categories/core/InnernetteShoppingMall/${imageName}.png`;

  return (
    <div className="relative group">
      <div className="w-80 aspect-[3/4] bg-gradient-to-br from-blue-50 to-white rounded-lg shadow 
                    border border-blue-200 overflow-hidden">
        <img
          src={!imageError ? imagePath : '/images/default-product.png'}
          alt={product?.name}
          className="w-full h-full object-contain p-4 transition-transform duration-300 
                   group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      </div>
      <div className="absolute -mt-8 right-2 bg-blue-600 text-white px-2 py-1 text-xs rounded-full 
                    opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        CINCO™ Quality
      </div>
    </div>
  );
};

const Header = () => (
  <div className="bg-gradient-to-r from-blue-700 via-blue-600 to-blue-500 text-white p-4 shadow-lg">
    <div className="max-w-4xl mx-auto">
      <h1 className="text-3xl font-bold text-center tracking-wide mb-1">
        INNERNETTE SHOPPING MALL
      </h1>
      <p className="text-center text-blue-100">
        Your Offline Shopping Solution - Brought to you by CINCO™
      </p>
    </div>
  </div>
);

const StoreNavigation = ({ currentStore, onStoreSelect }) => (
  <div className="w-48 bg-gradient-to-r from-blue-100 to-blue-50 border-r border-blue-200">
    <div className="p-3 bg-blue-600 text-white">
      <h2 className="font-bold text-sm flex items-center gap-2">
        <Package2 className="w-4 h-4" />
        Departments
      </h2>
    </div>
    {Object.keys(STORE_DATA).map(store => (
      <div
        key={store}
        onClick={() => onStoreSelect(store)}
        className={`p-3 cursor-pointer transition-all duration-200 border-b border-blue-200
          hover:bg-blue-100 text-sm
          ${currentStore === store 
            ? 'bg-blue-200 font-bold text-blue-900' 
            : 'text-blue-800 hover:translate-x-1'}`}
      >
        {store}
      </div>
    ))}
  </div>
);

const OptionDropdown = ({ label, options, value, onChange }) => (
  <div className="mb-3 flex items-center">
    <label className="w-24 text-sm font-medium text-gray-700">{label}:</label>
    <select
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="flex-1 p-1.5 bg-white border border-gray-300 rounded text-sm"
    >
      {options.map(option => (
        <option key={option} value={option}>{option}</option>
      ))}
    </select>
  </div>
);

const SafetyNotice = () => (
  <div className="text-sm bg-red-50 p-4 rounded border border-red-200">
    <div className="flex items-center gap-2 text-red-700 mb-2">
      <AlertTriangle className="w-4 h-4" />
      <p className="font-bold">CINCO™ Safety Notice:</p>
    </div>
    <ul className="list-disc ml-4 text-red-600 space-y-1 text-sm">
      <li>All sales are final and non-refundable</li>
      <li>Product may cause mild to severe bowel discomfort</li>
      <li>Please fax a picture of this form to your closest CINCO™ Innernette Recieving Center</li>
      <li>CINCO™ is not responsible for shattered clothing</li>
      <li>By ordering, you waive all rights to legal action against CINCO™</li>
    </ul>
  </div>
);

const CustomerForm = () => (
  <div className="space-y-3">
    <p className="w-full p-2 border rounded text-sm">Eric Wareheim</p>
    <p className="w-full p-2 border rounded text-sm">1500 Flower St</p>
    <p className="w-full p-2 border rounded text-sm">Glendale, CA 91201</p>
    <p className="w-full p-2 border rounded text-sm">1 (800) 555-1999</p>
  </div>
);

const OrderFormModal = ({ isOpen, onClose, product, options }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-xl w-full m-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent">
            CINCO™ ORDER FORM
          </h2>
          <button onClick={onClose} className="text-gray-500 hover:text-gray-700">✕</button>
        </div>

        <div className="mb-4 bg-blue-50 p-4 rounded text-sm">
          <h3 className="font-bold mb-2 text-blue-800">Selected Product</h3>
          <p><strong>Item:</strong> {product.name}</p>
          <p><strong>Price:</strong> {product.price}</p>
          {Object.entries(options).map(([key, value]) => (
            <p key={key}><strong>{key}:</strong> {value || 'Not selected'}</p>
          ))}
        </div>

        <div className="mb-4">
          <h3 className="font-bold mb-3 text-blue-800">Customer Information</h3>
          <CustomerForm />
        </div>

        <SafetyNotice />

        <button 
          className="w-full bg-gradient-to-r from-blue-600 to-blue-400 text-white py-2 rounded 
                     hover:from-blue-500 hover:to-blue-300 transition-all font-bold mt-4 text-sm"
          onClick={() => {
            alert('Order pre-submitted to CINCO™! If you forget to fax a picture of your order printout, your money will be kept. Your memories will be edited shortly.');
            onClose();
          }}
        >
          Submit Order
        </button>
      </div>
    </div>
  );
};

const AdditionalContent = () => (
  <div className="mt-6 space-y-4">
    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
      <h3 className="text-lg font-bold text-blue-900 mb-3 flex items-center gap-2">
        <Star className="w-5 h-5 text-yellow-500" />
        Special Offers
      </h3>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <p className="font-bold mb-1 text-sm">Free Memory Wipe</p>
          <p className="text-sm text-gray-600">With purchase of any two items</p>
        </div>
        <div>
          <p className="font-bold mb-1 text-sm">Special Discount</p>
          <p className="text-sm text-gray-600">Show your Napple™ receipt for 10% off</p>
        </div>
      </div>
    </div>

    <div className="bg-red-50 p-4 rounded-lg border border-red-200">
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0" />
        <div>
          <h3 className="text-base font-bold text-red-900 mb-2">IMPORTANT SAFETY NOTICE</h3>
          <p className="text-sm text-red-800">
            This product is rated C for CINCO™. Side effects may include:
          </p>
          <ul className="mt-2 grid grid-cols-4 gap-x-4 text-sm text-red-700">
            <li>• Bowel Irritation</li>
            <li>• Interior Rash</li>
            <li>• Psychosis</li>
            <li>• A Sense of Tranquility</li>
            <li>• Dorselessness</li>
            <li>• False Wellbeing</li>
            <li>• Memory Loss</li>
            <li>• Erectile Dysfunction</li>
          </ul>
        </div>
      </div>
    </div>

    <div className="text-center space-y-1 text-xs text-gray-500">
      <p>CINCO™ Technologies - All Rights Reserved</p>
      <p className="flex items-center justify-center gap-1">
        <Skull className="w-3 h-3" />
        <span className="italic">
          Consult your local CINCO™ representative for paradox resolution
        </span>
      </p>
    </div>
  </div>
);

const ProductDisplay = ({ store }) => {
  const [selectedOptions, setSelectedOptions] = useState({});
  const [isOrderFormOpen, setIsOrderFormOpen] = useState(false);
  const storeData = STORE_DATA[store];

  // Initialize default options when store changes
  React.useEffect(() => {
    if (!storeData?.product?.options) return;
    
    const defaultOptions = {};
    Object.entries(storeData.product.options).forEach(([key, values]) => {
      defaultOptions[key] = values[0];
    });
    setSelectedOptions(defaultOptions);
  }, [store, storeData]);

  if (!storeData) return null;

  return (
    <div className="flex-1 overflow-y-auto p-4">
      <div className="text-2xl font-bold text-blue-900 mb-6 border-b border-blue-100 pb-3">
        {storeData.title}
      </div>

      <div className="flex gap-8">
        <ProductImage product={storeData.product} selectedOptions={selectedOptions} />

        <div className="flex-1 space-y-6">
          <div>
            <h2 className="text-xl font-bold mb-2 text-blue-800">{storeData.product.name}</h2>
            <p className="text-gray-600 mb-3 text-sm">{storeData.product.description}</p>
            <p className="text-lg font-bold text-blue-600">{storeData.product.price}</p>
          </div>

          <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
            <h3 className="font-bold mb-3 text-blue-800 text-sm">Product Options</h3>
            {Object.entries(storeData.product.options).map(([option, values]) => (
              <OptionDropdown
                key={option}
                label={option}
                options={values}
                value={selectedOptions[option] || values[0]}
                onChange={(value) => 
                  setSelectedOptions(prev => ({ ...prev, [option]: value }))
                }
              />
            ))}
          </div>

          <button
            onClick={() => setIsOrderFormOpen(true)}
            className="w-full py-2 bg-gradient-to-r from-blue-600 to-blue-500 
                     text-white rounded-lg shadow hover:from-blue-500 
                     hover:to-blue-400 flex items-center justify-center gap-2 
                     font-bold transition-all duration-200 text-sm"
          >
            <ShoppingCart className="w-4 h-4" />
            Order Now
          </button>
        </div>
      </div>

      <AdditionalContent />
      
      <OrderFormModal 
        isOpen={isOrderFormOpen}
        onClose={() => setIsOrderFormOpen(false)}
        product={storeData.product}
        options={selectedOptions}
      />
    </div>
  );
};

const InnernetteShop = () => {
  const [currentStore, setCurrentStore] = useState('Pants');
  
  return (
    <div className="flex flex-col bg-gray-100">
      <Header />
      <div className="flex-1 overflow-hidden">
        <div className="h-full flex bg-white shadow-xl">
          <StoreNavigation
            currentStore={currentStore}
            onStoreSelect={setCurrentStore}
          />
          <ProductDisplay store={currentStore} />
        </div>
      </div>
    </div>
  );
};

export default InnernetteShop;