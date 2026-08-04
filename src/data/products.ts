export interface Product {
  id: number;
  cat: 'men' | 'women' | 'electronics';
  name: string;
  price: number;
  orig: number; // 0 if none
  sizes: string[];
  rating: number;
  reviews: number;
  desc: string;
  badge: 'SALE' | 'NEW' | '';
  images?: string[];
  handle?: string;
  variants?: {
    size: string;
    color: string;
    sku: string;
    price: number;
    orig: number;
    stock: number;
  }[];
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
  // Original Products with Premium High-Class Images
  {"id":1,"cat":"men","name":"Classic Oxford Shirt","price":899,"orig":1499,"sizes":["S","M","L","XL","XXL"],"rating":4.5,"reviews":89,"desc":"Premium cotton Oxford shirt with a relaxed fit. Perfect for office and casual wear.","badge":"SALE","images":["https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?q=80&w=800&auto=format&fit=crop"]},
  {"id":2,"cat":"men","name":"Slim Fit Chinos","price":1199,"orig":1899,"sizes":["28","30","32","34","36"],"rating":4.3,"reviews":64,"desc":"Stretch chinos with a modern slim fit. Wrinkle-resistant fabric, all-day comfort.","badge":"SALE","images":["https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?q=80&w=800&auto=format&fit=crop"]},
  {"id":5,"cat":"men","name":"Denim Jacket","price":2299,"orig":3499,"sizes":["S","M","L","XL"],"rating":4.8,"reviews":78,"desc":"Classic denim jacket with contrast stitching. Versatile layering piece.","badge":"SALE","images":["https://images.unsplash.com/photo-1611312449412-6cefac5dc3e4?q=80&w=800&auto=format&fit=crop"]},
  {"id":21,"cat":"electronics","name":"Wireless Earbuds Pro","price":1299,"orig":2499,"sizes":["ONE SIZE"],"rating":4.6,"reviews":567,"desc":"True wireless earbuds with 30-hour battery, active noise cancellation, IPX5 water resistance.","badge":"SALE","images":["https://images.unsplash.com/photo-1590658268037-6bf12165a8df?q=80&w=800&auto=format&fit=crop"]},
  {"id":22,"cat":"electronics","name":"Smart Watch Series 5","price":2499,"orig":4999,"sizes":["ONE SIZE"],"rating":4.5,"reviews":389,"desc":"Fitness smartwatch with heart rate monitor, SpO2, GPS, 7-day battery life.","badge":"SALE","images":["https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?q=80&w=800&auto=format&fit=crop"]},
  {"id":27,"cat":"electronics","name":"Mechanical Keyboard","price":2999,"orig":4499,"sizes":["ONE SIZE"],"rating":4.8,"reviews":234,"desc":"Compact 75% mechanical keyboard with RGB backlight, tactile switches.","badge":"SALE","images":["https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?q=80&w=800&auto=format&fit=crop"]},

  // Shopify CSV Imported Dresses
  {
    "id": 101,
    "handle": "ruffle-a-line-dress-2240872",
    "cat": "women",
    "name": "Ruffle A-Line Dress",
    "price": 1431,
    "orig": 1590,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "reviews": 96,
    "desc": "Color: Brown\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Ruffle A-Line Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "SALE",
    "images": [
      "https://img201.savana.com/goods-pic/8396db9eaf4b467090348e5935e32994_w1440_q90",
      "https://img201.savana.com/goods-pic/8b49a61d02d843d8b992646d33151025_w1440_q90",
      "https://img201.savana.com/goods-pic/76e0e1dd18494fe093e17a603b35ec4b_w1440_q90",
      "https://img201.savana.com/goods-pic/61725cb72e554ab1890f6246db0ec8ee_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Brown",
        "sku": "RUFFLEALIN-BROWN-XS",
        "price": 1431,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Brown",
        "sku": "RUFFLEALIN-BROWN-S",
        "price": 1431,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Brown",
        "sku": "RUFFLEALIN-BROWN-M",
        "price": 1431,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Brown",
        "sku": "RUFFLEALIN-BROWN-L",
        "price": 1431,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Brown",
        "sku": "RUFFLEALIN-BROWN-XL",
        "price": 1431,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Brown",
        "sku": "RUFFLEALIN-BROWN-XXL",
        "price": 1431,
        "orig": 1590,
        "stock": 100
      }
    ]
  },
  {
    "id": 102,
    "handle": "lace-up-a-line-dress-2204632",
    "cat": "women",
    "name": "Lace Up A-Line Dress",
    "price": 1117,
    "orig": 1490,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.8,
    "reviews": 163,
    "desc": "Color: Burgundy\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Lace Up A-Line Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "SALE",
    "images": [
      "https://img201.savana.com/goods-pic/5d4eff2dd36c47d59f5a48340227cfb6_w1440_q90",
      "https://img201.savana.com/goods-pic/61fa759cbdee43efbb5527b85f8c89e6_w1440_q90",
      "https://img201.savana.com/goods-pic/451192ff05c24fac8cd26f84a42fdaa7_w1440_q90",
      "https://img201.savana.com/goods-pic/b02a671b6cd045f6ab270bef174cb94a_w1440_q90",
      "https://img201.savana.com/goods-pic/5c373ebec2074614aae0d93ce87dee09_w1440_q90",
      "https://img201.savana.com/goods-pic/d41e296d677a481da13377d043ca9876_w1440_q90",
      "https://img201.savana.com/goods-pic/ab6a0302e3164268a7181c655b74e39e_w1440_q90",
      "https://img201.savana.com/goods-pic/686b45a2b7ce4fa8be8fa76abaa71ce2_w1440_q90",
      "https://img201.savana.com/goods-pic/0eb2c0f1a4fb48dc9e4feb11f27edaec_w1440_q90",
      "https://img201.savana.com/goods-pic/5f148bd846d14002b6b7aafbbbe0b315_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Burgundy",
        "sku": "LACEUPALIN-BURGU-XS",
        "price": 1117,
        "orig": 1490,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Burgundy",
        "sku": "LACEUPALIN-BURGU-S",
        "price": 1117,
        "orig": 1490,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Burgundy",
        "sku": "LACEUPALIN-BURGU-M",
        "price": 1117,
        "orig": 1490,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Burgundy",
        "sku": "LACEUPALIN-BURGU-L",
        "price": 1117,
        "orig": 1490,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Burgundy",
        "sku": "LACEUPALIN-BURGU-XL",
        "price": 1117,
        "orig": 1490,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Burgundy",
        "sku": "LACEUPALIN-BURGU-XXL",
        "price": 1117,
        "orig": 1490,
        "stock": 100
      }
    ]
  },
  {
    "id": 103,
    "handle": "tie-up-a-line-dress-2233122",
    "cat": "women",
    "name": "Tie Up A-Line Dress",
    "price": 1690,
    "orig": 0,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "reviews": 66,
    "desc": "Color: Red\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Tie Up A-Line Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "NEW",
    "images": [
      "https://img201.savana.com/goods-pic/f4e3d11d1b7549e6907dc07f07381d2f_w1440_q90",
      "https://img201.savana.com/goods-pic/cc0bc55109224579aa116a71c447f188_w1440_q90",
      "https://img201.savana.com/goods-pic/f6fc5e3740ee49a4840c99d671606a55_w1440_q90",
      "https://img201.savana.com/goods-pic/828f35320bc14cfea690ae940c07732d_w1440_q90",
      "https://img201.savana.com/goods-pic/84685b5a4d804c74b0c7ac2b4f5dd91d_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Red",
        "sku": "TIEUPALINE-RED-XS",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Red",
        "sku": "TIEUPALINE-RED-S",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Red",
        "sku": "TIEUPALINE-RED-M",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Red",
        "sku": "TIEUPALINE-RED-L",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Red",
        "sku": "TIEUPALINE-RED-XL",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Red",
        "sku": "TIEUPALINE-RED-XXL",
        "price": 1690,
        "orig": 0,
        "stock": 100
      }
    ]
  },
  {
    "id": 104,
    "handle": "backless-bodycon-dress-2181862",
    "cat": "women",
    "name": "Backless Bodycon Dress",
    "price": 1490,
    "orig": 0,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.4,
    "reviews": 209,
    "desc": "Color: Navy\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Backless Bodycon Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "NEW",
    "images": [
      "https://img201.savana.com/goods-pic/d6906a40c3924744a0981f28440af504_w1440_q90",
      "https://img201.savana.com/goods-pic/486197a9dfa745ad84b6a6b0bcb3fe10_w1440_q90",
      "https://img201.savana.com/goods-pic/cdc1726223c747009f0c38dcbe31cf07_w1440_q90",
      "https://img201.savana.com/goods-pic/799e54ce8d0247c68cc18dfa860c2860_w1440_q90",
      "https://img201.savana.com/goods-pic/701abfbb25ae46409cee97b59ba7334a_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Navy",
        "sku": "BACKLESSBO-NAVY-XS",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Navy",
        "sku": "BACKLESSBO-NAVY-S",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Navy",
        "sku": "BACKLESSBO-NAVY-M",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Navy",
        "sku": "BACKLESSBO-NAVY-L",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Navy",
        "sku": "BACKLESSBO-NAVY-XL",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Navy",
        "sku": "BACKLESSBO-NAVY-XXL",
        "price": 1490,
        "orig": 0,
        "stock": 100
      }
    ]
  },
  {
    "id": 105,
    "handle": "shimmer-cocktail-dress-1497222",
    "cat": "women",
    "name": "Shimmer Cocktail Dress",
    "price": 1590,
    "orig": 0,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4,
    "reviews": 55,
    "desc": "Color: Champagne\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Shimmer Cocktail Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "NEW",
    "images": [
      "https://img201.savana.com/goods-pic/6859f92fbf3143c0abb5a8f6f0966271_w1440_q90",
      "https://img201.savana.com/goods-pic/68ed341ede9844d5b2584d04ac642a7c_w1440_q90",
      "https://img201.savana.com/goods-pic/93fe2807564c46338ce8d730f57721e2_w1440_q90",
      "https://img201.savana.com/goods-pic/baf3bae2119249bc80d2a0631e351026_w1440_q90",
      "https://img201.savana.com/goods-pic/db0eefcacd5447299988ffe6ecc6e779_w1440_q90",
      "https://img201.savana.com/goods-pic/8f3b9e1634c94949af2cdd6a21f5a52b_w1440_q90",
      "https://img201.savana.com/goods-pic/43ba4f3c6ed84edfaabab1cdbd5885f6_w1440_q90",
      "https://img201.savana.com/goods-pic/54225346ddd94f608d7680034273708e_w1440_q90",
      "https://img201.savana.com/goods-pic/fabd943ea84c462a829b890115375ade_w1440_q90",
      "https://img201.savana.com/goods-pic/81b8e5b5128b4e8c90580127bc0a33de_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Champagne",
        "sku": "SHIMMERCOC-CHAMP-XS",
        "price": 1590,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Champagne",
        "sku": "SHIMMERCOC-CHAMP-S",
        "price": 1590,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Champagne",
        "sku": "SHIMMERCOC-CHAMP-M",
        "price": 1590,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Champagne",
        "sku": "SHIMMERCOC-CHAMP-L",
        "price": 1590,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Champagne",
        "sku": "SHIMMERCOC-CHAMP-XL",
        "price": 1590,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Champagne",
        "sku": "SHIMMERCOC-CHAMP-XXL",
        "price": 1590,
        "orig": 0,
        "stock": 100
      }
    ]
  },
  {
    "id": 106,
    "handle": "button-shirt-dress-2283552",
    "cat": "women",
    "name": "Button Shirt Dress",
    "price": 1690,
    "orig": 0,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "reviews": 206,
    "desc": "Color: Apricot\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Button Shirt Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "NEW",
    "images": [
      "https://img201.savana.com/goods-pic/ab2c8b0a18fe4825a0a9c196f23512f7_w1440_q90",
      "https://img201.savana.com/goods-pic/11f24e268d364f8dab74c160248c65ba_w1440_q90",
      "https://img201.savana.com/goods-pic/50d6e55b19d44022bc6128c6ef1f7be1_w1440_q90",
      "https://img201.savana.com/goods-pic/c3e65a5e3d3f4e07bd027615c99d71ea_w1440_q90",
      "https://img201.savana.com/goods-pic/34be863837774bb19b68db4346116f5d_w1440_q90",
      "https://img201.savana.com/goods-pic/8d9be4a4100541408b66f22558b8f31f_w1440_q90",
      "https://img201.savana.com/goods-pic/b0119abcc8664da58997437f76b2587f_w1440_q90",
      "https://img201.savana.com/goods-pic/a01a5f8be4174c7e88e724da853162cf_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Apricot",
        "sku": "BUTTONSHIR-APRIC-XS",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Apricot",
        "sku": "BUTTONSHIR-APRIC-S",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Apricot",
        "sku": "BUTTONSHIR-APRIC-M",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Apricot",
        "sku": "BUTTONSHIR-APRIC-L",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Apricot",
        "sku": "BUTTONSHIR-APRIC-XL",
        "price": 1690,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Apricot",
        "sku": "BUTTONSHIR-APRIC-XXL",
        "price": 1690,
        "orig": 0,
        "stock": 100
      }
    ]
  },
  {
    "id": 107,
    "handle": "bow-a-line-dress-2279382",
    "cat": "women",
    "name": "Bow A-Line Dress",
    "price": 1592,
    "orig": 1990,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.9,
    "reviews": 144,
    "desc": "Color: Beige\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Bow A-Line Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "SALE",
    "images": [
      "https://img201.savana.com/goods-pic/3c38d36ac5304cb88e8a60bc87716b1a_w1440_q90",
      "https://img201.savana.com/goods-pic/2ab53427744c497eabf85232e0affd3a_w1440_q90",
      "https://img201.savana.com/goods-pic/05fb5559ba5e420d8367b8156489c392_w1440_q90",
      "https://img201.savana.com/goods-pic/1106093a96434baea05f1d87ec99db03_w1440_q90",
      "https://img201.savana.com/goods-pic/ffabf78a2f0a4509938124a1d25ec544_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Beige",
        "sku": "BOWALINEDR-BEIGE-XS",
        "price": 1592,
        "orig": 1990,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Beige",
        "sku": "BOWALINEDR-BEIGE-S",
        "price": 1592,
        "orig": 1990,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Beige",
        "sku": "BOWALINEDR-BEIGE-M",
        "price": 1592,
        "orig": 1990,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Beige",
        "sku": "BOWALINEDR-BEIGE-L",
        "price": 1592,
        "orig": 1990,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Beige",
        "sku": "BOWALINEDR-BEIGE-XL",
        "price": 1592,
        "orig": 1990,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Beige",
        "sku": "BOWALINEDR-BEIGE-XXL",
        "price": 1592,
        "orig": 1990,
        "stock": 100
      }
    ]
  },
  {
    "id": 108,
    "handle": "gathered-cocktail-dress-2247852",
    "cat": "women",
    "name": "Gathered Cocktail Dress",
    "price": 1521,
    "orig": 1690,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4,
    "reviews": 215,
    "desc": "Color: Light Yellow\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Gathered Cocktail Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "SALE",
    "images": [
      "https://img201.savana.com/goods-pic/3b244c07ee3f48d995f3bfe7c0650828_w1440_q90",
      "https://img201.savana.com/goods-pic/bf3206f5c08f48a09e304f33511aa925_w1440_q90",
      "https://img201.savana.com/goods-pic/1f86c0f7b9874c13b765635fe1250e43_w1440_q90",
      "https://img201.savana.com/goods-pic/98f27e1615534a01a2ac6ec26587e3fb_w1440_q90",
      "https://img201.savana.com/goods-pic/a87dce4009a7441fab9767b1f813e90c_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Light Yellow",
        "sku": "GATHEREDCO-LIGHT-XS",
        "price": 1521,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Light Yellow",
        "sku": "GATHEREDCO-LIGHT-S",
        "price": 1521,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Light Yellow",
        "sku": "GATHEREDCO-LIGHT-M",
        "price": 1521,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Light Yellow",
        "sku": "GATHEREDCO-LIGHT-L",
        "price": 1521,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Light Yellow",
        "sku": "GATHEREDCO-LIGHT-XL",
        "price": 1521,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Light Yellow",
        "sku": "GATHEREDCO-LIGHT-XXL",
        "price": 1521,
        "orig": 1690,
        "stock": 100
      }
    ]
  },
  {
    "id": 109,
    "handle": "sheer-bodycon-dress-2085742",
    "cat": "women",
    "name": "Sheer Bodycon Dress",
    "price": 1112,
    "orig": 1390,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.5,
    "reviews": 100,
    "desc": "Color: Black\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Sheer Bodycon Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "SALE",
    "images": [
      "https://img201.savana.com/goods-pic/ec194a8796f641c5bb028ba248a48c70_w1440_q90",
      "https://img201.savana.com/goods-pic/08d14cf54fed463788b24e0864898fe8_w1440_q90",
      "https://img201.savana.com/goods-pic/417802a8dcd44a528fa3d14a659728d1_w1440_q90",
      "https://img201.savana.com/goods-pic/9cfa58278597401488e5c3296e301b0d_w1440_q90",
      "https://img201.savana.com/goods-pic/a8de6c67fb6449ab8da55e78bc30f162_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Black",
        "sku": "SHEERBODYC-BLACK-XS",
        "price": 1112,
        "orig": 1390,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Black",
        "sku": "SHEERBODYC-BLACK-S",
        "price": 1112,
        "orig": 1390,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Black",
        "sku": "SHEERBODYC-BLACK-M",
        "price": 1112,
        "orig": 1390,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Black",
        "sku": "SHEERBODYC-BLACK-L",
        "price": 1112,
        "orig": 1390,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Black",
        "sku": "SHEERBODYC-BLACK-XL",
        "price": 1112,
        "orig": 1390,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Black",
        "sku": "SHEERBODYC-BLACK-XXL",
        "price": 1112,
        "orig": 1390,
        "stock": 100
      }
    ]
  },
  {
    "id": 110,
    "handle": "backless-a-line-dress-2204932",
    "cat": "women",
    "name": "Backless A-Line Dress",
    "price": 1272,
    "orig": 1590,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.2,
    "reviews": 47,
    "desc": "Color: Light Yellow\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Backless A-Line Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "SALE",
    "images": [
      "https://img201.savana.com/goods-pic/022c74bf732a4dbbb6fd0e09b0af69ed_w1440_q90",
      "https://img201.savana.com/goods-pic/fe591e36c284407b9ea37b5c02ea7d84_w1440_q90",
      "https://img201.savana.com/goods-pic/96ef7fd9650b4bdca329c8d1fb297928_w1440_q90",
      "https://img201.savana.com/goods-pic/d4eec4d6957048ceacb5a10c8306b0a5_w1440_q90",
      "https://img201.savana.com/goods-pic/cbb0ea7c0cfa4ad596bd8dd5ee38b202_w1440_q90",
      "https://img201.savana.com/goods-pic/823abb8038e14ec4931e9ba61c12fbca_w1440_q90",
      "https://img201.savana.com/goods-pic/57d89314b80f488bbf2e595071c56614_w1440_q90",
      "https://img201.savana.com/goods-pic/b72b341d04e845fe9429005167653e06_w1440_q90",
      "https://img201.savana.com/goods-pic/b22fdeeccbf046ba91f312c4da9293a1_w1440_q90",
      "https://img201.savana.com/goods-pic/a1736410b4ca4760aab2a154957540ae_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Light Yellow",
        "sku": "BACKLESSAL-LIGHT-XS",
        "price": 1272,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Light Yellow",
        "sku": "BACKLESSAL-LIGHT-S",
        "price": 1272,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Light Yellow",
        "sku": "BACKLESSAL-LIGHT-M",
        "price": 1272,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Light Yellow",
        "sku": "BACKLESSAL-LIGHT-L",
        "price": 1272,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Light Yellow",
        "sku": "BACKLESSAL-LIGHT-XL",
        "price": 1272,
        "orig": 1590,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Light Yellow",
        "sku": "BACKLESSAL-LIGHT-XXL",
        "price": 1272,
        "orig": 1590,
        "stock": 100
      }
    ]
  },
  {
    "id": 111,
    "handle": "sheer-cocktail-dress-2256092",
    "cat": "women",
    "name": "Sheer Cocktail Dress",
    "price": 1436,
    "orig": 1690,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.1,
    "reviews": 116,
    "desc": "Color: Burgundy\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Sheer Cocktail Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "SALE",
    "images": [
      "https://img201.savana.com/goods-pic/ee6758a4f7b94205b18de5982a05c026_w1440_q90",
      "https://img201.savana.com/goods-pic/3ac66ff513ca4d91aa369196b4c7dae4_w1440_q90",
      "https://img201.savana.com/goods-pic/75d909eaa5464eaab735eaa6a4a08d96_w1440_q90",
      "https://img201.savana.com/goods-pic/328a8c254ee945e9835b9f54496bbabb_w1440_q90",
      "https://img201.savana.com/goods-pic/318e5de2c4e947c29e95c76740c73b39_w1440_q90",
      "https://img201.savana.com/goods-pic/c38f954d7db64cee8e33839a82629dc1_w1440_q90",
      "https://img201.savana.com/goods-pic/55e4169fa5614aaeb4c39c4a50597da9_w1440_q90",
      "https://img201.savana.com/goods-pic/3a49dc121c09433c8cc2d2bdd4f6a477_w1440_q90",
      "https://img201.savana.com/goods-pic/e436a6c06453421d93afa4f7931b6e86_w1440_q90",
      "https://img201.savana.com/goods-pic/c442be45c1944aa1881e374ec3d345da_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Burgundy",
        "sku": "SHEERCOCKT-BURGU-XS",
        "price": 1436,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Burgundy",
        "sku": "SHEERCOCKT-BURGU-S",
        "price": 1436,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Burgundy",
        "sku": "SHEERCOCKT-BURGU-M",
        "price": 1436,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Burgundy",
        "sku": "SHEERCOCKT-BURGU-L",
        "price": 1436,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Burgundy",
        "sku": "SHEERCOCKT-BURGU-XL",
        "price": 1436,
        "orig": 1690,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Burgundy",
        "sku": "SHEERCOCKT-BURGU-XXL",
        "price": 1436,
        "orig": 1690,
        "stock": 100
      }
    ]
  },
  {
    "id": 112,
    "handle": "sheer-a-line-dress-2319832",
    "cat": "women",
    "name": "Sheer A-Line Dress",
    "price": 1490,
    "orig": 0,
    "sizes": [
      "XS",
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "rating": 4.9,
    "reviews": 154,
    "desc": "Color: Pink\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Sheer A-Line Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "NEW",
    "images": [
      "https://img201.savana.com/goods-pic/56a7f7d501ca446983b110869a109155_w1440_q90",
      "https://img201.savana.com/goods-pic/c4a51dbf05c6482389ae644fa7ea699b_w1440_q90",
      "https://img201.savana.com/goods-pic/50d4d35bca10499c8db22f10ed37f76b_w1440_q90",
      "https://img201.savana.com/goods-pic/0b68ed2b9adb40c0b01b9dd2a82ceb19_w1440_q90",
      "https://img201.savana.com/goods-pic/677cd68df7f0421a9f1a48b33e9e0772_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Pink",
        "sku": "SHEERALINE-PINK-XS",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "S",
        "color": "Pink",
        "sku": "SHEERALINE-PINK-S",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "M",
        "color": "Pink",
        "sku": "SHEERALINE-PINK-M",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "L",
        "color": "Pink",
        "sku": "SHEERALINE-PINK-L",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XL",
        "color": "Pink",
        "sku": "SHEERALINE-PINK-XL",
        "price": 1490,
        "orig": 0,
        "stock": 100
      },
      {
        "size": "XXL",
        "color": "Pink",
        "sku": "SHEERALINE-PINK-XXL",
        "price": 1490,
        "orig": 0,
        "stock": 100
      }
    ]
  },
  {
    "id": 113,
    "handle": "ruffle-bodycon-dress-1955962",
    "cat": "women",
    "name": "Ruffle Bodycon Dress",
    "price": 1341,
    "orig": 1490,
    "sizes": [
      "XS"
    ],
    "rating": 4.1,
    "reviews": 196,
    "desc": "Color: Beige\nAvailable Sizes: XS, S, M, L, XL, XXL\nStylish Ruffle Bodycon Dress. A must-have for every wardrobe — perfect for parties, evenings out, and special occasions.\n✓ 7 days easy return & exchange\n✓ Free shipping available\n✓ Delivery in 3-10 days\n✓ Cash on delivery available",
    "badge": "SALE",
    "images": [
      "https://img201.savana.com/goods-pic/a67db3244ae4432783d0df84b5016ced_w1440_q90"
    ],
    "variants": [
      {
        "size": "XS",
        "color": "Beige",
        "sku": "RUFFLEBODY-BEIGE-XS",
        "price": 1341,
        "orig": 1490,
        "stock": 100
      }
    ]
  },
];

