type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number }[];
  };
  
  type Products = Product[];
  
  export const featuredProducts: Products = [
    {
      id: 1,
      title: "Sweets",
      desc: "Traditional sweets ghee sweets , laddu Modak Halwa ice Halwa Badami Halwa ghee Halwa  Mawa..",
      img: "/sweets.png",
      price: 240,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "Chilli Paneer",
      desc: "Chilli Paneer is an indo chinese appetizer where crisp batter fried paneer is tossed in slighly sweet , spicy , hot and tangy chilli",
      img: "/chillipaneer.png",
      price: 200,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "Veg Biryani",
      desc: "The Hydrabadi Veg biryani is an authentication indian vegetarian recipie packed full of your favorite rice , veggies.",
      img: "/biryani.png",
      price: 150,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: "Punjabi Chole",
      desc: "Punjabi chole is one of the most popular vegetarian curry dishesh in india it is a chickpea curry.",
      img: "/chole.png",
      price: 180,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Tandoori Roti",
      desc: "A traditional and tasty north indian flatbread recipe made with wheat flour using tawa on top gas stove.",
      img: "/Tandoori.png",
      price: 20,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Veg Manchurian",
      desc: "veg manchurian is indo chines meal. these crisp fried vegetable balls tossed Manchurian sauce are amazingly delicious and addictive .",
      img: "/manchurian.png",
      price: 150,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 7,
      title: "Veg Burger",
      desc: "A veggie burger is a hamburger made with a patty that does not  contain  meat , or the patty  of such a hamburger.",
      img: "/burger.png",
      price: 150,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 8,
      title: "Rabadi",
      desc: "Rabri is a sweeets condenderd-milk-based dish originating from the indian subcontinent more-specifically bengal region.",
      img: "/rabadi.png",
      price: 90,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 9,
      title: "Shrikhand",
      desc: "Shrickhand is traditional sweet of the indian subcontinent made from straned yogurt .it is often serverd as part of a thali or with puris.",
      img: "/shrikhand.png",
      price: 120,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  
  
  
  export const pizzas: Products = [
    {
      id: 1,
      title: "Sweets",
      desc: "Traditional sweets ghee sweets , laddu Modak Halwa ice Halwa Badami Halwa ghee Halwa  Mawa.",
      img: "/sweets.png",
      price: 240,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 2,
      title: "CHILLI PANEER",
      desc: "Chilli Paneer is an indo chinese appetizer where crisp batter fried paneer is tossed in slighly sweet , spicy , hot and tangy chilli",
      img: "/chillipaneer.png",
      price: 200,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 3,
      title: "VEG BIRYANI",
      desc: "The Hydrabadi Veg biryani is an authentication indian vegetarian recipie packed full of your favorite rice , veggies.",
      img: "/biryani.png",
      price: 150,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 4,
      title: " Punjabi Chole",
      desc: "Punjabi chole is one of the most popular vegetarian curry dishesh in india it is a chickpea curry.",
      img: "/chole.png",
      price: 180,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 5,
      title: "Tandoori Roti ",
      desc: "A traditional and tasty north indian flatbread recipe made with wheat flour using tawa on top gas stove.",
      img: "/Tandoori.png",
      price: 20,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
    {
      id: 6,
      title: "Veg Manchurian",
      desc: "veg manchurian is indo chines meal. these crisp fried vegetable balls tossed Manchurian sauce are amazingly delicious and addictive .",
      img: "/manchurian.png",
      price: 150,
      options: [
        {
          title: "Small",
          additionalPrice: 0,
        },
        {
          title: "Medium",
          additionalPrice: 4,
        },
        {
          title: "Large",
          additionalPrice: 6,
        },
      ],
    },
  ];
  
  export const singleProduct: Product = {
    id: 1,
    title: "Sweets",
    desc: "Traditional sweets ghee sweets , laddu Modak Halwa ice Halwa Badami Halwa ghee Halwa  Mawa.",
    img: "/sweets.png",
    price: 240,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
    
  };  
  
  export const singleProduct2: Product = {
    id: 2,
    title: "Rabari",
    desc: "Rabri is a sweeets condenderd-milk-based dish originating from the indian subcontinent more-specifically bengal region..",
    img: "/rabadi.png",
    price: 90,
    options: [
      {
        title: "Small",
        additionalPrice: 0,
      },
      {
        title: "Medium",
        additionalPrice: 4,
      },
      {
        title: "Large",
        additionalPrice: 6,
      },
    ],
  };
  
  
  type Menu = {
    id: number;
    slug: string;
    title: string;
    desc?: string;
    img?: string;
    color: string;
  }[];
  
  export const menu: Menu = [
    {
      id: 1,
      slug: "pastas",
      title: "Sweets",
      desc: "Traditional sweets ghee sweets , laddu Modak Halwa ice Halwa Badami Halwa ghee Halwa  Mawa..",
      img: "/sweets.png",
      color: "white",
    },
    {
      id: 2,
      slug: "burgers",
      title: "Veg Burgers",
      desc: "Burger Bliss: Juicy patties, bold flavors, and gourmet toppings galore.",
      img: "/burger.png",
      color: "black",
    },
    {
      id: 3,
      slug: "pizzas",
      title: "Chili Paneer",
      desc: "Chilli Paneer is an indo chinese appetizer where crisp batter fried paneer is tossed in slighly sweet ",
      img: "/chillipaneer.png",
      color: "white",
    },
  ];