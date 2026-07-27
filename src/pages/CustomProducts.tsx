import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { 
  Smartphone, 
  Shirt, 
  ShoppingBag, 
  Coffee, 
  Sparkles, 
  Paintbrush, 
  Type, 
  Check, 
  ArrowRight, 
  ShieldCheck,
  RotateCcw,
  Sliders,
  Layers,
  ChevronDown,
  MessageCircle,
  X
} from "lucide-react";

interface ProductOption {
  id: string;
  name: string;
  image: string;
  icon: any;
  category: "apparel" | "device" | "accessory";
}

const CUSTOMIZABLE_PRODUCTS: ProductOption[] = [
  {
    id: "phone-cover",
    name: "Mobile Cover",
    image: "https://images.unsplash.com/photo-1541807084-5c52b6b3adef?q=80&w=600&auto=format&fit=crop",
    icon: Smartphone,
    category: "device"
  },
  {
    id: "t-shirt",
    name: "Premium T-Shirt",
    image: "https://images.unsplash.com/photo-1521572267360-ee0c2909d518?q=80&w=600&auto=format&fit=crop",
    icon: Shirt,
    category: "apparel"
  },
  {
    id: "shirt",
    name: "Regular Shirt",
    image: "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=600&auto=format&fit=crop",
    icon: Shirt,
    category: "apparel"
  },
  {
    id: "pants",
    name: "Pants & Trousers",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=600&auto=format&fit=crop",
    icon: ShoppingBag, 
    category: "apparel"
  },
  {
    id: "bag",
    name: "Carry Bag",
    image: "https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=600&auto=format&fit=crop",
    icon: ShoppingBag,
    category: "accessory"
  },
  {
    id: "cup",
    name: "Designer Cup / Mug",
    image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&w=600&auto=format&fit=crop",
    icon: Coffee,
    category: "accessory"
  }
];