export const BLOG_POSTS: BlogPost[] = [
  {id:1,cat:'STYLE GUIDE',title:'10 Must-Have Pieces for Your Summer Wardrobe',excerpt:'From breezy kurtas to chic co-ords — here are the 10 essentials you need this summer.',date:'July 28, 2026',emoji:'👗'},
  {id:2,cat:'MENSWEAR',title:'How to Style a White Shirt 5 Different Ways',excerpt:'The white shirt is the ultimate wardrobe staple. Here\'s how to wear it for every occasion.',date:'July 22, 2026',emoji:'👔'},
  {id:3,cat:'TECH',title:'Best Budget Earbuds Under ₹1500 in India 2026',excerpt:'True wireless sound on a budget — our top picks for the best earbuds this year.',date:'July 15, 2026',emoji:'🎧'},
  {id:4,cat:'FASHION TIPS',title:'The Ultimate Guide to Indian Ethnic Wear',excerpt:'From kurtis to sarees — a complete guide to dressing in Indian ethnic fashion.',date:'July 8, 2026',emoji:'🪷'},
  {id:5,cat:'LIFESTYLE',title:'Building Your Capsule Wardrobe for Indian Weather',excerpt:'Smart, minimal, versatile — build a wardrobe that works year-round in India.',date:'June 30, 2026',emoji:'👚'},
  {id:6,cat:'TECH',title:'Smart Gadgets That Will Change Your Daily Routine',excerpt:'From smartwatches to desk lamps — the best gadgets to upgrade your lifestyle.',date:'June 20, 2026',emoji:'💡'},
];