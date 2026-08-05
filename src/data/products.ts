export interface ProductVariant {
  size?: string;
  color?: string;
  sku?: string;
  price?: number;
  orig?: number;
  stock?: number;
  image?: string;
}

export interface Product {
  id: number;
  cat: 'men' | 'women' | 'kids' | 'electronics' | 'accessories';
  name: string;
  price: number;
  orig: number; // 0 if none
  sizes: string[];
  colors?: string[];
  rating: number;
  reviews: number;
  desc: string;
  badge: 'SALE' | 'NEW' | 'FEATURED' | '';
  featured?: boolean;
  images?: string[];
  variantImages?: Record<string, string[]>; // Map color -> images array
  handle?: string;
  variants?: ProductVariant[];
}

export interface BlogPost {
  id: number;
  cat: string;
  title: string;
  excerpt: string;
  date: string;
  emoji: string;
}

export const PRODUCTS: Product[] = [
  // --- FEATURED & CSV IMPORTED PRODUCTS ---
  {
    id: 301,
    handle: "women-multi-coloured-floral-regular-fit-crop-top-1245231",
    cat: "women",
    name: "Women Multi Coloured Floral Regular Fit Crop Top",
    price: 499,
    orig: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Multi-coloured"],
    rating: 4.8,
    reviews: 124,
    badge: "NEW",
    featured: true,
    desc: "Color: Multi-coloured\nAvailable Sizes: S, M, L, XL, XXL\nStylish Women Multi Coloured Floral Regular Fit Crop Top. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    images: [
      "https://www.ownd.in/cdn/shop/files/1245231-31736617.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/1245231-31736618.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/1245231-31736619.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/1245231-31736620.jpg?width=1440"
    ],
    variantImages: {
      "Multi-coloured": [
        "https://www.ownd.in/cdn/shop/files/1245231-31736617.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1245231-31736618.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1245231-31736619.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1245231-31736620.jpg?width=1440"
      ]
    }
  },
  {
    id: 302,
    handle: "blue-stripes-relaxed-fit-shirt-for-women-1242753",
    cat: "women",
    name: "Blue Stripes Relaxed Fit Shirt For Women",
    price: 490,
    orig: 699,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Blue"],
    rating: 4.7,
    reviews: 89,
    badge: "SALE",
    featured: true,
    desc: "Color: Blue\nAvailable Sizes: XS, S, M, L, XL\nStylish Blue Stripes Relaxed Fit Shirt For Women. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.",
    images: [
      "https://www.ownd.in/cdn/shop/files/1242753-31625426.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/1242753-31625427.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/1242753-31625428.jpg?width=1440"
    ],
    variantImages: {
      "Blue": [
        "https://www.ownd.in/cdn/shop/files/1242753-31625426.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242753-31625427.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242753-31625428.jpg?width=1440"
      ]
    }
  },
  {
    id: 303,
    handle: "white-and-black-wide-leg-fit-casual-trouser-with-2-pocket-for-women-1242713",
    cat: "women",
    name: "White and Black Wide Leg Fit Casual Trouser With 2 Pocket For Women",
    price: 490,
    orig: 699,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White"],
    rating: 4.6,
    reviews: 64,
    badge: "SALE",
    featured: false,
    desc: "Color: White\nAvailable Sizes: S, M, L, XL, XXL\nStylish White and Black Wide Leg Fit Casual Trouser With 2 Pocket For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/1242713-31625272.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/1242713-31625273.jpg?width=1440"
    ],
    variantImages: {
      "White": [
        "https://www.ownd.in/cdn/shop/files/1242713-31625272.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242713-31625273.jpg?width=1440"
      ]
    }
  },
  {
    id: 304,
    handle: "1242736-men-pink-stripes-regular-fit-shirt",
    cat: "men",
    name: "Stripes Regular Fit Shirt For Men",
    price: 560,
    orig: 799,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Blue", "Green"],
    rating: 4.9,
    reviews: 142,
    badge: "SALE",
    featured: true,
    desc: "Available Colors: Pink, Blue, Green\nAvailable Sizes: S, M, L, XL, XXL\nStylish Stripes Regular Fit Shirt For Men. Premium cotton blend fabric with elegant vertical stripes.",
    images: [
      "https://www.ownd.in/cdn/shop/files/1242736-31625489.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/1242737-31625496.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/1242738-31625503.jpg?width=1440"
    ],
    variantImages: {
      "Pink": [
        "https://www.ownd.in/cdn/shop/files/1242736-31625489.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242736-31625490.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242736-31625491.jpg?width=1440"
      ],
      "Blue": [
        "https://www.ownd.in/cdn/shop/files/1242737-31625496.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242737-31625497.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242737-31625498.jpg?width=1440"
      ],
      "Green": [
        "https://www.ownd.in/cdn/shop/files/1242738-31625503.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242738-31625504.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/1242738-31625505.jpg?width=1440"
      ]
    }
  },
  {
    id: 305,
    handle: "brown-slim-fit-utility-pocket-trouser-for-men-1241823",
    cat: "men",
    name: "Slim Fit Utility Pocket Trouser For Men",
    price: 630,
    orig: 899,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Brown", "Navy", "Off White"],
    rating: 4.8,
    reviews: 98,
    badge: "SALE",
    featured: true,
    desc: "Available Colors: Brown, Navy, Off White\nAvailable Sizes: 30, 32, 34, 36, 38\nStylish Slim Fit Utility Pocket Trouser For Men.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429684377_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429735338_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429684476_1.jpg?width=1440"
    ],
    variantImages: {
      "Brown": [
        "https://www.ownd.in/cdn/shop/files/8909429684377_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429684377_2.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429684377_3.jpg?width=1440"
      ],
      "Navy": [
        "https://www.ownd.in/cdn/shop/files/8909429735338_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429735338_2.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429735338_3.jpg?width=1440"
      ],
      "Off White": [
        "https://www.ownd.in/cdn/shop/files/8909429684476_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429684476_2.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429684476_3.jpg?width=1440"
      ]
    }
  },
  {
    id: 306,
    handle: "olive-slim-fit-utility-pocket-trouser-for-men-1241822",
    cat: "men",
    name: "Olive Slim Fit Utility Pocket Trouser For Men",
    price: 630,
    orig: 899,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Olive"],
    rating: 4.5,
    reviews: 52,
    badge: "SALE",
    featured: false,
    desc: "Color: Olive\nAvailable Sizes: 30, 32, 34, 36, 38\nStylish Olive Slim Fit Utility Pocket Trouser For Men.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429684520_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429684520_2.jpg?width=1440"
    ],
    variantImages: {
      "Olive": [
        "https://www.ownd.in/cdn/shop/files/8909429684520_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429684520_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 307,
    handle: "beige-graphic-print-crew-neck-t-shirt-for-men-1241813",
    cat: "men",
    name: "Beige Graphic Print Crew Neck T-Shirt For Men",
    price: 280,
    orig: 399,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Beige"],
    rating: 4.7,
    reviews: 77,
    badge: "SALE",
    featured: false,
    desc: "Color: Beige\nAvailable Sizes: S, M, L, XL, XXL\nStylish Beige Graphic Print Crew Neck T-Shirt For Men.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429684827_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429684827_2.jpg?width=1440"
    ],
    variantImages: {
      "Beige": [
        "https://www.ownd.in/cdn/shop/files/8909429684827_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429684827_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 308,
    handle: "beige-race-print-t-shirt-shorts-set-for-boys-1241802",
    cat: "kids",
    name: "Race Print T-Shirt & Shorts Set For Boys",
    price: 349,
    orig: 499,
    sizes: ["1-2Y", "2-3Y", "3-4Y", "5-6Y", "7-8Y"],
    colors: ["Beige", "Off White", "Red"],
    rating: 4.9,
    reviews: 110,
    badge: "SALE",
    featured: true,
    desc: "Available Colors: Beige, Off White, Red\nAvailable Sizes: 1-2Y, 2-3Y, 3-4Y, 5-6Y, 7-8Y\nStylish Race Print T-Shirt & Shorts Co-ord Set For Boys.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429178234_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429178289_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429178180_1.jpg?width=1440"
    ],
    variantImages: {
      "Beige": [
        "https://www.ownd.in/cdn/shop/files/8909429178234_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429178234_2.jpg?width=1440"
      ],
      "Off White": [
        "https://www.ownd.in/cdn/shop/files/8909429178289_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429178289_2.jpg?width=1440"
      ],
      "Red": [
        "https://www.ownd.in/cdn/shop/files/8909429178180_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429178180_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 309,
    handle: "light-blue-mid-embroidered-rise-fit-skirt-for-women-1241801",
    cat: "women",
    name: "Light Blue Mid Embroidered Rise Fit Skirt For Women",
    price: 490,
    orig: 699,
    sizes: ["XS", "S", "M", "L", "XL"],
    colors: ["Light Blue"],
    rating: 4.6,
    reviews: 43,
    badge: "SALE",
    featured: false,
    desc: "Color: Light Blue\nAvailable Sizes: XS, S, M, L, XL\nStylish Light Blue Mid Embroidered Rise Fit Skirt For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429621204_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429621204_2.jpg?width=1440"
    ],
    variantImages: {
      "Light Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429621204_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429621204_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 310,
    handle: "green-floral-print-straight-kurta-for-women-1241786",
    cat: "women",
    name: "Floral Print Straight Kurta For Women",
    price: 280,
    orig: 399,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Brown"],
    rating: 4.8,
    reviews: 156,
    badge: "SALE",
    featured: true,
    desc: "Available Colors: Green, Brown\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Floral Print Straight Kurta For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429623284_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429623222_1.jpg?width=1440"
    ],
    variantImages: {
      "Green": [
        "https://www.ownd.in/cdn/shop/files/8909429623284_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429623284_2.jpg?width=1440"
      ],
      "Brown": [
        "https://www.ownd.in/cdn/shop/files/8909429623222_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429623222_3.jpg?width=1440"
      ]
    }
  },
  {
    id: 311,
    handle: "black-high-rise-skinny-fit-shapewear-for-women-1241566",
    cat: "women",
    name: "Black High Rise Skinny Fit Shapewear For Women",
    price: 499,
    orig: 0,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black"],
    rating: 4.5,
    reviews: 68,
    badge: "NEW",
    featured: false,
    desc: "Color: Black\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Black High Rise Skinny Fit Shapewear For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429568851_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429568851_2.jpg?width=1440"
    ],
    variantImages: {
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429568851_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429568851_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 312,
    handle: "black-nylon-blend-regular-fit-bra-for-women-1241565",
    cat: "women",
    name: "Nylon Blend Regular Fit Bra For Women",
    price: 399,
    orig: 0,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Taupe", "Beige"],
    rating: 4.7,
    reviews: 92,
    badge: "NEW",
    featured: false,
    desc: "Available Colors: Black, Taupe, Beige\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Nylon Blend Regular Fit Bra For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429131970_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429132021_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429131925_1.jpg?width=1440"
    ],
    variantImages: {
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429131970_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429131970_2.jpg?width=1440"
      ],
      "Taupe": [
        "https://www.ownd.in/cdn/shop/files/8909429132021_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429132021_2.jpg?width=1440"
      ],
      "Beige": [
        "https://www.ownd.in/cdn/shop/files/8909429131925_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429131925_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 313,
    handle: "black-regular-fit-casual-trouser-with-1-pocket-for-women-1241455",
    cat: "women",
    name: "Regular Fit Casual Trouser With 1 Pocket For Women",
    price: 399,
    orig: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Black", "Beige", "White"],
    rating: 4.6,
    reviews: 73,
    badge: "NEW",
    featured: false,
    desc: "Available Colors: Black, Beige, White\nAvailable Sizes: S, M, L, XL, XXL\nStylish Regular Fit Casual Trouser With 1 Pocket For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429162264_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429162318_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429162363_1.jpg?width=1440"
    ],
    variantImages: {
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429162264_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162264_2.jpg?width=1440"
      ],
      "Beige": [
        "https://www.ownd.in/cdn/shop/files/8909429162318_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162318_2.jpg?width=1440"
      ],
      "White": [
        "https://www.ownd.in/cdn/shop/files/8909429162363_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162363_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 314,
    handle: "black-skinny-fit-jeans-with-5-pocket-for-women-1241494",
    cat: "women",
    name: "Skinny Fit Jeans With 5 Pocket For Women",
    price: 799,
    orig: 0,
    sizes: ["26", "28", "30", "32", "34", "36"],
    colors: ["Black", "Light Blue", "Navy"],
    rating: 4.8,
    reviews: 135,
    badge: "NEW",
    featured: true,
    desc: "Available Colors: Black, Light Blue, Navy\nAvailable Sizes: 26, 28, 30, 32, 34, 36\nStylish Skinny Fit Jeans With 5 Pocket For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429233988_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429233858_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429233926_1.jpg?width=1440"
    ],
    variantImages: {
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429233988_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429233988_2.jpg?width=1440"
      ],
      "Light Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429233858_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429233858_2.jpg?width=1440"
      ],
      "Navy": [
        "https://www.ownd.in/cdn/shop/files/8909429233926_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429233926_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 315,
    handle: "mens-slim-solid-navy-formal-trousers-1241488",
    cat: "men",
    name: "Mens Slim Solid Navy Formal Trousers",
    price: 899,
    orig: 0,
    sizes: ["30", "32", "34", "36", "38"],
    colors: ["Navy", "Black", "Charcoal"],
    rating: 4.9,
    reviews: 168,
    badge: "FEATURED",
    featured: true,
    desc: "Available Colors: Navy, Black, Charcoal\nAvailable Sizes: 30, 32, 34, 36, 38\nStylish Mens Slim Solid Formal Trousers.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429738087_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429560473_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429738032_1.jpg?width=1440"
    ],
    variantImages: {
      "Navy": [
        "https://www.ownd.in/cdn/shop/files/8909429738087_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429738087_2.jpg?width=1440"
      ],
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429560473_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429560473_2.jpg?width=1440"
      ],
      "Charcoal": [
        "https://www.ownd.in/cdn/shop/files/8909429738032_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429738032_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 316,
    handle: "pink-cotton-blend-regular-fit-shirt-for-men-1241486",
    cat: "men",
    name: "Cotton Blend Regular Fit Shirt For Men",
    price: 699,
    orig: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Blue"],
    rating: 4.7,
    reviews: 94,
    badge: "NEW",
    featured: false,
    desc: "Available Colors: Pink, Blue\nAvailable Sizes: S, M, L, XL, XXL\nStylish Cotton Blend Regular Fit Shirt For Men.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429109092_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429109047_1.jpg?width=1440"
    ],
    variantImages: {
      "Pink": [
        "https://www.ownd.in/cdn/shop/files/8909429109092_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429109092_2.jpg?width=1440"
      ],
      "Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429109047_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429109047_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 317,
    handle: "light-blue-wide-leg-fit-jeans-with-4-pocket-for-women-1241505",
    cat: "women",
    name: "Wide Leg Fit Jeans With 4 Pocket For Women",
    price: 700,
    orig: 999,
    sizes: ["26", "28", "30", "32", "34", "36"],
    colors: ["Light Blue", "Charcoal"],
    rating: 4.8,
    reviews: 81,
    badge: "SALE",
    featured: false,
    desc: "Available Colors: Light Blue, Charcoal\nAvailable Sizes: 26, 28, 30, 32, 34, 36\nStylish Wide Leg Fit Jeans With 4 Pocket For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429465372_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429623550_1.jpg?width=1440"
    ],
    variantImages: {
      "Light Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429465372_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429465372_2.jpg?width=1440"
      ],
      "Charcoal": [
        "https://www.ownd.in/cdn/shop/files/8909429623550_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429623550_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 318,
    handle: "light-blue-wide-leg-fit-jeans-with-5-pocket-for-women-1241503",
    cat: "women",
    name: "Wide Leg Fit Jeans With 5 Pocket For Women",
    price: 630,
    orig: 899,
    sizes: ["26", "28", "30", "32", "34", "36"],
    colors: ["Light Blue", "Black", "Blue"],
    rating: 4.7,
    reviews: 99,
    badge: "SALE",
    featured: false,
    desc: "Available Colors: Light Blue, Black, Blue\nAvailable Sizes: 26, 28, 30, 32, 34, 36\nStylish Wide Leg Fit Jeans With 5 Pocket For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429143676_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429143607_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429143720_1.jpg?width=1440"
    ],
    variantImages: {
      "Light Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429143676_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429143676_2.jpg?width=1440"
      ],
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429143607_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429143607_2.jpg?width=1440"
      ],
      "Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429143720_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429143720_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 319,
    handle: "navy-wide-leg-fit-jeans-with-6-pocket-for-women-1241498",
    cat: "women",
    name: "Wide Leg Fit Jeans With 6 Pocket For Women",
    price: 700,
    orig: 999,
    sizes: ["26", "28", "30", "32", "34", "36"],
    colors: ["Navy", "Light Blue", "Blue"],
    rating: 4.8,
    reviews: 112,
    badge: "SALE",
    featured: false,
    desc: "Available Colors: Navy, Light Blue, Blue\nAvailable Sizes: 26, 28, 30, 32, 34, 36\nStylish Wide Leg Fit Jeans With 6 Pocket For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429144642_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429144680_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429144741_1.jpg?width=1440"
    ],
    variantImages: {
      "Navy": [
        "https://www.ownd.in/cdn/shop/files/8909429144642_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429144642_2.jpg?width=1440"
      ],
      "Light Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429144680_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429144680_2.jpg?width=1440"
      ],
      "Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429144741_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429144741_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 320,
    handle: "yellow-puff-sleeves-regular-fit-dress-for-women-1241535",
    cat: "women",
    name: "Yellow Puff Sleeves Regular Fit Dress For Women",
    price: 699,
    orig: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Yellow"],
    rating: 4.9,
    reviews: 145,
    badge: "NEW",
    featured: true,
    desc: "Color: Yellow\nAvailable Sizes: S, M, L, XL, XXL\nStylish Yellow Puff Sleeves Regular Fit Dress For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429534405_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429534405_2.jpg?width=1440"
    ],
    variantImages: {
      "Yellow": [
        "https://www.ownd.in/cdn/shop/files/8909429534405_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429534405_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 321,
    handle: "pink-drop-shoulder-sleeves-regular-fit-sweatshirt-for-women-1241527",
    cat: "women",
    name: "Drop Shoulder Sleeves Regular Fit Sweatshirt For Women",
    price: 560,
    orig: 799,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["Pink", "Brown"],
    rating: 4.7,
    reviews: 86,
    badge: "SALE",
    featured: false,
    desc: "Available Colors: Pink, Brown\nAvailable Sizes: S, M, L, XL, XXL\nStylish Drop Shoulder Sleeves Regular Fit Sweatshirt For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429540154_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429540208_1.jpg?width=1440"
    ],
    variantImages: {
      "Pink": [
        "https://www.ownd.in/cdn/shop/files/8909429540154_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429540154_2.jpg?width=1440"
      ],
      "Brown": [
        "https://www.ownd.in/cdn/shop/files/8909429540208_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429540208_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 322,
    handle: "black-solid-tube-bra-for-women-1240577",
    cat: "women",
    name: "Solid Tube Bra For Women",
    price: 200,
    orig: 399,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Black", "White", "Purple"],
    rating: 4.6,
    reviews: 79,
    badge: "SALE",
    featured: false,
    desc: "Available Colors: Black, White, Purple\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Solid Tube Bra For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429525885_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429547832_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429547788_1.jpg?width=1440"
    ],
    variantImages: {
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429525885_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429525885_2.jpg?width=1440"
      ],
      "White": [
        "https://www.ownd.in/cdn/shop/files/8909429547832_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429547832_2.jpg?width=1440"
      ],
      "Purple": [
        "https://www.ownd.in/cdn/shop/files/8909429547788_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429547788_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 323,
    handle: "light-blue-solid-flared-jeans-for-women-1240571",
    cat: "women",
    name: "Light Blue Solid Flared Jeans For Women",
    price: 799,
    orig: 0,
    sizes: ["26", "28", "30", "32", "34", "36"],
    colors: ["Light Blue"],
    rating: 4.8,
    reviews: 104,
    badge: "NEW",
    featured: false,
    desc: "Color: Light Blue\nAvailable Sizes: 26, 28, 30, 32, 34, 36\nStylish Light Blue Solid Flared Jeans For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429234091_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429234091_2.jpg?width=1440"
    ],
    variantImages: {
      "Light Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429234091_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429234091_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 324,
    handle: "navy-striped-regular-fit-t-shirt-for-infant-boys-1240565",
    cat: "kids",
    name: "Striped Regular Fit T-Shirt For Infant Boys",
    price: 209,
    orig: 299,
    sizes: ["6-9 M", "9-12 M", "12-18 M", "18-24 M"],
    colors: ["Navy", "Light Blue", "Yellow"],
    rating: 4.9,
    reviews: 88,
    badge: "SALE",
    featured: true,
    desc: "Available Colors: Navy, Light Blue, Yellow\nAvailable Sizes: 6-9 M, 9-12 M, 12-18 M, 18-24 M\nStylish Striped Regular Fit T-Shirt For Infant Boys.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429178722_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429178883_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429178807_1.jpg?width=1440"
    ],
    variantImages: {
      "Navy": [
        "https://www.ownd.in/cdn/shop/files/8909429178722_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429178722_2.jpg?width=1440"
      ],
      "Light Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429178883_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429178883_2.jpg?width=1440"
      ],
      "Yellow": [
        "https://www.ownd.in/cdn/shop/files/8909429178807_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429178807_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 325,
    handle: "white-solid-rayon-pant-for-women-1240563",
    cat: "women",
    name: "Solid Rayon Pant For Women",
    price: 399,
    orig: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Black"],
    rating: 4.6,
    reviews: 58,
    badge: "NEW",
    featured: false,
    desc: "Available Colors: White, Black\nAvailable Sizes: S, M, L, XL, XXL\nStylish Solid Rayon Pant For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429162219_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429162165_1.jpg?width=1440"
    ],
    variantImages: {
      "White": [
        "https://www.ownd.in/cdn/shop/files/8909429162219_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162219_2.jpg?width=1440"
      ],
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429162165_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162165_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 326,
    handle: "white-cotton-blend-solid-pant-for-women-1240561",
    cat: "women",
    name: "Cotton Blend Solid Pant For Women",
    price: 399,
    orig: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Beige"],
    rating: 4.7,
    reviews: 63,
    badge: "NEW",
    featured: false,
    desc: "Available Colors: White, Beige\nAvailable Sizes: S, M, L, XL, XXL\nStylish Cotton Blend Solid Pant For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429162462_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429162417_1.jpg?width=1440"
    ],
    variantImages: {
      "White": [
        "https://www.ownd.in/cdn/shop/files/8909429162462_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162462_2.jpg?width=1440"
      ],
      "Beige": [
        "https://www.ownd.in/cdn/shop/files/8909429162417_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162417_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 327,
    handle: "white-solid-lace-design-pant-for-women-1240560",
    cat: "women",
    name: "Solid Lace Design Pant For Women",
    price: 399,
    orig: 0,
    sizes: ["S", "M", "L", "XL", "XXL"],
    colors: ["White", "Beige", "Black"],
    rating: 4.8,
    reviews: 87,
    badge: "NEW",
    featured: false,
    desc: "Available Colors: White, Beige, Black\nAvailable Sizes: S, M, L, XL, XXL\nStylish Solid Lace Design Pant For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429162615_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429162561_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429162516_1.jpg?width=1440"
    ],
    variantImages: {
      "White": [
        "https://www.ownd.in/cdn/shop/files/8909429162615_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162615_2.jpg?width=1440"
      ],
      "Beige": [
        "https://www.ownd.in/cdn/shop/files/8909429162561_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162561_2.jpg?width=1440"
      ],
      "Black": [
        "https://www.ownd.in/cdn/shop/files/8909429162516_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429162516_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 328,
    handle: "mint-floral-printed-regular-fit-kurta-for-women-1240196",
    cat: "women",
    name: "Mint Floral Printed Regular Fit Kurta For Women",
    price: 399,
    orig: 0,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Green", "Pink"],
    rating: 4.7,
    reviews: 95,
    badge: "NEW",
    featured: false,
    desc: "Available Colors: Green, Pink\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Mint Floral Printed Regular Fit Kurta For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429623406_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429623345_1.jpg?width=1440"
    ],
    variantImages: {
      "Green": [
        "https://www.ownd.in/cdn/shop/files/8909429623406_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429623406_2.jpg?width=1440"
      ],
      "Pink": [
        "https://www.ownd.in/cdn/shop/files/8909429623345_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429623345_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 329,
    handle: "charcoal-solid-regular-fit-jeans-for-women-1240195",
    cat: "women",
    name: "Solid Regular Fit Jeans For Women",
    price: 630,
    orig: 899,
    sizes: ["26", "28", "30", "32", "34", "36"],
    colors: ["Charcoal", "Light Blue", "Blue"],
    rating: 4.8,
    reviews: 108,
    badge: "SALE",
    featured: false,
    desc: "Available Colors: Charcoal, Light Blue, Blue\nAvailable Sizes: 26, 28, 30, 32, 34, 36\nStylish Solid Regular Fit Jeans For Women.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429143782_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429143843_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429143904_1.jpg?width=1440"
    ],
    variantImages: {
      "Charcoal": [
        "https://www.ownd.in/cdn/shop/files/8909429143782_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429143782_2.jpg?width=1440"
      ],
      "Light Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429143843_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429143843_2.jpg?width=1440"
      ],
      "Blue": [
        "https://www.ownd.in/cdn/shop/files/8909429143904_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429143904_2.jpg?width=1440"
      ]
    }
  },
  {
    id: 330,
    handle: "grey-solid-regular-fit-pack-of-2-trunks-for-men-1240194",
    cat: "men",
    name: "Grey Solid Regular Fit Pack of 2 Trunks For Men",
    price: 399,
    orig: 0,
    sizes: ["XS", "S", "M", "L", "XL", "XXL"],
    colors: ["Grey"],
    rating: 4.6,
    reviews: 51,
    badge: "NEW",
    featured: false,
    desc: "Color: Grey\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Grey Solid Regular Fit Pack of 2 Trunks For Men.",
    images: [
      "https://www.ownd.in/cdn/shop/files/8909429504460_1.jpg?width=1440",
      "https://www.ownd.in/cdn/shop/files/8909429504460_2.jpg?width=1440"
    ],
    variantImages: {
      "Grey": [
        "https://www.ownd.in/cdn/shop/files/8909429504460_1.jpg?width=1440",
        "https://www.ownd.in/cdn/shop/files/8909429504460_2.jpg?width=1440"
      ]
    }
  },

  // Existing Staples
  { id: 1, cat: 'men', name: 'Classic Oxford Shirt', price: 899, orig: 1499, sizes: ['S', 'M', 'L', 'XL', 'XXL'], rating: 4.5, reviews: 89, desc: 'Premium cotton Oxford shirt with a relaxed fit. Perfect for office and casual wear.', badge: 'SALE', images: ['https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop'] },
  { id: 2, cat: 'men', name: 'Slim Fit Chinos', price: 1199, orig: 1899, sizes: ['28', '30', '32', '34', '36'], rating: 4.3, reviews: 64, desc: 'Stretch chinos with a modern slim fit. Wrinkle-resistant fabric, all-day comfort.', badge: 'SALE', images: ['https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop'] },
  { id: 21, cat: 'electronics', name: 'Wireless Earbuds Pro', price: 1299, orig: 2499, sizes: ['ONE SIZE'], rating: 4.6, reviews: 567, desc: 'True wireless earbuds with 30-hour battery, active noise cancellation, IPX5 water resistance.', badge: 'SALE', images: ['https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop'] },
  { id: 22, cat: 'electronics', name: 'Smart Watch Series 5', price: 2499, orig: 4999, sizes: ['ONE SIZE'], rating: 4.5, reviews: 389, desc: 'Fitness smartwatch with heart rate monitor, SpO2, GPS, 7-day battery life.', badge: 'SALE', images: ['https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop'] },
  { id: 27, cat: 'electronics', name: 'Mechanical Keyboard', price: 2999, orig: 4499, sizes: ['ONE SIZE'], rating: 4.8, reviews: 234, desc: 'Compact 75% mechanical keyboard with RGB backlight, tactile switches.', badge: 'SALE', images: ['https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop'] }
];

export const BLOG_POSTS: BlogPost[] = [
  { id: 1, cat: 'STYLE GUIDE', title: '10 Essential Wardrobe Staples for Summer 2026', excerpt: 'Build a versatile, timeless wardrobe with these must-have pieces that transition effortlessly.', date: 'JUNE 15, 2026', emoji: '☀️' },
  { id: 2, cat: 'DENIM', title: 'The Ultimate Denim Fit Guide: Wide Leg vs Skinny', excerpt: 'Everything you need to know about finding the perfect pair of jeans for your body type.', date: 'JUNE 10, 2026', emoji: '👖' },
  { id: 3, cat: 'TECH', title: 'Top Wearable Tech Trends You Need to Know', excerpt: 'How smartwatches and wireless audio are reshaping daily convenience and fitness tracking.', date: 'MAY 28, 2026', emoji: '⌚' }
];
