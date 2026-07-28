
export interface Review {
  id: string;
  author: string;
  rating: number;
  date: string;
  comment: string;
  verified?: boolean;
  images?: string[];
}

export interface Product {
  id: string;
  title: string;
  price: number;
  oldPrice: number;
  category: string;
  image: string;
  shortDescription: string;
  description?: string;
  isNew?: boolean;
  images?: string[];
  sizes?: string[];
  colors?: string[];
  rating?: number;
  reviewCount?: number;
  reviews?: Review[];
  meeshoUrl?: string;
}

const baseProducts: Product[] = [
  {
    "id": "p_add_1",
    "title": "Large Transparent Anti-Slip Dashboard Mat for Car",
    "price": 428,
    "oldPrice": 595,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/01_7b8202b7-c57c-4d0b-a8a5-b051baad5a2d.jpg?v=1750337035",
    "shortDescription": "Large Transparent Anti-Slip Dashboard Mat for Car - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 223,
    "reviews": [
      {
        "id": "base_rev_p_add_1_1",
        "author": "Karthik Nair",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_1_2",
        "author": "Manish Pandey",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_2",
    "title": "Plastic Hanging Hook - Multi-Hole Wardrobe Organizer",
    "price": 482,
    "oldPrice": 681,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/02_abd88a4c-7ff9-4db6-a068-87fa76eb13ec.jpg?v=1737628121",
    "shortDescription": "Plastic Hanging Hook - Multi-Hole Wardrobe Organizer - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 246,
    "reviews": [
      {
        "id": "base_rev_p_add_2_1",
        "author": "Bhavna Patel",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_2_2",
        "author": "Deepika K.",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_3",
    "title": "Stainless Steel Insulated Coffee Tea Mug Cup",
    "price": 502,
    "oldPrice": 765,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/01_cf2666d4-1306-4a91-a9c0-150e19397c46.jpg?v=1737625838",
    "shortDescription": "Stainless Steel Insulated Coffee Tea Mug Cup - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 269,
    "reviews": [
      {
        "id": "base_rev_p_add_3_1",
        "author": "Nikhil Mehra",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_p_add_3_2",
        "author": "Abhishek Sharma",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_5",
    "title": "Travel Portable Bag Shoes Storage Bag",
    "price": 522,
    "oldPrice": 759,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/ShoeBag-WOSKU-01_694b4bcf-a2d4-4a29-b1b6-d8d2e3633eca.jpg?v=1765774448",
    "shortDescription": "Travel Portable Bag Shoes Storage Bag - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 315,
    "reviews": [
      {
        "id": "base_rev_p_add_5_1",
        "author": "Manish Pandey",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_5_2",
        "author": "Vikramaditya S.",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_6",
    "title": "Mini Sun glasses Eyeglass Microfiber Spectacles Cleaner",
    "price": 405,
    "oldPrice": 571,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/products/4_1806ab31-fa33-43de-a607-95e1b6c62a5e.jpg?v=1737630531",
    "shortDescription": "Mini Sun glasses Eyeglass Microfiber Spectacles Cleaner - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 338,
    "reviews": [
      {
        "id": "base_rev_p_add_6_1",
        "author": "Deepika K.",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_6_2",
        "author": "Priyanka Roy",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_7",
    "title": "Bottle Sprayer for Plants Garden Pesticide Car Wash",
    "price": 574,
    "oldPrice": 790,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/products/229.jpg?v=1751108743",
    "shortDescription": "Bottle Sprayer for Plants Garden Pesticide Car Wash - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 361,
    "reviews": [
      {
        "id": "base_rev_p_add_7_1",
        "author": "Abhishek Sharma",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_p_add_7_2",
        "author": "Ramesh Chhabra",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_8",
    "title": "Kitchen Faucet 3-Function Pull Down Sink Sprayer",
    "price": 487,
    "oldPrice": 519,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/02_f46ca527-5b1c-4574-a375-c01b4d4e0ad6.jpg?v=1737614364",
    "shortDescription": "Kitchen Faucet 3-Function Pull Down Sink Sprayer - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 384,
    "reviews": [
      {
        "id": "base_rev_p_add_8_1",
        "author": "Simran Gill",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_8_2",
        "author": "Anjali Deshmukh",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_9",
    "title": "Over The Door Hanger Rack 7 Hooks",
    "price": 339,
    "oldPrice": 532,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/02_d2e3c05b-b704-4737-ad6b-27674f5b3b32.jpg?v=1769172058",
    "shortDescription": "Over The Door Hanger Rack 7 Hooks - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 407,
    "reviews": [
      {
        "id": "base_rev_p_add_9_1",
        "author": "Vikramaditya S.",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_9_2",
        "author": "Gaurav Joshi",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_10",
    "title": "Magic Sticker Series Self Adhesive Mop and Broom Holder",
    "price": 499,
    "oldPrice": 785,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/08_a5911d30-fd72-4438-9f43-363bf33e9f15.jpg?v=1752044496",
    "shortDescription": "Magic Sticker Series Self Adhesive Mop and Broom Holder - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 430,
    "reviews": [
      {
        "id": "base_rev_p_add_10_1",
        "author": "Priyanka Roy",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_10_2",
        "author": "Tanya Sen",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_25",
    "title": "Squeeze Twist Mop Self Wringing Mop",
    "price": 333,
    "oldPrice": 519,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/08_d3321242-2acc-46b1-87a4-84dccba491c7.jpg?v=1746081977",
    "shortDescription": "Squeeze Twist Mop Self Wringing Mop - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 375,
    "reviews": [
      {
        "id": "base_rev_p_add_25_1",
        "author": "Ramesh Chhabra",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_25_2",
        "author": "Karthik Nair",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_26",
    "title": "Water Bottle 400 ML Leak Proof Glass Bottle",
    "price": 568,
    "oldPrice": 825,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/6955_glass_water_bottle_400ml.jpg?v=1745397106",
    "shortDescription": "Water Bottle 400 ML Leak Proof Glass Bottle - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 398,
    "reviews": [
      {
        "id": "base_rev_p_add_26_1",
        "author": "Anjali Deshmukh",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_26_2",
        "author": "Bhavna Patel",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_27",
    "title": "Cushion Seat Flex Pillow, Orthopedic Seat Cushion",
    "price": 410,
    "oldPrice": 903,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/41.webp?v=1766731776",
    "shortDescription": "Cushion Seat Flex Pillow, Orthopedic Seat Cushion - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 421,
    "reviews": [
      {
        "id": "base_rev_p_add_27_1",
        "author": "Gaurav Joshi",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_p_add_27_2",
        "author": "Nikhil Mehra",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_28",
    "title": "Waterproof Anti-Skid Body Tape for Lingerie",
    "price": 397,
    "oldPrice": 692,
    "category": "Women's Fashion",
    "image": "https://deodap.in/cdn/shop/files/07_8b3ac137-9216-4d04-ba52-6223f1d5ab61.jpg?v=1737628697",
    "shortDescription": "Waterproof Anti-Skid Body Tape for Lingerie - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 444,
    "reviews": [
      {
        "id": "base_rev_p_add_28_1",
        "author": "Tanya Sen",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_28_2",
        "author": "Swati Saxena",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_29",
    "title": "Women's Full Face UV Protection Cap",
    "price": 568,
    "oldPrice": 768,
    "category": "Women's Fashion",
    "image": "https://deodap.in/cdn/shop/files/04_f8e32fd1-6875-469d-bab1-8d3cd51313c8.jpg?v=1750854463",
    "shortDescription": "Women's Full Face UV Protection Cap - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 467,
    "reviews": [
      {
        "id": "base_rev_p_add_29_1",
        "author": "Karthik Nair",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_29_2",
        "author": "Manish Pandey",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_30",
    "title": "Multipurpose All Weather Arm Sleeves",
    "price": 381,
    "oldPrice": 716,
    "category": "Men's Fashion",
    "image": "https://deodap.in/cdn/shop/products/61xWd2fF1OL.jpg?v=1750847233",
    "shortDescription": "Multipurpose All Weather Arm Sleeves - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 90,
    "reviews": [
      {
        "id": "base_rev_p_add_30_1",
        "author": "Bhavna Patel",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_30_2",
        "author": "Deepika K.",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_31",
    "title": "Portable Clothes Lint Remover",
    "price": 506,
    "oldPrice": 789,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/001_853a64cb-aadc-494c-b0c8-ad1c113e4fd6.jpg?v=1737618401",
    "shortDescription": "Portable Clothes Lint Remover - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 113,
    "reviews": [
      {
        "id": "base_rev_p_add_31_1",
        "author": "Nikhil Mehra",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_p_add_31_2",
        "author": "Abhishek Sharma",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_32",
    "title": "Waterproof Tile Gap Filler for Grout",
    "price": 560,
    "oldPrice": 779,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/07_77d02976-48c4-4a89-b642-5156b1c7c642.jpg?v=1737623244",
    "shortDescription": "Waterproof Tile Gap Filler for Grout - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 136,
    "reviews": [
      {
        "id": "base_rev_p_add_32_1",
        "author": "Swati Saxena",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_32_2",
        "author": "Simran Gill",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_33",
    "title": "Anti slip Oval Mat, Super Absorbent",
    "price": 506,
    "oldPrice": 739,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/90a70351-3587-4e6c-adf3-64f187a3bebc.jpg?v=1771303541",
    "shortDescription": "Anti slip Oval Mat, Super Absorbent - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 159,
    "reviews": [
      {
        "id": "base_rev_p_add_33_1",
        "author": "Manish Pandey",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_33_2",
        "author": "Vikramaditya S.",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_add_34",
    "title": "Car Duster, Long Retractable Soft",
    "price": 497,
    "oldPrice": 519,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/08_6683b460-178f-4d63-a1bd-1e620ff3a545.jpg?v=1737629111",
    "shortDescription": "Car Duster, Long Retractable Soft - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 182,
    "reviews": [
      {
        "id": "base_rev_p_add_34_1",
        "author": "Deepika K.",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_p_add_34_2",
        "author": "Priyanka Roy",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_30",
    "title": "self adhesive 3d foam wall panel brown",
    "price": 409,
    "oldPrice": 747,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/wall-steaker_4_-1_8faf01cc-d86a-4dea-8d4f-56157bc19a60.jpg?v=1776680043",
    "shortDescription": "self adhesive 3d foam wall panel brown - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 472,
    "reviews": [
      {
        "id": "base_rev_p_30_1",
        "author": "Simran Gill",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_p_30_2",
        "author": "Anjali Deshmukh",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_31",
    "title": "self adhesive 3d foam wall panel white",
    "price": 406,
    "oldPrice": 749,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/wall-steaker-1.jpg?v=1776680331",
    "shortDescription": "self adhesive 3d foam wall panel white - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 95,
    "reviews": [
      {
        "id": "base_rev_p_31_1",
        "author": "Vikramaditya S.",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_p_31_2",
        "author": "Gaurav Joshi",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_32",
    "title": "self adhesive 3d foam wall panel pink",
    "price": 357,
    "oldPrice": 389,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/wall-steaker_2_-1.jpg?v=1776680330",
    "shortDescription": "self adhesive 3d foam wall panel pink - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 118,
    "reviews": [
      {
        "id": "base_rev_p_32_1",
        "author": "Priyanka Roy",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_p_32_2",
        "author": "Tanya Sen",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_33",
    "title": "self adhesive 3d foam wall panel blue",
    "price": 466,
    "oldPrice": 679,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/wall-steaker_3_-1.jpg?v=1776678435",
    "shortDescription": "self adhesive 3d foam wall panel blue - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 141,
    "reviews": [
      {
        "id": "base_rev_p_33_1",
        "author": "Ramesh Chhabra",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_p_33_2",
        "author": "Karthik Nair",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_34",
    "title": "Premium Foldable PU Leather Coin Pouch (1 Pc)",
    "price": 486,
    "oldPrice": 714,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/Coin-Purse-01.jpg?v=1762921966",
    "shortDescription": "Premium Foldable PU Leather Coin Pouch (1 Pc) - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 164,
    "reviews": [
      {
        "id": "base_rev_p_34_1",
        "author": "Anjali Deshmukh",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_p_34_2",
        "author": "Bhavna Patel",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_35",
    "title": "4-Minute approx Sand Timer Hourglass – Decorative Glass Timer (1 Pc)",
    "price": 587,
    "oldPrice": 815,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/Glass-Sand-Timer-1.jpg?v=1776331298",
    "shortDescription": "4-Minute approx Sand Timer Hourglass – Decorative Glass Timer (1 Pc) - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 187,
    "reviews": [
      {
        "id": "base_rev_p_35_1",
        "author": "Gaurav Joshi",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_p_35_2",
        "author": "Nikhil Mehra",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_36",
    "title": "DIY Paper Lantern Craft Kit Decorative Hanging Lantern Set",
    "price": 387,
    "oldPrice": 389,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/Paper-Lanterns-1.jpg?v=1776327802",
    "shortDescription": "DIY Paper Lantern Craft Kit Decorative Hanging Lantern Set - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 210,
    "reviews": [
      {
        "id": "base_rev_p_36_1",
        "author": "Tanya Sen",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_p_36_2",
        "author": "Swati Saxena",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_37",
    "title": "SilicoSwipe",
    "price": 550,
    "oldPrice": 776,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/01_4f7a5f3a-4008-42d8-900f-df8034f8d179.jpg?v=1737615083",
    "shortDescription": "SilicoSwipe - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 233,
    "reviews": [
      {
        "id": "base_rev_p_37_1",
        "author": "Karthik Nair",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_p_37_2",
        "author": "Manish Pandey",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_38",
    "title": "Storage Box",
    "price": 488,
    "oldPrice": 767,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/MiniLemonCitrusPresser-WOSKU-01.jpg?v=1762839015",
    "shortDescription": "Storage Box - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 256,
    "reviews": [
      {
        "id": "base_rev_p_38_1",
        "author": "Bhavna Patel",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_p_38_2",
        "author": "Deepika K.",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "p_42",
    "title": "Handcrafted Metal Indian Cargo Tricycle",
    "price": 344,
    "oldPrice": 780,
    "category": "Essentials",
    "image": "https://deodap.in/cdn/shop/files/Z5DyQenRlL.png?v=1776516298",
    "shortDescription": "Handcrafted Metal Indian Cargo Tricycle - Top quality drop-shipped product.",
    "description": "Premium product directly sourced for you. Designed for durability, elegance, and incredible value.",
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 348,
    "reviews": [
      {
        "id": "base_rev_p_42_1",
        "author": "Deepika K.",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_p_42_2",
        "author": "Priyanka Roy",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_1639086",
    "title": "Men's Claws and Jaws Pocket T-shirt",
    "price": 2876,
    "oldPrice": 3739,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/a6/49/7ab9e01e43c48e09a23f886a2d1c.jpeg",
    "images": [
      "https://file.zendrop.com/products/a6/49/7ab9e01e43c48e09a23f886a2d1c.jpeg",
      "https://file.zendrop.com/products/93/85/1c15087140fcbd70cc196b7e85b4.jpeg",
      "https://file.zendrop.com/products/41/b0/46213489417f9c8918a460be2dd9.jpeg",
      "https://file.zendrop.com/products/46/cd/20b9fd20413e9877b51f88bb19dd.jpeg",
      "https://file.zendrop.com/products/d9/c0/99ae717b4986969862ae71df79e5.jpeg"
    ],
    "shortDescription": "Graphic Tees - Premium Quality Product.",
    "description": "Experience premium quality and style with this Graphic Tees piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 371,
    "reviews": [
      {
        "id": "base_rev_zen_1639086_1",
        "author": "Abhishek Sharma",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_1639086_2",
        "author": "Ramesh Chhabra",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_1639144",
    "title": "Men's Tropical Blue and Yellow Hawaiian T-shirt",
    "price": 3006,
    "oldPrice": 3908,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/89/37/ca01a4e040b595a9ce001e02ec14.jpeg",
    "images": [
      "https://file.zendrop.com/products/89/37/ca01a4e040b595a9ce001e02ec14.jpeg",
      "https://file.zendrop.com/products/f5/e5/c7b629034ed3be9ddc67627a5195.jpeg",
      "https://file.zendrop.com/products/21/8d/f5543fed4a19b7217e461189d865.jpeg",
      "https://file.zendrop.com/products/41/c9/84de1fff45919855ca7a114fb522.jpeg",
      "https://file.zendrop.com/products/4c/32/d1e7cb004d25b0bb9dbfd94fbaf9.jpeg"
    ],
    "shortDescription": "Casual Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this Casual Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 394,
    "reviews": [
      {
        "id": "base_rev_zen_1639144_1",
        "author": "Simran Gill",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_1639144_2",
        "author": "Anjali Deshmukh",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_1639229",
    "title": "Save Gas and Jig Tuna T-shirt",
    "price": 4700,
    "oldPrice": 6110,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/17/f8/69a998c3494593926c660c9dd2d3.jpeg",
    "images": [
      "https://file.zendrop.com/products/17/f8/69a998c3494593926c660c9dd2d3.jpeg",
      "https://file.zendrop.com/products/b0/14/fed3f5aa4829be65dc55c572ca56.jpeg",
      "https://file.zendrop.com/products/eb/65/57a642984c0499d9b746f16bb445.jpeg",
      "https://file.zendrop.com/products/c3/e8/1bcdf159472193be2367c2e8edbf.jpeg",
      "https://file.zendrop.com/products/a3/1d/9cbd7e6b46cf8f64529fa06fa1ba.jpeg"
    ],
    "shortDescription": "Novelty Tops - Premium Quality Product.",
    "description": "Experience premium quality and style with this Novelty Tops piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 417,
    "reviews": [
      {
        "id": "base_rev_zen_1639229_1",
        "author": "Vikramaditya S.",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_1639229_2",
        "author": "Gaurav Joshi",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_1904400",
    "title": "European and American Patriotic Eagle Short Sleeve T-Shirt",
    "price": 525,
    "oldPrice": 782,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/82/6d/7dbc4fa345649d057bb67c4bc947.jpeg",
    "images": [
      "https://file.zendrop.com/products/82/6d/7dbc4fa345649d057bb67c4bc947.jpeg",
      "https://file.zendrop.com/products/a8/a9/c96a896a4076bef647908f5a5dd6.jpeg",
      "https://file.zendrop.com/products/41/3b/0e81579a42e3914a3f9750c386f3.jpeg",
      "https://file.zendrop.com/products/84/91/ac0fd8b144c0b1da75d6d224a1f6.jpeg"
    ],
    "shortDescription": "Political Tees - Premium Quality Product.",
    "description": "Experience premium quality and style with this Political Tees piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 440,
    "reviews": [
      {
        "id": "base_rev_zen_1904400_1",
        "author": "Priyanka Roy",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_1904400_2",
        "author": "Tanya Sen",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_1955863",
    "title": "European And American Loose T-shirt",
    "price": 367,
    "oldPrice": 478,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/37/75/5d3c49cd4c64a42ed6117b3f1172.png",
    "images": [
      "https://file.zendrop.com/products/37/75/5d3c49cd4c64a42ed6117b3f1172.png",
      "https://file.zendrop.com/products/84/80/be9e8b6542b099525d5d169da5e8.png",
      "https://file.zendrop.com/products/6b/b2/06b685f6432bb24f34a3d19c7e99.png",
      "https://file.zendrop.com/products/c1/d5/65e076744add9b9ff51f9b5bfde4.png"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 463,
    "reviews": [
      {
        "id": "base_rev_zen_1955863_1",
        "author": "Ramesh Chhabra",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_1955863_2",
        "author": "Karthik Nair",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2008320",
    "title": "Short Sleeve T-Shirt And Pants Set",
    "price": 471,
    "oldPrice": 782,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/71/4e/efbc0e5d4abdb6840d8a56ec7696.jpeg",
    "images": [
      "https://file.zendrop.com/products/71/4e/efbc0e5d4abdb6840d8a56ec7696.jpeg",
      "https://file.zendrop.com/products/3d/37/126189ec440497f3eb7cb1d95729.jpeg",
      "https://file.zendrop.com/products/11/52/3151ca724e7ea05694bc4858234e.jpeg"
    ],
    "shortDescription": "Co-ord Sets - Premium Quality Product.",
    "description": "Experience premium quality and style with this Co-ord Sets piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "28",
      "30",
      "32",
      "34",
      "36"
    ],
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 86,
    "reviews": [
      {
        "id": "base_rev_zen_2008320_1",
        "author": "Anjali Deshmukh",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2008320_2",
        "author": "Bhavna Patel",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2164616",
    "title": "ZVX Combed Cotton Long Sleeved T-Shirt Mens Embroi...",
    "price": 2051,
    "oldPrice": 2667,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/20/a6/fa3ca1f7495d9337302deecfbe38.jpeg",
    "images": [
      "https://file.zendrop.com/products/20/a6/fa3ca1f7495d9337302deecfbe38.jpeg"
    ],
    "shortDescription": "Long Sleeve T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this Long Sleeve T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 109,
    "reviews": [
      {
        "id": "base_rev_zen_2164616_1",
        "author": "Gaurav Joshi",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2164616_2",
        "author": "Nikhil Mehra",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2179075",
    "title": "Simply Southern Mens Relaxed-Fit Short Sleeve T-Sh...",
    "price": 2535,
    "oldPrice": 3296,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/25/60/0712ceeb4b01a623a759cd885269.jpeg",
    "images": [
      "https://file.zendrop.com/products/25/60/0712ceeb4b01a623a759cd885269.jpeg"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 132,
    "reviews": [
      {
        "id": "base_rev_zen_2179075_1",
        "author": "Tanya Sen",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2179075_2",
        "author": "Swati Saxena",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2187157",
    "title": "LittleSpring Mens Striped T Shirt Long Sleeve Cott...",
    "price": 2442,
    "oldPrice": 3175,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/3f/b1/39a5460749d2b45fbebf83d0d78f.jpeg",
    "images": [
      "https://file.zendrop.com/products/3f/b1/39a5460749d2b45fbebf83d0d78f.jpeg"
    ],
    "shortDescription": "Long Sleeve T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this Long Sleeve T-Shirts piece. Professionally sourced for durability and comfort.",
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 155,
    "reviews": [
      {
        "id": "base_rev_zen_2187157_1",
        "author": "Karthik Nair",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2187157_2",
        "author": "Manish Pandey",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2196623",
    "title": "Vintage Cartoon Dog & Piano T-Shirt",
    "price": 2344,
    "oldPrice": 3048,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/88/42/15410db240538efbc67124cdff2d.jpeg",
    "images": [
      "https://file.zendrop.com/products/88/42/15410db240538efbc67124cdff2d.jpeg"
    ],
    "shortDescription": "Pop Culture Tees - Premium Quality Product.",
    "description": "Experience premium quality and style with this Pop Culture Tees piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 178,
    "reviews": [
      {
        "id": "base_rev_zen_2196623_1",
        "author": "Bhavna Patel",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2196623_2",
        "author": "Deepika K.",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2205745",
    "title": "YourTops Women Fueled By Jesus And Coffee T-Shirt ...",
    "price": 1660,
    "oldPrice": 2158,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/fe/bb/40f41c5941eb8b69a210ce380078.jpeg",
    "images": [
      "https://file.zendrop.com/products/fe/bb/40f41c5941eb8b69a210ce380078.jpeg"
    ],
    "shortDescription": "Graphic Tees - Premium Quality Product.",
    "description": "Experience premium quality and style with this Graphic Tees piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 201,
    "reviews": [
      {
        "id": "base_rev_zen_2205745_1",
        "author": "Nikhil Mehra",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2205745_2",
        "author": "Abhishek Sharma",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2208655",
    "title": "World and Space Varsity Academy Kids T-Shirt Ha...",
    "price": 1942,
    "oldPrice": 2525,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/d5/37/9094cf8e497bbb366610e3d845d3.jpeg",
    "images": [
      "https://file.zendrop.com/products/d5/37/9094cf8e497bbb366610e3d845d3.jpeg"
    ],
    "shortDescription": "Graphic T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this Graphic T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 224,
    "reviews": [
      {
        "id": "base_rev_zen_2208655_1",
        "author": "Swati Saxena",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2208655_2",
        "author": "Simran Gill",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2216760",
    "title": "Womens Relaxed-Fit Save The Turtles Short Sleeve T...",
    "price": 2246,
    "oldPrice": 2920,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/ff/14/eea299484958ba17ff27f460af59.jpeg",
    "images": [
      "https://file.zendrop.com/products/ff/14/eea299484958ba17ff27f460af59.jpeg"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 247,
    "reviews": [
      {
        "id": "base_rev_zen_2216760_1",
        "author": "Manish Pandey",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2216760_2",
        "author": "Vikramaditya S.",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2617631",
    "title": "Korean Fashion T-Shirt for Boys and Men",
    "price": 763,
    "oldPrice": 992,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/37/fe/b8cd78054e6183b93bc37df300fc.webp",
    "images": [
      "https://file.zendrop.com/products/37/fe/b8cd78054e6183b93bc37df300fc.webp",
      "https://file.zendrop.com/products/18/54/5a890a45419b97559e394cc2e424.webp",
      "https://file.zendrop.com/products/11/5b/0d9bc1fa4e5a9a15cb3c3cb5861f.webp",
      "https://file.zendrop.com/products/65/fc/e30d6d9e4eda89589993af49c7e6.webp"
    ],
    "shortDescription": "Trendy Wear - Premium Quality Product.",
    "description": "Experience premium quality and style with this Trendy Wear piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 270,
    "reviews": [
      {
        "id": "base_rev_zen_2617631_1",
        "author": "Deepika K.",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2617631_2",
        "author": "Priyanka Roy",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2618600",
    "title": "Roses and Diamonds Freedom T-Shirt for Men",
    "price": 339,
    "oldPrice": 379,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/ea/38/3de48eee444ea968a48203713cf3.jpeg",
    "images": [
      "https://file.zendrop.com/products/ea/38/3de48eee444ea968a48203713cf3.jpeg",
      "https://file.zendrop.com/products/a4/be/a222d0b64df98b6e07fa47239d50.jpeg",
      "https://file.zendrop.com/products/64/c5/5dada70d40a991a498250e0da870.jpeg",
      "https://file.zendrop.com/products/05/99/322bf4604160b2ac88beee1b32e0.jpeg",
      "https://file.zendrop.com/products/55/35/1643b0af41639563f526c805669f.jpeg"
    ],
    "shortDescription": "Designer Prints - Premium Quality Product.",
    "description": "Experience premium quality and style with this Designer Prints piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 293,
    "reviews": [
      {
        "id": "base_rev_zen_2618600_1",
        "author": "Abhishek Sharma",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2618600_2",
        "author": "Ramesh Chhabra",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2623841",
    "title": "Sports Fitness Fashion T-Shirt and Running Set",
    "price": 665,
    "oldPrice": 865,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/53/92/00d201fc410680a7d2325d7476bb.jpeg",
    "images": [
      "https://file.zendrop.com/products/53/92/00d201fc410680a7d2325d7476bb.jpeg"
    ],
    "shortDescription": "Activewear Sets - Premium Quality Product.",
    "description": "Experience premium quality and style with this Activewear Sets piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 316,
    "reviews": [
      {
        "id": "base_rev_zen_2623841_1",
        "author": "Simran Gill",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2623841_2",
        "author": "Anjali Deshmukh",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2636105",
    "title": "Casual T-Shirt for Baby and Children's Clothing",
    "price": 866,
    "oldPrice": 1126,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/1c/83/b26bb2134b81abe863cce8ecdd2d.png",
    "images": [
      "https://file.zendrop.com/products/1c/83/b26bb2134b81abe863cce8ecdd2d.png",
      "https://file.zendrop.com/products/fd/22/ab7fb374456b8d1f806a4fcb8b11.png",
      "https://file.zendrop.com/products/cb/4c/e3732dd843998cf38d0410276b51.jpeg",
      "https://file.zendrop.com/products/01/be/d10b51454b21851b36180f1f7b80.png"
    ],
    "shortDescription": "Everyday Wear - Premium Quality Product.",
    "description": "Experience premium quality and style with this Everyday Wear piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 339,
    "reviews": [
      {
        "id": "base_rev_zen_2636105_1",
        "author": "Vikramaditya S.",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2636105_2",
        "author": "Gaurav Joshi",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2655381",
    "title": "Loose Short Sleeve T-Shirt and Shorts Set",
    "price": 407,
    "oldPrice": 599,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/ce/86/a07f18be4078abd7f33e047c9561.jpeg",
    "images": [
      "https://file.zendrop.com/products/ce/86/a07f18be4078abd7f33e047c9561.jpeg"
    ],
    "shortDescription": "Co-ord Sets - Premium Quality Product.",
    "description": "Experience premium quality and style with this Co-ord Sets piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 362,
    "reviews": [
      {
        "id": "base_rev_zen_2655381_1",
        "author": "Priyanka Roy",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2655381_2",
        "author": "Tanya Sen",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2656595",
    "title": "Boys' and Girls' Striped Long Sleeve T-Shirt",
    "price": 382,
    "oldPrice": 497,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/fb/0e/f17f0a7d4db09891dea3f22438a2.jpeg",
    "images": [
      "https://file.zendrop.com/products/fb/0e/f17f0a7d4db09891dea3f22438a2.jpeg"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 385,
    "reviews": [
      {
        "id": "base_rev_zen_2656595_1",
        "author": "Ramesh Chhabra",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2656595_2",
        "author": "Karthik Nair",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2658774",
    "title": "Adult Pet T-Shirt for Dogs and Cats",
    "price": 414,
    "oldPrice": 539,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/35/68/9b0a41634d758a05a6f74365e6d5.jpeg",
    "images": [
      "https://file.zendrop.com/products/35/68/9b0a41634d758a05a6f74365e6d5.jpeg"
    ],
    "shortDescription": "Pet Clothing - Premium Quality Product.",
    "description": "Experience premium quality and style with this Pet Clothing piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 408,
    "reviews": [
      {
        "id": "base_rev_zen_2658774_1",
        "author": "Anjali Deshmukh",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2658774_2",
        "author": "Bhavna Patel",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2660213",
    "title": "Men's Casual Korean T-Shirt and Shorts Suit",
    "price": 1100,
    "oldPrice": 1430,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/0f/a5/91ffb4774284bd0e9613c308b4a3.jpeg",
    "images": [
      "https://file.zendrop.com/products/0f/a5/91ffb4774284bd0e9613c308b4a3.jpeg"
    ],
    "shortDescription": "Co-ord Sets - Premium Quality Product.",
    "description": "Experience premium quality and style with this Co-ord Sets piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 431,
    "reviews": [
      {
        "id": "base_rev_zen_2660213_1",
        "author": "Gaurav Joshi",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2660213_2",
        "author": "Nikhil Mehra",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2674162",
    "title": "Versatile Sweet and Gentle Short Sleeve T-Shirt",
    "price": 388,
    "oldPrice": 418,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/ef/87/baa6b737414bad487ae7b0542824.png",
    "images": [
      "https://file.zendrop.com/products/ef/87/baa6b737414bad487ae7b0542824.png",
      "https://file.zendrop.com/products/33/e7/c400c119454f9bcf0311629db33a.png",
      "https://file.zendrop.com/products/65/b8/590e6705471d97a06940e7a23c11.jpeg"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 454,
    "reviews": [
      {
        "id": "base_rev_zen_2674162_1",
        "author": "Tanya Sen",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2674162_2",
        "author": "Swati Saxena",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2676473",
    "title": "Red and White Women's Short-Sleeved T-Shirt",
    "price": 346,
    "oldPrice": 669,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/60/d7/d38705994e83a7403ce46aa336a3.jpeg",
    "images": [
      "https://file.zendrop.com/products/60/d7/d38705994e83a7403ce46aa336a3.jpeg"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 477,
    "reviews": [
      {
        "id": "base_rev_zen_2676473_1",
        "author": "Karthik Nair",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2676473_2",
        "author": "Manish Pandey",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2676670",
    "title": "Ethnic Style Cotton and Linen Men's T-shirt",
    "price": 558,
    "oldPrice": 726,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/ca/a8/01459a6e4db9bf0c48dcae39416c.jpeg",
    "images": [
      "https://file.zendrop.com/products/ca/a8/01459a6e4db9bf0c48dcae39416c.jpeg"
    ],
    "shortDescription": "Casual Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this Casual Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 100,
    "reviews": [
      {
        "id": "base_rev_zen_2676670_1",
        "author": "Bhavna Patel",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2676670_2",
        "author": "Deepika K.",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2679701",
    "title": "Summer Striped T-Shirt for Boys and Girls",
    "price": 530,
    "oldPrice": 792,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/22/6c/9630030646b49ac996f185cf6eff.jpeg",
    "images": [
      "https://file.zendrop.com/products/22/6c/9630030646b49ac996f185cf6eff.jpeg"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 123,
    "reviews": [
      {
        "id": "base_rev_zen_2679701_1",
        "author": "Nikhil Mehra",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2679701_2",
        "author": "Abhishek Sharma",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2681563",
    "title": "Black and White Raglan T-shirt for Couples",
    "price": 622,
    "oldPrice": 809,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/75/ad/91705f6f4033ac7c333e620ad9e4.png",
    "images": [
      "https://file.zendrop.com/products/75/ad/91705f6f4033ac7c333e620ad9e4.png"
    ],
    "shortDescription": "Couple Wear - Premium Quality Product.",
    "description": "Experience premium quality and style with this Couple Wear piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 146,
    "reviews": [
      {
        "id": "base_rev_zen_2681563_1",
        "author": "Swati Saxena",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2681563_2",
        "author": "Simran Gill",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2688529",
    "title": "Fleece Dog T-Shirt for Autumn and Winter",
    "price": 478,
    "oldPrice": 761,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/7d/f3/a174b2374b36b111bfe73ddc5af5.jpeg",
    "images": [
      "https://file.zendrop.com/products/7d/f3/a174b2374b36b111bfe73ddc5af5.jpeg"
    ],
    "shortDescription": "Pet Clothing - Premium Quality Product.",
    "description": "Experience premium quality and style with this Pet Clothing piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 169,
    "reviews": [
      {
        "id": "base_rev_zen_2688529_1",
        "author": "Manish Pandey",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2688529_2",
        "author": "Vikramaditya S.",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2690712",
    "title": "Hooded Striped T-Shirt for Pets and Owners",
    "price": 558,
    "oldPrice": 726,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/8b/00/cd9ff5b94ae6b14642c1541a0f1b.jpeg",
    "images": [
      "https://file.zendrop.com/products/8b/00/cd9ff5b94ae6b14642c1541a0f1b.jpeg"
    ],
    "shortDescription": "Matching Wear - Premium Quality Product.",
    "description": "Experience premium quality and style with this Matching Wear piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 192,
    "reviews": [
      {
        "id": "base_rev_zen_2690712_1",
        "author": "Deepika K.",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2690712_2",
        "author": "Priyanka Roy",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2692249",
    "title": "Korean Style Flower T-Shirt and Skirt Set",
    "price": 558,
    "oldPrice": 726,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/a7/3a/7b887df04cf996dc27d7f7342ef9.jpeg",
    "images": [
      "https://file.zendrop.com/products/a7/3a/7b887df04cf996dc27d7f7342ef9.jpeg"
    ],
    "shortDescription": "Co-ord Sets - Premium Quality Product.",
    "description": "Experience premium quality and style with this Co-ord Sets piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 215,
    "reviews": [
      {
        "id": "base_rev_zen_2692249_1",
        "author": "Abhishek Sharma",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2692249_2",
        "author": "Ramesh Chhabra",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2692445",
    "title": "Children's T-Shirt and Skirt 2-Piece Set",
    "price": 367,
    "oldPrice": 478,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/34/7c/6fbe775745c1a1d61672d9abd230.jpeg",
    "images": [
      "https://file.zendrop.com/products/34/7c/6fbe775745c1a1d61672d9abd230.jpeg"
    ],
    "shortDescription": "Co-ord Sets - Premium Quality Product.",
    "description": "Experience premium quality and style with this Co-ord Sets piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 238,
    "reviews": [
      {
        "id": "base_rev_zen_2692445_1",
        "author": "Simran Gill",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2692445_2",
        "author": "Anjali Deshmukh",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2701373",
    "title": "Maternity Fashion T-shirt for Comfort and Style",
    "price": 337,
    "oldPrice": 439,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/9c/cc/d0a97b8f4d3f91ef9579c0698e5c.jpeg",
    "images": [
      "https://file.zendrop.com/products/9c/cc/d0a97b8f4d3f91ef9579c0698e5c.jpeg"
    ],
    "shortDescription": "Maternity Wear - Premium Quality Product.",
    "description": "Experience premium quality and style with this Maternity Wear piece. Professionally sourced for durability and comfort.",
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 261,
    "reviews": [
      {
        "id": "base_rev_zen_2701373_1",
        "author": "Vikramaditya S.",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2701373_2",
        "author": "Gaurav Joshi",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2702385",
    "title": "New Spring and Summer Dog Vest T-Shirt",
    "price": 523,
    "oldPrice": 731,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/d0/b6/39cee9ba4b8e8fa3e8bbcb7c286c.jpeg",
    "images": [
      "https://file.zendrop.com/products/d0/b6/39cee9ba4b8e8fa3e8bbcb7c286c.jpeg"
    ],
    "shortDescription": "Pet Clothing - Premium Quality Product.",
    "description": "Experience premium quality and style with this Pet Clothing piece. Professionally sourced for durability and comfort.",
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 284,
    "reviews": [
      {
        "id": "base_rev_zen_2702385_1",
        "author": "Priyanka Roy",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2702385_2",
        "author": "Tanya Sen",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2703212",
    "title": "Striped Summer T-Shirt for Boys and Girls",
    "price": 540,
    "oldPrice": 720,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/88/06/849abb7343c8994535d583a71449.jpeg",
    "images": [
      "https://file.zendrop.com/products/88/06/849abb7343c8994535d583a71449.jpeg"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 307,
    "reviews": [
      {
        "id": "base_rev_zen_2703212_1",
        "author": "Ramesh Chhabra",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2703212_2",
        "author": "Karthik Nair",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2703792",
    "title": "Children's Polo Shirt and Short Sleeve T-Shirt Set",
    "price": 351,
    "oldPrice": 457,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/47/76/fdb965c44c0d85d79efad9fa6d4f.jpeg",
    "images": [
      "https://file.zendrop.com/products/47/76/fdb965c44c0d85d79efad9fa6d4f.jpeg"
    ],
    "shortDescription": "Co-ord Sets - Premium Quality Product.",
    "description": "Experience premium quality and style with this Co-ord Sets piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 330,
    "reviews": [
      {
        "id": "base_rev_zen_2703792_1",
        "author": "Anjali Deshmukh",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2703792_2",
        "author": "Bhavna Patel",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2704652",
    "title": "Casual Terry T-Shirt for Dogs and Pets",
    "price": 447,
    "oldPrice": 582,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/2d/d7/29b105c749cd930546b4b01a7115.jpeg",
    "images": [
      "https://file.zendrop.com/products/2d/d7/29b105c749cd930546b4b01a7115.jpeg"
    ],
    "shortDescription": "Pet Clothing - Premium Quality Product.",
    "description": "Experience premium quality and style with this Pet Clothing piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 353,
    "reviews": [
      {
        "id": "base_rev_zen_2704652_1",
        "author": "Gaurav Joshi",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2704652_2",
        "author": "Nikhil Mehra",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2734208",
    "title": "Women's Red and White Short-Sleeved T-shirt",
    "price": 547,
    "oldPrice": 740,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/2e/14/e7413bb2457f952fccfff13a511e.jpeg",
    "images": [
      "https://file.zendrop.com/products/2e/14/e7413bb2457f952fccfff13a511e.jpeg"
    ],
    "shortDescription": "T-Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this T-Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 399,
    "reviews": [
      {
        "id": "base_rev_zen_2734208_1",
        "author": "Karthik Nair",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2734208_2",
        "author": "Manish Pandey",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2737105",
    "title": "Women's Geometric Stitching T-Shirt and Top",
    "price": 526,
    "oldPrice": 684,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/0f/1f/887fec3b491fb677a616b61b7c04.jpeg",
    "images": [
      "https://file.zendrop.com/products/0f/1f/887fec3b491fb677a616b61b7c04.jpeg"
    ],
    "shortDescription": "Tops - Premium Quality Product.",
    "description": "Experience premium quality and style with this Tops piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 422,
    "reviews": [
      {
        "id": "base_rev_zen_2737105_1",
        "author": "Bhavna Patel",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2737105_2",
        "author": "Deepika K.",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2783643",
    "title": "Dolphin T-Shirt for Pets and Dogs",
    "price": 556,
    "oldPrice": 830,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/c6/6c/6c78bea645bbbcb5e168f4176833.jpeg",
    "images": [
      "https://file.zendrop.com/products/c6/6c/6c78bea645bbbcb5e168f4176833.jpeg"
    ],
    "shortDescription": "Pet Clothing - Premium Quality Product.",
    "description": "Experience premium quality and style with this Pet Clothing piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 445,
    "reviews": [
      {
        "id": "base_rev_zen_2783643_1",
        "author": "Nikhil Mehra",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2783643_2",
        "author": "Abhishek Sharma",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2790260",
    "title": "Short Sleeve Sweatshirt and T-Shirt Collection",
    "price": 428,
    "oldPrice": 685,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/b2/cc/d29bf9f7460c950288fabb428f40.png",
    "images": [
      "https://file.zendrop.com/products/b2/cc/d29bf9f7460c950288fabb428f40.png",
      "https://file.zendrop.com/products/fa/61/1bb2590947738aee4ae0ad9accb2.png",
      "https://file.zendrop.com/products/3d/d2/807d62894676b0a9a91b6edf3b1b.png",
      "https://file.zendrop.com/products/d0/b4/52aac6d54bd3ab9a424460411c77.png"
    ],
    "shortDescription": "Sweatshirts & Tees - Premium Quality Product.",
    "description": "Experience premium quality and style with this Sweatshirts & Tees piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 468,
    "reviews": [
      {
        "id": "base_rev_zen_2790260_1",
        "author": "Swati Saxena",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2790260_2",
        "author": "Simran Gill",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2792294",
    "title": "Short Sleeve Hoodie and T-Shirt Collection",
    "price": 338,
    "oldPrice": 630,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/dd/99/90c3004b4731a5622ed34c12b25c.png",
    "images": [
      "https://file.zendrop.com/products/dd/99/90c3004b4731a5622ed34c12b25c.png"
    ],
    "shortDescription": "Hoodies - Premium Quality Product.",
    "description": "Experience premium quality and style with this Hoodies piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 91,
    "reviews": [
      {
        "id": "base_rev_zen_2792294_1",
        "author": "Manish Pandey",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2792294_2",
        "author": "Vikramaditya S.",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2797455",
    "title": "T-Shirt and Tops Collection",
    "price": 548,
    "oldPrice": 813,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/9d/5e/d9a18fbb4211bcfae71c4365328a.png",
    "images": [
      "https://file.zendrop.com/products/9d/5e/d9a18fbb4211bcfae71c4365328a.png",
      "https://file.zendrop.com/products/10/01/f47c86c74fa0abd9dd1ac718a830.png",
      "https://file.zendrop.com/products/f2/b4/92b5a59a43cabc7c8465d205844a.png",
      "https://file.zendrop.com/products/1f/ec/0aa0b5f04cf19f17224375bd26ce.png",
      "https://file.zendrop.com/products/f3/9a/cdf68b004a338e172d1dca96e359.png"
    ],
    "shortDescription": "Fashion Apparel - Premium Quality Product.",
    "description": "Experience premium quality and style with this Fashion Apparel piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 137,
    "reviews": [
      {
        "id": "base_rev_zen_2797455_1",
        "author": "Abhishek Sharma",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2797455_2",
        "author": "Ramesh Chhabra",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2798081",
    "title": "Short Sleeve T-Shirt and Shorts Set",
    "price": 623,
    "oldPrice": 810,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/d5/77/09b6379f41478e2b6ae162f9c09f.jpeg",
    "images": [
      "https://file.zendrop.com/products/d5/77/09b6379f41478e2b6ae162f9c09f.jpeg",
      "https://file.zendrop.com/products/70/ec/ea36edfd4540852ad3e5987d3c5a.jpeg",
      "https://file.zendrop.com/products/6d/98/499e99114cbb93c8e7ccbad4ed56.jpeg"
    ],
    "shortDescription": "Co-ord Sets - Premium Quality Product.",
    "description": "Experience premium quality and style with this Co-ord Sets piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 160,
    "reviews": [
      {
        "id": "base_rev_zen_2798081_1",
        "author": "Simran Gill",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2798081_2",
        "author": "Anjali Deshmukh",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2798672",
    "title": "3D Men's Polo Shirt and Printed T-Shirt Collection",
    "price": 653,
    "oldPrice": 849,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/70/9c/186b550c447b97a7b5c5e7f1aa7e.png",
    "images": [
      "https://file.zendrop.com/products/70/9c/186b550c447b97a7b5c5e7f1aa7e.png",
      "https://file.zendrop.com/products/2a/6b/19ea7cc9451391a9c02a0a08ba69.png",
      "https://file.zendrop.com/products/58/09/fc744e554778ba2e01b709154670.png"
    ],
    "shortDescription": "3D Prints - Premium Quality Product.",
    "description": "Experience premium quality and style with this 3D Prints piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 183,
    "reviews": [
      {
        "id": "base_rev_zen_2798672_1",
        "author": "Vikramaditya S.",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2798672_2",
        "author": "Gaurav Joshi",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2801470",
    "title": "Superhero Graphic Compression Sports T-Shirt and Leggings",
    "price": 408,
    "oldPrice": 662,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/9e/a4/334b625f405fa20656202b6418aa.png",
    "images": [
      "https://file.zendrop.com/products/9e/a4/334b625f405fa20656202b6418aa.png",
      "https://file.zendrop.com/products/a1/4a/29b3b01548cdbaacd27b0a8ada7a.jpeg"
    ],
    "shortDescription": "Compression Wear - Premium Quality Product.",
    "description": "Experience premium quality and style with this Compression Wear piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 229,
    "reviews": [
      {
        "id": "base_rev_zen_2801470_1",
        "author": "Ramesh Chhabra",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2801470_2",
        "author": "Karthik Nair",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2802049",
    "title": "Cat Print Hoodie and T-Shirt",
    "price": 382,
    "oldPrice": 497,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/ca/3c/0dc26bcf401199ad7a6c3848c524.jpeg",
    "images": [
      "https://file.zendrop.com/products/ca/3c/0dc26bcf401199ad7a6c3848c524.jpeg",
      "https://file.zendrop.com/products/d4/ab/16802b9e4c79a7763d9d37e8f0de.jpeg",
      "https://file.zendrop.com/products/89/e5/c2078e2d49f7a8256eedb24b15ee.jpeg",
      "https://file.zendrop.com/products/84/eb/25f638da4329a366f98797371bc0.jpeg"
    ],
    "shortDescription": "Graphic Apparel - Premium Quality Product.",
    "description": "Experience premium quality and style with this Graphic Apparel piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 298,
    "reviews": [
      {
        "id": "base_rev_zen_2802049_1",
        "author": "Tanya Sen",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2802049_2",
        "author": "Swati Saxena",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2803432",
    "title": "Wave Mural and T-Shirt Combo Set",
    "price": 450,
    "oldPrice": 631,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/b8/aa/6ed7bc794537a66b287785a0dd29.png",
    "images": [
      "https://file.zendrop.com/products/b8/aa/6ed7bc794537a66b287785a0dd29.png",
      "https://file.zendrop.com/products/b9/c2/bd59e8494b99bc883caa1da2df4a.png"
    ],
    "shortDescription": "Artistic Prints - Premium Quality Product.",
    "description": "Experience premium quality and style with this Artistic Prints piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 321,
    "reviews": [
      {
        "id": "base_rev_zen_2803432_1",
        "author": "Karthik Nair",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2803432_2",
        "author": "Manish Pandey",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2805351",
    "title": "Snake Pattern T-Shirt and Printed Tee",
    "price": 548,
    "oldPrice": 744,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/c4/9d/b6cd7bec4e69b58b6fa5f7452aef.jpeg",
    "images": [
      "https://file.zendrop.com/products/c4/9d/b6cd7bec4e69b58b6fa5f7452aef.jpeg",
      "https://file.zendrop.com/products/74/f9/a1877280460db25ef91af6afa090.png",
      "https://file.zendrop.com/products/53/81/d21b1e49401b8207d097a594988d.png",
      "https://file.zendrop.com/products/29/85/c781034446eb8753abf4eddab275.png",
      "https://file.zendrop.com/products/14/0e/eeeafda44f37b305ecc69a50c71c.png"
    ],
    "shortDescription": "Animal Prints - Premium Quality Product.",
    "description": "Experience premium quality and style with this Animal Prints piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 344,
    "reviews": [
      {
        "id": "base_rev_zen_2805351_1",
        "author": "Bhavna Patel",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2805351_2",
        "author": "Deepika K.",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2816562",
    "title": "Hooded Casual T-Shirt and Sweatshirt Collection",
    "price": 478,
    "oldPrice": 622,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/d8/c7/82a6966848ecb22b64e52744b1fd.png",
    "images": [
      "https://file.zendrop.com/products/d8/c7/82a6966848ecb22b64e52744b1fd.png",
      "https://file.zendrop.com/products/47/a9/cfd8e8fe4f07bff7c33e000de467.png",
      "https://file.zendrop.com/products/29/cb/e65563cf4b1f9151dbb16db94763.png",
      "https://file.zendrop.com/products/11/cb/76d28ea3497d8951fe1dd59c99e8.png",
      "https://file.zendrop.com/products/f2/d8/b5fce73a4ba88db7be53c0c3dd6c.png"
    ],
    "shortDescription": "Hoodies & Sweatshirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this Hoodies & Sweatshirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 367,
    "reviews": [
      {
        "id": "base_rev_zen_2816562_1",
        "author": "Nikhil Mehra",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2816562_2",
        "author": "Abhishek Sharma",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2827102",
    "title": "2018 Summer 3D Printed Baseball Shirt and T-Shirt",
    "price": 765,
    "oldPrice": 995,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/b0/5d/a3e94ec346799776db483d23b47f.png",
    "images": [
      "https://file.zendrop.com/products/b0/5d/a3e94ec346799776db483d23b47f.png"
    ],
    "shortDescription": "3D Prints - Premium Quality Product.",
    "description": "Experience premium quality and style with this 3D Prints piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 390,
    "reviews": [
      {
        "id": "base_rev_zen_2827102_1",
        "author": "Swati Saxena",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2827102_2",
        "author": "Simran Gill",
        "rating": 4,
        "date": "8 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2835740",
    "title": "Women's Long Sleeve Dress Shirt and T-Shirt Combo",
    "price": 375,
    "oldPrice": 488,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/57/51/8aad5b394c7db1eb15d86edaa187.png",
    "images": [
      "https://file.zendrop.com/products/57/51/8aad5b394c7db1eb15d86edaa187.png",
      "https://file.zendrop.com/products/18/90/a41fb5ef48f3aa2beb0fc82e9ec7.png",
      "https://file.zendrop.com/products/fb/91/dc41c088430aa3492c1f95b95cd4.jpeg",
      "https://file.zendrop.com/products/d9/f2/21e58222445aa7e76ab697d26b26.jpeg"
    ],
    "shortDescription": "Tops & Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this Tops & Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.7,
    "reviewCount": 413,
    "reviews": [
      {
        "id": "base_rev_zen_2835740_1",
        "author": "Manish Pandey",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2835740_2",
        "author": "Vikramaditya S.",
        "rating": 4,
        "date": "9 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2843823",
    "title": "Quick-Dry T-Shirt and Yoga Wear",
    "price": 531,
    "oldPrice": 691,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/1e/70/7706925240799facf89663b72060.png",
    "images": [
      "https://file.zendrop.com/products/1e/70/7706925240799facf89663b72060.png",
      "https://file.zendrop.com/products/64/ee/178c8e9942f992841a8d1a3ce6d6.png"
    ],
    "shortDescription": "Yoga & Fitness - Premium Quality Product.",
    "description": "Experience premium quality and style with this Yoga & Fitness piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.8,
    "reviewCount": 436,
    "reviews": [
      {
        "id": "base_rev_zen_2843823_1",
        "author": "Deepika K.",
        "rating": 5,
        "date": "4 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2843823_2",
        "author": "Priyanka Roy",
        "rating": 4,
        "date": "10 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2852999",
    "title": "Polo T-Shirt and Cultural Shirt Collection",
    "price": 404,
    "oldPrice": 745,
    "category": "Men's Fashion",
    "image": "https://file.zendrop.com/products/e4/ef/a2acb70a4ba2997701a91cfe748a.jpeg",
    "images": [
      "https://file.zendrop.com/products/e4/ef/a2acb70a4ba2997701a91cfe748a.jpeg",
      "https://file.zendrop.com/products/f7/e9/2c1b61564a60ae1ce5faa13f10d1.jpeg"
    ],
    "shortDescription": "Polo Shirts - Premium Quality Product.",
    "description": "Experience premium quality and style with this Polo Shirts piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.3,
    "reviewCount": 459,
    "reviews": [
      {
        "id": "base_rev_zen_2852999_1",
        "author": "Abhishek Sharma",
        "rating": 5,
        "date": "5 days ago",
        "comment": "Super happy with the quality. Delivery was completed in 3 days.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2852999_2",
        "author": "Ramesh Chhabra",
        "rating": 4,
        "date": "11 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2854889",
    "title": "Devil and Angel Wings Couple T-Shirt",
    "price": 567,
    "oldPrice": 837,
    "category": "Essentials",
    "image": "https://file.zendrop.com/products/23/42/6b0aee554b66910479b3792fadb5.png",
    "images": [
      "https://file.zendrop.com/products/23/42/6b0aee554b66910479b3792fadb5.png",
      "https://file.zendrop.com/products/1f/85/c8441700461bbca7998adb7816bd.png"
    ],
    "shortDescription": "Couple Wear - Premium Quality Product.",
    "description": "Experience premium quality and style with this Couple Wear piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.4,
    "reviewCount": 482,
    "reviews": [
      {
        "id": "base_rev_zen_2854889_1",
        "author": "Simran Gill",
        "rating": 5,
        "date": "6 days ago",
        "comment": "Very sturdy and well finished. Definitely buying more items from this drop.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2854889_2",
        "author": "Anjali Deshmukh",
        "rating": 4,
        "date": "12 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2854988",
    "title": "Embroidered Mesh Top and T-Shirt",
    "price": 447,
    "oldPrice": 582,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/64/82/4be7ee6b422abd8e5c81e316b05f.png",
    "images": [
      "https://file.zendrop.com/products/64/82/4be7ee6b422abd8e5c81e316b05f.png",
      "https://file.zendrop.com/products/74/fc/8f21c8d94f8db650e31621231c3f.png",
      "https://file.zendrop.com/products/1d/33/3b83f5b845c8a45e12928dfbdacd.png"
    ],
    "shortDescription": "Tops - Premium Quality Product.",
    "description": "Experience premium quality and style with this Tops piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.5,
    "reviewCount": 105,
    "reviews": [
      {
        "id": "base_rev_zen_2854988_1",
        "author": "Vikramaditya S.",
        "rating": 5,
        "date": "2 days ago",
        "comment": "Ordered for the first time from Free Fire Shop. Really good quality and fast shipping!",
        "verified": true
      },
      {
        "id": "base_rev_zen_2854988_2",
        "author": "Gaurav Joshi",
        "rating": 4,
        "date": "6 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  },
  {
    "id": "zen_2858243",
    "title": "Shapewear, T-Shirt, and Fitness Apparel Collection",
    "price": 557,
    "oldPrice": 832,
    "category": "Women's Fashion",
    "image": "https://file.zendrop.com/products/37/de/f1ffbd594b4bbcf1772829f57f5b.jpeg",
    "images": [
      "https://file.zendrop.com/products/37/de/f1ffbd594b4bbcf1772829f57f5b.jpeg"
    ],
    "shortDescription": "Activewear & Shapewear - Premium Quality Product.",
    "description": "Experience premium quality and style with this Activewear & Shapewear piece. Professionally sourced for durability and comfort.",
    "sizes": [
      "S",
      "M",
      "L",
      "XL",
      "XXL"
    ],
    "isNew": false,
    "rating": 4.6,
    "reviewCount": 128,
    "reviews": [
      {
        "id": "base_rev_zen_2858243_1",
        "author": "Priyanka Roy",
        "rating": 5,
        "date": "3 days ago",
        "comment": "Value for money! The product came nicely packed and works exactly as expected.",
        "verified": true
      },
      {
        "id": "base_rev_zen_2858243_2",
        "author": "Tanya Sen",
        "rating": 4,
        "date": "7 days ago",
        "comment": "Great quality product for this price point. Would recommend!",
        "verified": true
      }
    ]
  }
];

export const products: Product[] = [...baseProducts];

export const categories: string[] = ["All", "Men's Fashion", "Women's Fashion", "Essentials"];

export const getProductsByCategory = (category: string) => {
  if (category === "All") return products;
  return products.filter((p) => p.category === category);
};
