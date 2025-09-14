const menuData = {
  "NON VEG STARTER'S": [
    { 
      name: "TANDOORI CHICKEN", 
      price: { full: 360, half: 200 },
      description: "Succulent chicken marinated in yogurt and aromatic spices, cooked in traditional tandoor",
      image: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0?w=300&h=200&fit=crop"
    },
    { 
      name: "AFGANI CHICKEN", 
      price: { full: 400, half: 220 },
      description: "Tender chicken pieces in creamy white marinade with cashews and mild spices",
      image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?w=300&h=200&fit=crop"
    },
    { 
      name: "CHICKEN TANGRI", 
      price: { full: 250, half: 130 },
      description: "Juicy chicken drumsticks marinated with traditional spices and grilled to perfection",
      image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=300&h=200&fit=crop"
    },
    { 
      name: "AFGANI TANGRI", 
      price: { full: 280, half: 140 },
      description: "Drumsticks in rich Afghani style marinade with cream and aromatic herbs",
      image: "https://images.unsplash.com/photo-1606491956689-2ea866880c84?w=300&h=200&fit=crop"
    },
    { 
      name: "CHICKEN MALAI TIKKA", 
      price: { full: 230, half: 120 },
      description: "Creamy and mild chicken tikka marinated in cashew paste and fresh cream",
      image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=300&h=200&fit=crop"
    },
    { name: "CHICKEN HARIYALI TIKKA", price: { full: 250, half: 130 } },
    { name: "KALMI KABAB", price: { full: 250, half: 130 } },
    { name: "MUTTON KABAB", price: { full: 300, half: 160 } },
    { name: "MUTTON SEEKH KABAB", price: { full: 250, half: 130 } },
    { name: "MUTTON BARRA", price: { full: 330, half: 240 } },
    { name: "CHICKEN SEEKH KABAB", price: { full: 230, half: 120 } },
    { name: "FISH TIKKA", price: { full: 280 } },
    { name: "FISH SURMAI/SOLE", price: { full: 330 } },
    { name: "FISH PAMPHLET", price: { full: 350 } },
    { name: "KALI MIRCH TIKKA", price: { full: 300 } }
  ],
  "NON VEG STARTER'S (BONELESS)": [
    { name: "BUTTER CHICKEN (BONELESS)", price: { full: 550, half: 330, qtr: 220 } },
    { name: "BUTTER CHICKEN", price: { full: 500, half: 300, qtr: 200 } },
    { name: "KADAI CHICKEN", price: { full: 500, half: 300, qtr: 200 } },
    { name: "CHICKEN LABABDAR", price: { full: 500, half: 300, qtr: 200 } },
    { name: "CHICKEN DO PYAZA", price: { full: 500, half: 300, qtr: 200 } },
    { name: "HANDI SPL CHICKEN", price: { full: 500, half: 300, qtr: 200 } },
    { name: "CHICKEN CURRY", price: { full: 500, half: 300, qtr: 200 } },
    { name: "TAWA CHICKEN", price: { full: 500, half: 300, qtr: 200 } },
    { name: "CHICKEN RARA", price: { full: 550, half: 330, qtr: 220 } },
    { name: "CHICKEN MASALA", price: { full: 550, half: 330, qtr: 220 } },
    { name: "CHICKEN KALI MIRCH", price: { full: 550, half: 330, qtr: 220 } },
    { name: "CHICKEN METHI MALAI", price: { full: 550, half: 330, qtr: 220 } },
    { name: "CHICKEN TIKKA MASALA (BONELESS)", price: { full: 330, half: 200 } },
    { name: "BUTTER CHICKEN TIKKA", price: { full: 330, half: 200 } },
    { name: "MUTTON KORMA", price: { full: 280 } },
    { name: "MUTTON ROGAN JOSH", price: { full: 280 } },
    { name: "MUTTON RARA", price: { full: 330 } },
    { name: "EGG CURRY", price: { full: 160 } },
    { name: "FISH CURRY", price: { full: 300 } }
  ],
  "ROOMALI ROLLS": [
    { name: "SPL SHAWARMA ROLL", price: { full: 60 } },
    { name: "CHICKEN TIKKA ROLL", price: { full: 120 } },
    { name: "CHICKEN MALAI TIKKA ROLL", price: { full: 130 } },
    { name: "CHICKEN SEEKH KABAB ROLL", price: { full: 120 } },
    { name: "MUTTON SEEKH KABAB ROLL", price: { full: 130 } },
    { name: "PANEER TIKKA ROLL", price: { full: 100 } },
    { name: "MUSHROOM TIKKA ROLL", price: { full: 90 } },
    { name: "SOYA CHAP ROLL", price: { full: 90 } }
  ],
  "RICE": [
    { 
      name: "JEERA RICE", 
      price: { full: 120 },
      description: "Fragrant basmati rice cooked with cumin seeds and aromatic spices",
      image: "https://images.unsplash.com/photo-1596797038530-2c107229654b?w=300&h=200&fit=crop"
    },
    { 
      name: "PEAS PULAO", 
      price: { full: 130 },
      description: "Aromatic rice dish with green peas, whole spices and saffron",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop"
    },
    { 
      name: "VEG BIRYANI", 
      price: { full: 160 },
      description: "Layered rice with mixed vegetables, herbs and traditional biryani spices",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop"
    },
    { 
      name: "CHICKEN BIRYANI", 
      price: { full: 200 },
      description: "Classic Hyderabadi style biryani with tender chicken and fragrant basmati rice",
      image: "https://images.unsplash.com/photo-1563379091339-03246963d51a?w=300&h=200&fit=crop"
    }
  ],
  "BREAD'S": [
    { name: "TANDOORI ROTI/BUTTER ROTI", price: { full: 15 } },
    { name: "LACCHA PARANTHA", price: { full: 25 } },
    { name: "BUTTER NAAN", price: { full: 40 } },
    { name: "PLAIN NAAN", price: { full: 30 } },
    { name: "KEEMA NAAN", price: { full: 70 } },
    { name: "GARLIC NAAN", price: { full: 50 } },
    { name: "ROOMALI ROTI", price: { full: 10 } },
    { name: "PANEER PARANTHA", price: { full: 60 } },
    { name: "ALOO PARANTHA", price: { full: 50 } },
    { name: "ONION PARANTHA", price: { full: 50 } },
    { name: "PUDINA PARANTHA", price: { full: 40 } },
    { name: "PUDINA NAAN", price: { full: 50 } },
    { name: "KEEMA PARANTHA", price: { full: 70 } },
    { name: "GREEN CHILLI PARANTHA", price: { full: 40 } },
    { name: "LAL MIRCH PARANTHA", price: { full: 40 } },
    { name: "MISSI ROTI", price: { full: 40 } },
    { name: "KHAMERI ROTI", price: { full: 30 } }
  ],
  "PURE VEG": [
    { name: "DAL MAKHANI", price: { full: 160 } },
    { name: "DAL TADKA", price: { full: 140 } },
    { name: "SHAHI PANEER", price: { full: 199 } },
    { name: "KADAI PANEER", price: { full: 199 } },
    { name: "PANEER LABABDAR", price: { full: 199 } },
    { name: "PANEER PASANDA", price: { full: 199 } },
    { name: "HANDI SPL PANEER", price: { full: 199 } },
    { name: "MUTOR MUSHROOM", price: { full: 199 } },
    { name: "KADAI SOYA CHAP", price: { full: 199 } },
    { name: "TAWA SOYA CHAP", price: { full: 199 } },
    { name: "MIXED VEG", price: { full: 199 } },
    { name: "MALAI KOFTA", price: { full: 199 } },
    { name: "MUTTER PANEER", price: { full: 199 } },
    { name: "PANEER DO PYAZA", price: { full: 199 } },
    { name: "PANEER BUTTER MASALA", price: { full: 199 } },
    { name: "PANEER TIKKA MASALA", price: { full: 160 } },
    { name: "PALAK PANEERCHANA MASALA", price: { full: 160, seasonal: true } },
    { name: "AALOO GOBI", price: { full: 160 } },
    { name: "JEERA AALOO", price: { full: 160 } }
  ],
  "VEG STATERS": [
    { name: "PANEER TIKKA", price: { full: 180, half: 100 } },
    { name: "PANEER MALAI TIKKA", price: { full: 199, half: 110 } },
    { name: "MUSHROOM TIKKA", price: { full: 180, half: 90 } },
    { name: "MUSHROOM MALAI TIKKA", price: { full: 199, half: 90 } },
    { name: "SOYA MALAI CHAP", price: { full: 160 } },
    { name: "SOYA TANDOORI CHAP", price: { full: 160 } },
    { name: "SOYA PUDINA CHAP", price: { full: 160 } },
    { name: "HARA BHARA KABAB", price: { full: 160 } },
    { name: "BHARWA AALOO", price: { full: 180 } }
  ],
  "RAITA": [
    { name: "BOONDI", price: { half: 100 } },
    { name: "CUCUMBER", price: { half: 100 } },
    { name: "MIX VEG.", price: { half: 100 } }
  ]
};

export default menuData;