export default function CustomProducts() {
  const [selectedProduct, setSelectedProduct] = useState<ProductOption>(CUSTOMIZABLE_PRODUCTS[0]);
  const [customText, setCustomText] = useState("");
  const [selectedColor, setSelectedColor] = useState({ name: "Matte Slate", hex: "#1e293b" });
  const [selectedSize, setSelectedSize] = useState("L");
  const [textPlacement, setTextPlacement] = useState("Center Print");
  const [calculatedPrice, setCalculatedPrice] = useState(550);
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);

  // Dynamic conditional suboptions states
  // Mobile cover suboptions
  const [phoneBrand, setPhoneBrand] = useState("Apple");
  const [phoneModel, setPhoneModel] = useState("iPhone 15 Pro Max");
  const [phoneMaterial, setPhoneMaterial] = useState("standard"); // standard, shatterproof, carbon, elite-leather

  // Apparel suboptions
  const [apparelFit, setApparelFit] = useState("Regular Fit");
  const [fabricPremiumGrade, setFabricPremiumGrade] = useState("standard"); // standard, dual-combed, belgian-organic, luxury-silk

  // Accessories suboptions
  const [accessoryMaterial, setAccessoryMaterial] = useState("Standard Eco Canvas / Ceramic"); // standard, deluxe, ultra
  const [accessoryCapacity, setAccessoryCapacity] = useState("Standard Size"); // standard, expanded

  // Theme Colors
  const colorOptions = [
    { name: "Obsidian Black", hex: "#0f172a" },
    { name: "Aesthetic White", hex: "#ffffff" },
    { name: "Cream Ivory", hex: "#fef08a" },
    { name: "Olive Moss", hex: "#3f6212" },
    { name: "Crimson Royal", hex: "#991b1b" },
    { name: "Cobalt Blue", hex: "#1e3a8a" },
    { name: "Rose Whisper", hex: "#fce7f3" }
  ];

  // Specific phone models map
  const phoneModelsMap: Record<string, string[]> = {
    Apple: ["iPhone 15 Pro Max", "iPhone 15 Pro", "iPhone 15", "iPhone 14 Pro Max", "iPhone 13"],
    Samsung: ["Galaxy S24 Ultra", "Galaxy S24+", "Galaxy S23 Ultra", "Galaxy A54"],
    Google: ["Pixel 8 Pro", "Pixel 8", "Pixel 7 Pro", "Pixel 7a"],
    OnePlus: ["OnePlus 12", "OnePlus 11", "OnePlus Nord CE 3"]
  };

  // Switch models when brand changes
  useEffect(() => {
    if (phoneModelsMap[phoneBrand]) {
      setPhoneModel(phoneModelsMap[phoneBrand][0]);
    }
  }, [phoneBrand]);

  // Real-time calculated price logic mapped strictly to tiers: [550, 750, 1100, 1400]
  useEffect(() => {
    let finalTier = 550;

    if (selectedProduct.id === "phone-cover") {
      // Determined strictly by Selected Material tier:
      if (phoneMaterial === "standard") {
        finalTier = 550;
      } else if (phoneMaterial === "shatterproof") {
        finalTier = 750;
      } else if (phoneMaterial === "carbon") {
        finalTier = 1100;
      } else if (phoneMaterial === "elite-leather") {
        finalTier = 1400;
      }
    } else if (selectedProduct.category === "apparel") {
      // Determined strictly by fabric weave grade selected:
      if (selectedProduct.id === "t-shirt") {
        if (fabricPremiumGrade === "standard") finalTier = 550;
        else if (fabricPremiumGrade === "dual-combed") finalTier = 750;
        else if (fabricPremiumGrade === "belgian-organic") finalTier = 1100;
        else if (fabricPremiumGrade === "luxury-silk") finalTier = 1400;
      } else {
        // regular shirt, pants start at minimum 750 tier
        if (fabricPremiumGrade === "standard") finalTier = 750;
        else if (fabricPremiumGrade === "dual-combed" || fabricPremiumGrade === "belgian-organic") finalTier = 1100;
        else if (fabricPremiumGrade === "luxury-silk") finalTier = 1400;
      }
    } else if (selectedProduct.category === "accessory") {
      // Accessories (Carry Bag / Custom Cup) pricing engine:
      if (accessoryMaterial === "Standard Eco Canvas / Ceramic") {
        finalTier = 550;
      } else if (accessoryMaterial === "Heavy-Duty Tarpaulin / Matte Finish Mug") {
        finalTier = 750;
      } else if (accessoryMaterial === "Premium Insulated Brass Weave / Suede") {
        finalTier = 1100;
      } else if (accessoryMaterial === "Luxury Italian Handcrafted Collector Edition") {
        finalTier = 1400;
      }
    }

    setCalculatedPrice(finalTier);
  }, [selectedProduct, phoneMaterial, fabricPremiumGrade, accessoryMaterial]);

  // Handle resetting choices on product switch
  const handleProductChange = (prod: ProductOption) => {
    setSelectedProduct(prod);
    setCustomText("");
    // resets
    setPhoneMaterial("standard");
    setFabricPremiumGrade("standard");
    setAccessoryMaterial("Standard Eco Canvas / Ceramic");
  };

  // Customization order handler
  const handleProceedToPayment = () => {
    setIsRedirecting(true);
    setTimeout(() => {
      setIsRedirecting(false);
      setShowSuccessModal(true);
    }, 400);
  };

  return (
    <div className="pt-28 pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto min-h-screen bg-white" id="customizer-root-refined">
      
      {/* Editorial Header */}
      <div className="mb-14 text-center max-w-3xl mx-auto" id="customizer-header-section">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-neutral-100 text-neutral-800 rounded-full text-[10px] font-bold uppercase tracking-widest mb-4 border border-neutral-200"
        >
          <Sparkles size={11} className="text-yellow-600 fill-yellow-600" /> Premium Craft Atelier
        </motion.div>
        <h1 className="text-lg sm:text-2xl font-bold tracking-tight uppercase mb-2 text-neutral-900">
          Custom Studio
        </h1>
        <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-normal max-w-xl mx-auto">
          Create customized mobile covers, high-end apparel, and accessories with custom names and graphics.
        </p>
      </div>

      {/* Centered Highly Optimized Customizer Panel Stack */}
      <div className="max-w-3xl mx-auto" id="premium-centered-customizer">
        
        <div className="space-y-10" id="controls-panel-refined">
          
          {/* Step 1: Selection Grid of Product Categories */}
          <div className="bg-white rounded-3xl border border-neutral-100 p-6 md:p-8 shadow-sm" id="premium-products-rack">
            <div className="flex items-center gap-3 mb-6">
              <span className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-black">1</span>
              <div>
                <h3 className="font-extrabold text-base tracking-tight text-neutral-900 uppercase">Select Merchandise Base</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Choose your product archetype to configure options</p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4" id="improved-product-selection-grid">
              {CUSTOMIZABLE_PRODUCTS.map((prod) => {
                const IconComponent = prod.icon;
                const isSelected = selectedProduct.id === prod.id;
                return (
                  <button
                    key={prod.id}
                    onClick={() => handleProductChange(prod)}
                    className={`relative p-5 rounded-2xl text-left border transition-all flex flex-col justify-between aspect-[4/3] group outline-none ${
                      isSelected 
                        ? "border-neutral-900 bg-neutral-900 text-white shadow-md ring-2 ring-neutral-900/10" 
                        : "border-neutral-200 bg-white hover:border-neutral-400 hover:shadow-sm"
                    }`}
                    id={`btn-product-${prod.id}`}
                  >
                    <div className="flex justify-between items-start w-full">
                      <div className={`p-2 rounded-xl transition-colors ${isSelected ? 'bg-white text-neutral-900' : 'bg-neutral-50 text-neutral-600 group-hover:bg-neutral-100'}`}>
                        <IconComponent size={16} />
                      </div>
                      {isSelected && (
                        <span className="bg-white text-neutral-900 p-1.5 rounded-full shadow-sm text-xs font-bold leading-none flex items-center justify-center">
                          <Check size={9} strokeWidth={3} />
                        </span>
                      )}
                    </div>
                    <div>
                      <h4 className="font-extrabold text-xs sm:text-sm tracking-tight truncate mb-0.5">{prod.name}</h4>
                      <p className={`text-[10px] font-bold ${isSelected ? 'text-neutral-300' : 'text-neutral-400'}`}>
                        {prod.id === "phone-cover" ? "Flexible Pricing" : "Premium Tier"}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Step 2: Dynamic Conditional Sub-Options (RENDERED CONDITIONALLY) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProduct.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="bg-neutral-50 rounded-3xl border border-neutral-100 p-6 md:p-8 space-y-6 shadow-sm"
              id="dynamic-conditional-spec-card"
            >
              
              {/* Conditional mobile device setup */}
              {selectedProduct.id === "phone-cover" && (
                <div className="space-y-6" id="device-selector-block">
                  <div className="flex items-center gap-3 border-b border-neutral-200/60 pb-4">
                    <Smartphone size={18} className="text-neutral-500" />
                    <div>
                      <h3 className="font-bold text-sm tracking-wider uppercase text-neutral-800">Select Your Device</h3>
                      <p className="text-[11px] text-neutral-400">Specially designed protective fitting for your model</p>
                    </div>
                  </div>

                  {/* Horizontal Brand Pickers */}
                  <div>
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-2.5">Brand Family</span>
                    <div className="flex flex-wrap gap-2.5">
                      {Object.keys(phoneModelsMap).map((brand) => (
                        <button
                          key={brand}
                          onClick={() => setPhoneBrand(brand)}
                          className={`px-4 py-2.5 rounded-xl border text-xs font-bold transition-all ${
                            phoneBrand === brand 
                              ? "bg-neutral-900 border-neutral-900 text-white" 
                              : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-400"
                          }`}
                          id={`brand-select-${brand.toLowerCase()}`}
                        >
                          {brand}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Phone Model dropdown */}
                  <div>
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-2">Specific Model</span>
                    <div className="relative">
                      <select
                        value={phoneModel}
                        onChange={(e) => setPhoneModel(e.target.value)}
                        className="w-full bg-white border border-neutral-200 hover:border-neutral-300 rounded-xl px-4 py-3.5 pr-10 text-xs font-bold tracking-wide text-neutral-800 appearance-none outline-none focus:border-neutral-900 transition-colors"
                        id="phone-model-dropdown"
                      >
                        {phoneModelsMap[phoneBrand]?.map((model) => (
                          <option key={model} value={model}>{model}</option>
                        ))}
                      </select>
                      <ChevronDown size={14} className="absolute right-4 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" />
                    </div>
                  </div>

                  {/* Protective Material upgrades mapping strictly to ₹550, ₹750, ₹1100, ₹1400 */}
                  <div>
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-3">Armor Upgrade Options</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      <button
                        onClick={() => setPhoneMaterial("standard")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          phoneMaterial === "standard" ? "border-neutral-900 shadow-sm ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                        id="phone-mat-std"
                      >
                        <span className="block text-xs font-extrabold text-neutral-900 mb-0.5">Classic Air-Armor TPU</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Impact cushioning, perfect slim profile protection.</span>
                        <span className="text-xs font-black text-neutral-800">₹550 Tier</span>
                      </button>

                      <button
                        onClick={() => setPhoneMaterial("shatterproof")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          phoneMaterial === "shatterproof" ? "border-neutral-900 shadow-sm ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                        id="phone-mat-shatter"
                      >
                        <span className="block text-xs font-extrabold text-neutral-900 mb-0.5">Dual-Shield Hybrid Glass</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Premium glass gloss surface with reinforced shock edge.</span>
                        <span className="text-xs font-black text-neutral-800">₹750 Tier</span>
                      </button>

                      <button
                        onClick={() => setPhoneMaterial("carbon")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          phoneMaterial === "carbon" ? "border-neutral-900 shadow-sm ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                        id="phone-mat-carbon"
                      >
                        <span className="block text-xs font-extrabold text-neutral-900 mb-0.5">Aramid Carbon Matte Fiber</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">High-performance tech-weave, scratchproof and heat dissipation.</span>
                        <span className="text-xs font-black text-neutral-800">₹1100 Tier</span>
                      </button>

                      <button
                        onClick={() => setPhoneMaterial("elite-leather")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          phoneMaterial === "elite-leather" ? "border-neutral-900 shadow-sm ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                        id="phone-mat-leather"
                      >
                        <span className="block text-xs font-extrabold text-neutral-900 mb-0.5">Italian Napa Leather Guard</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Luxury textured hide surface with gold alloy accents.</span>
                        <span className="text-xs font-black text-neutral-800">₹1400 Tier</span>
                      </button>

                    </div>
                  </div>
                </div>
              )}

              {/* Conditional Apparel Fit and Textile upgrades */}
              {selectedProduct.category === "apparel" && (
                <div className="space-y-6" id="apparel-specs-block">
                  <div className="flex items-center gap-3 border-b border-neutral-200/60 pb-4">
                    <Shirt size={18} className="text-neutral-500" />
                    <div>
                      <h3 className="font-bold text-sm tracking-wider uppercase text-neutral-800">Silhouette Fit & Size</h3>
                      <p className="text-[11px] text-neutral-400">Tailor-design the look, size drape, and textile finishes</p>
                    </div>
                  </div>

                  {/* Size selection */}
                  <div>
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-2.5">Choose Size</span>
                    <div className="flex gap-2" id="apparel-sizing-row">
                      {["S", "M", "L", "XL"].map((sz) => (
                        <button
                          key={sz}
                          onClick={() => setSelectedSize(sz)}
                          className={`w-9 h-9 rounded-lg border text-[11px] font-extrabold transition-all outline-none ${
                            selectedSize === sz 
                              ? "bg-neutral-900 text-white border-neutral-900 shadow-sm" 
                              : "bg-white border-neutral-200 text-neutral-600 hover:border-neutral-300"
                          }`}
                          id={`size-sub-${sz}`}
                        >
                          {sz}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Silhouette Fit selector */}
                  <div>
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-2.5">Select Premium Fit Style</span>
                    <div className="grid grid-cols-3 gap-2.5">
                      {["Slim Tailored Fit", "Signature Classic", "Oversized Streetwear"].map((fit) => (
                        <button
                          key={fit}
                          onClick={() => setApparelFit(fit)}
                          className={`p-3.5 rounded-xl border text-center transition-all bg-white ${
                            apparelFit === fit 
                              ? "border-neutral-800 bg-white ring-1 ring-neutral-800 shadow-xs" 
                              : "border-neutral-200 text-neutral-600 hover:border-neutral-300"
                          }`}
                          id={`fit-sub-${fit.replace(" ", "-")}`}
                        >
                          <span className="block text-xs font-bold text-neutral-900">{fit}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Dynamic textile quality upgrades targeting ₹550, ₹750, ₹1100, ₹1400 */}
                  <div>
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-3">Material Weave Pack</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      {selectedProduct.id === "t-shirt" && (
                        <button
                          onClick={() => setFabricPremiumGrade("standard")}
                          className={`p-4 rounded-xl border text-left transition-all bg-white ${
                            fabricPremiumGrade === "standard" ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                          }`}
                          id="mat-apparel-std"
                        >
                          <span className="block text-xs font-bold text-neutral-900 mb-0.5">Classic Soft Cotton</span>
                          <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Combed 180 GSM yarn, clean standard stitch.</span>
                          <span className="text-xs font-black text-neutral-800">₹550 Tier</span>
                        </button>
                      )}

                      <button
                        onClick={() => setFabricPremiumGrade("dual-combed")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          fabricPremiumGrade === "dual-combed" ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                        id="mat-apparel-heavy"
                      >
                        <span className="block text-xs font-bold text-neutral-900 mb-0.5">Heavyweight Structured Weave</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Double spun heavy structured texture, perfect fall.</span>
                        <span className="text-xs font-black text-neutral-800">₹750 Tier</span>
                      </button>

                      <button
                        onClick={() => setFabricPremiumGrade("belgian-organic")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          fabricPremiumGrade === "belgian-organic" ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                        id="mat-apparel-linen"
                      >
                        <span className="block text-xs font-bold text-neutral-900 mb-0.5">Belgian Linen-Organic Blend</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Pure eco certified flax fibers, ultra cooling comfort.</span>
                        <span className="text-xs font-black text-neutral-800">₹1100 Tier</span>
                      </button>

                      <button
                        onClick={() => setFabricPremiumGrade("luxury-silk")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          fabricPremiumGrade === "luxury-silk" ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                        id="mat-apparel-silk"
                      >
                        <span className="block text-xs font-bold text-neutral-900 mb-0.5">Refined Royal Satin Weft</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Luxury gold weave threads with satin touch elegance.</span>
                        <span className="text-xs font-black text-neutral-800">₹1400 Tier</span>
                      </button>

                    </div>
                  </div>
                </div>
              )}

              {/* Conditional Accessory options: Carry Bag / Designer Mug */}
              {selectedProduct.category === "accessory" && (
                <div className="space-y-6" id="accessory-specs-block">
                  <div className="flex items-center gap-3 border-b border-neutral-200/60 pb-4">
                    <Layers size={18} className="text-neutral-500" />
                    <div>
                      <h3 className="font-bold text-sm tracking-wider uppercase text-neutral-800">Material & Capacity Pack</h3>
                      <p className="text-[11px] text-neutral-400">Personalize canvas volumes or mug insulation layers</p>
                    </div>
                  </div>

                  {/* Sizing options */}
                  <div>
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-2.5">Accessory Volume Capacity</span>
                    <div className="flex gap-2">
                      {selectedProduct.id === "bag" ? (
                        <>
                          <button
                            onClick={() => setAccessoryCapacity("15L Standard Daily")}
                            className={`px-4 py-2.5 rounded-lg border text-xs font-bold transition-all ${
                              accessoryCapacity === "15L Standard Daily" ? "bg-neutral-900 border-neutral-900 text-white" : "bg-white border-neutral-200"
                            }`}
                          >
                            15L Standard Daily
                          </button>
                          <button
                            onClick={() => setAccessoryCapacity("25L Travel Expanded")}
                            className={`px-4 py-2.5 rounded-lg border text-xs font-bold transition-all ${
                              accessoryCapacity === "25L Travel Expanded" ? "bg-neutral-900 border-neutral-900 text-white" : "bg-white border-neutral-200"
                            }`}
                          >
                            25L Travel Expanded
                          </button>
                        </>
                      ) : (
                        <>
                          <button
                            onClick={() => setAccessoryCapacity("330 ml Standard Office")}
                            className={`px-4 py-2.5 rounded-lg border text-xs font-bold transition-all ${
                              accessoryCapacity === "330 ml Standard Office" ? "bg-neutral-900 border-neutral-900 text-white" : "bg-white border-neutral-200"
                            }`}
                          >
                            330 ml Standard Mug
                          </button>
                          <button
                            onClick={() => setAccessoryCapacity("450 ml Tall Coffee Mug")}
                            className={`px-4 py-2.5 rounded-lg border text-xs font-bold transition-all ${
                              accessoryCapacity === "450 ml Tall Coffee Mug" ? "bg-neutral-900 border-neutral-900 text-white" : "bg-white border-neutral-200"
                            }`}
                          >
                            450 ml Insulated Tall
                          </button>
                        </>
                      )}
                    </div>
                  </div>

                  {/* Dynamic tier matching for bag and coffee cup options Strictly to [550, 750, 1100, 1400] */}
                  <div>
                    <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest block mb-3">Premium Edition Grade</span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      
                      <button
                        onClick={() => setAccessoryMaterial("Standard Eco Canvas / Ceramic")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          accessoryMaterial === "Standard Eco Canvas / Ceramic" ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <span className="block text-xs font-bold text-neutral-900 mb-0.5">Classic Eco Comfort</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Sustainable organic weave thread or fine glaze finish.</span>
                        <span className="text-xs font-black text-neutral-800">₹550 Tier</span>
                      </button>

                      <button
                        onClick={() => setAccessoryMaterial("Heavy-Duty Tarpaulin / Matte Finish Mug")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          accessoryMaterial === "Heavy-Duty Tarpaulin / Matte Finish Mug" ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <span className="block text-xs font-bold text-neutral-900 mb-0.5">Deluxe Matte Stout Finish</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Premium scratch-resistant matte style coatings.</span>
                        <span className="text-xs font-black text-neutral-800">₹750 Tier</span>
                      </button>

                      <button
                        onClick={() => setAccessoryMaterial("Premium Insulated Brass Weave / Suede")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          accessoryMaterial === "Premium Insulated Brass Weave / Suede" ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <span className="block text-xs font-bold text-neutral-900 mb-0.5">Elite Suede Trim / Thermo Shield</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Double vacuum insulation layers or bespoke leather grips.</span>
                        <span className="text-xs font-black text-neutral-800">₹1100 Tier</span>
                      </button>

                      <button
                        onClick={() => setAccessoryMaterial("Luxury Italian Handcrafted Collector Edition")}
                        className={`p-4 rounded-xl border text-left transition-all bg-white ${
                          accessoryMaterial === "Luxury Italian Handcrafted Collector Edition" ? "border-neutral-900 ring-1 ring-neutral-900" : "border-neutral-200 hover:border-neutral-300"
                        }`}
                      >
                        <span className="block text-xs font-bold text-neutral-900 mb-0.5">Artisanal Collector Edition</span>
                        <span className="block text-[10px] text-neutral-400 leading-normal mb-2">Handmade design trims and luxurious gift box packaging.</span>
                        <span className="text-xs font-black text-neutral-800">₹1400 Tier</span>
                      </button>

                    </div>
                  </div>
                </div>
              )}

            </motion.div>
          </AnimatePresence>

          {/* Step 3: Aesthetic Accents & Typography Personalization */}
          <div className="bg-white rounded-3xl border border-neutral-100 p-6 md:p-8 shadow-sm space-y-6" id="style-custom-card">
            <div className="flex items-center gap-3">
              <span className="w-7 h-7 rounded-full bg-neutral-900 text-white flex items-center justify-center text-xs font-black">3</span>
              <div>
                <h3 className="font-extrabold text-base tracking-tight text-neutral-900 uppercase">Aesthetic Accent Styling</h3>
                <p className="text-xs text-neutral-400 mt-0.5">Configure colors and engravings</p>
              </div>
            </div>

            {/* Custom Background Color Accent */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <Paintbrush size={14} className="text-neutral-400" />
                <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">Base Color Overlay Tint</span>
              </div>
              <div className="flex flex-wrap gap-2.5">
                {colorOptions.map((c) => {
                  const isColorSel = selectedColor.name === c.name;
                  return (
                    <button
                      key={c.name}
                      onClick={() => setSelectedColor(c)}
                      className={`relative p-0.5 rounded-full transition-all hover:scale-110 flex items-center justify-center outline-none ${isColorSel ? "ring-2 ring-neutral-950 ring-offset-2 scale-105" : ""}`}
                      title={c.name}
                      id={`color-picker-${c.name.replace(" ", "-")}`}
                    >
                      <span 
                        className="w-8 h-8 rounded-full border border-neutral-200/80 block"
                        style={{ backgroundColor: c.hex }}
                      />
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Custom Embroidery Print Text block */}
            <div className="pt-2">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <Type size={14} className="text-neutral-400" />
                  <span className="text-[10px] font-extrabold text-neutral-400 uppercase tracking-widest">Inscribe Word/Initials (Max 14 chars)</span>
                </div>
                {customText && (
                  <button 
                    onClick={() => setCustomText("")}
                    className="text-[10px] uppercase font-bold text-neutral-400 hover:text-red-500 flex items-center gap-1 transition-colors"
                  >
                    <RotateCcw size={10} /> Clear
                  </button>
                )}
              </div>
              
              <div className="space-y-3">
                <input 
                  type="text" 
                  value={customText}
                  onChange={(e) => setCustomText(e.target.value.slice(0, 14))}
                  placeholder="Type signature code or text..."
                  className="w-full bg-neutral-50 border border-neutral-200 focus:border-neutral-900 focus:bg-white focus:ring-0 rounded-xl px-4 py-3.5 text-xs font-bold placeholder-neutral-400 uppercase transition-all"
                  id="custom-text-input-field"
                />
                
                {customText && (
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2" id="text-placement-row">
                    {["Center Print", "Chest Badge", "Bottom Edge", "Sleeve Collar"].map((placement) => (
                      <button
                        key={placement}
                        onClick={() => setTextPlacement(placement)}
                        className={`text-[10px] font-bold px-2 py-2.5 rounded-lg border transition-all ${
                          textPlacement === placement 
                            ? "bg-neutral-900 border-neutral-900 text-white shadow-xs" 
                            : "bg-white border-neutral-100 text-neutral-500 hover:bg-neutral-50"
                        }`}
                        id={`text-placement-${placement.replace(" ", "-")}`}
                      >
                        {placement}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Step 4: Checkout compilation card & redirect triggers with user contact note */}
          <div className="bg-neutral-950 text-white rounded-3.5xl p-7 md:p-9 shadow-xl space-y-6 relative overflow-hidden" id="premium-checkout-panel">
            <div className="absolute inset-0 bg-neutral-900/10 pointer-events-none noise-bg"></div>
            
            <div className="relative z-10 flex items-center justify-between border-b border-white/10 pb-5">
              <div>
                <span className="text-[10px] uppercase tracking-widest text-neutral-400 font-bold">Secure Checkout</span>
                <h3 className="text-lg font-extrabold uppercase mt-0.5 tracking-tight">Merchandise Order Desk</h3>
              </div>
              <ShieldCheck size={28} className="text-emerald-400" />
            </div>

            {/* Structured Specifications list */}
            <div className="relative z-10 text-xs font-medium text-neutral-300 space-y-2.5 pb-2" id="compiled-specification-list">
              <div className="flex justify-between items-center bg-white/5 px-3 py-2 rounded-lg">
                <span className="text-neutral-400 text-[11px]">Selected Item:</span>
                <span className="font-extrabold text-white text-[11px] uppercase tracking-wide">{selectedProduct.name}</span>
              </div>
              
              {selectedProduct.id === "phone-cover" && (
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-neutral-400">Target Device:</span>
                  <span className="font-bold text-white uppercase">{phoneBrand} ({phoneModel})</span>
                </div>
              )}

              {selectedProduct.category === "apparel" && (
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-neutral-400">Fit Silhouette:</span>
                  <span className="font-bold text-white uppercase">{apparelFit} / Size {selectedSize}</span>
                </div>
              )}

              <div className="flex justify-between items-center text-[11px]">
                <span className="text-neutral-400">Color Overlay:</span>
                <span className="font-bold text-white uppercase">{selectedColor.name}</span>
              </div>

              {customText && (
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-neutral-400">Custom Wordmark:</span>
                  <span className="font-mono font-bold text-yellow-300">"{customText}" ({textPlacement})</span>
                </div>
              )}
            </div>

            {/* Crucial dynamic total pricing details & direct linking tag redirect */}
            <div className="relative z-10 pt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6" id="price-and-action-row">
              <div>
                <span className="text-[10px] text-neutral-400 uppercase tracking-widest block font-bold mb-0.5">Comprehensive Price Total</span>
                <span className="text-4xl font-black text-white tracking-tight">&#8377;{calculatedPrice}</span>
              </div>

              <button
                type="button"
                onClick={handleProceedToPayment}
                disabled={isRedirecting}
                className="bg-white hover:bg-neutral-100 text-neutral-900 px-8 py-4 rounded-xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-3 shadow-lg transition-all w-full sm:w-auto disabled:opacity-50 relative z-20 outline-none"
                id="btn-proceed-redirect-pay"
              >
                {isRedirecting ? (
                  <>
                    <svg className="animate-spin h-4 w-4 text-neutral-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    <span>Processing Details...</span>
                  </>
                ) : (
                  <>
                    <span>Proceed to Pay</span>
                    <ArrowRight size={13} />
                  </>
                )}
              </button>
            </div>
            
            {/* Direct warning/info note emphasizing contact post-submit */}
            <div className="p-3 bg-white/5 border border-white/10 rounded-xl mt-4 space-y-2" id="post-payment-discuss-note">
              <p className="text-[10px] text-amber-200 leading-normal text-center">
                ✨ <strong>Design Consultation:</strong> Our team will contact you on WhatsApp to verify and discuss custom design details.
              </p>
              <div className="flex justify-center gap-3 text-[9px] uppercase tracking-wider font-bold text-neutral-400">
                <Link to="/policies/shipping" className="hover:text-white underline transition-colors">Shipping Policy</Link>
                <span>•</span>
                <Link to="/policies/refund" className="hover:text-white underline transition-colors">Refund Policy</Link>
                <span>•</span>
                <Link to="/policies/terms" className="hover:text-white underline transition-colors">Terms of Service</Link>
              </div>
            </div>

            <p className="text-[9px] text-neutral-500 text-center leading-normal font-mono relative z-10" id="checkout-disclaimer">
              Customization Verification Desk. Fast response & WhatsApp consultation.
            </p>
          </div>

        </div>

      </div>

      {/* WhatsApp Verification Details Pop-Up Modal */}
      <AnimatePresence>
        {showSuccessModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm" id="customizer-success-modal-overlay">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              className="bg-white text-neutral-900 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl relative border border-neutral-100 overflow-hidden"
              id="customizer-success-modal-box"
            >
              <button
                type="button"
                onClick={() => setShowSuccessModal(false)}
                className="absolute top-4 right-4 p-2 text-neutral-400 hover:text-neutral-700 bg-neutral-100 hover:bg-neutral-200 rounded-full transition-colors"
                aria-label="Close modal"
                id="close-customizer-modal-btn"
              >
                <X size={18} />
              </button>

              <div className="text-center space-y-4 pt-2">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                  <MessageCircle size={32} className="fill-emerald-100" />
                </div>

                <h3 className="text-xl font-extrabold text-neutral-900 uppercase tracking-tight">
                  Request Submitted!
                </h3>

                <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 text-left shadow-xs">
                  <p className="text-xs sm:text-sm font-semibold text-emerald-950 leading-relaxed text-center">
                    Your details have been sent to our team. They will contact you on your WhatsApp account for further verification and design discussion.
                  </p>
                </div>

                <div className="bg-neutral-50 rounded-2xl p-4 text-left space-y-2 border border-neutral-100 text-xs">
                  <div className="text-[10px] font-bold uppercase text-neutral-400 tracking-wider">Custom Spec Overview</div>
                  <div className="flex justify-between font-bold text-neutral-800">
                    <span>Selected Item:</span>
                    <span>{selectedProduct.name}</span>
                  </div>
                  {selectedProduct.id === "phone-cover" && (
                    <div className="flex justify-between text-neutral-600">
                      <span>Device:</span>
                      <span>{phoneBrand} ({phoneModel})</span>
                    </div>
                  )}
                  {selectedProduct.category === "apparel" && (
                    <div className="flex justify-between text-neutral-600">
                      <span>Fit / Size:</span>
                      <span>{apparelFit} / Size {selectedSize}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-neutral-600">
                    <span>Color Tone:</span>
                    <span>{selectedColor.name}</span>
                  </div>
                  {customText && (
                    <div className="flex justify-between text-neutral-600">
                      <span>Custom Wordmark:</span>
                      <span className="font-mono text-emerald-700 font-bold">"{customText}"</span>
                    </div>
                  )}
                  <div className="flex justify-between font-extrabold text-neutral-900 text-sm pt-2 border-t border-neutral-200">
                    <span>Estimated Total:</span>
                    <span>₹{calculatedPrice}</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setShowSuccessModal(false)}
                  className="w-full bg-neutral-900 hover:bg-neutral-800 text-white font-bold py-3.5 px-6 rounded-xl text-xs uppercase tracking-widest shadow-lg transition-all"
                  id="modal-got-it-btn"
                >
                  Got It
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
