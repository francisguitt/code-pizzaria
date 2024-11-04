interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    image: string
}

const dataProducts:Product[] = [
    {
        "id": 1,
        "name": "Pizza Margherita",
        "description": "Pizza com molho de tomate, queijo mussarela e manjericão fresco.",
        "price": 29.90,
        "image": "/pizza-margherita.png"
    },
    {
        "id": 2,
        "name": "Pizza Pepperoni",
        "description": "Pizza com molho de tomate, queijo mussarela e pepperoni.",
        "price": 34.90,
        "image": "/pizza-pepperoni.png"
    },
    {
        "id": 3,
        "name": "Pizza Quatro Queijos",
        "description": "Pizza com mussarela, parmesão, gorgonzola e catupiry.",
        "price": 39.90,
        "image": "/pizza-quatroqueijo.png"
    },

    {
        "id": 4,
        "name": "Pizza Frango com Catupiry",
        "description": "Pizza de frango desfiado com catupiry e orégano.",
        "price": 37.00,
        "image": "/pizza-cartupiry.png"
    },
    {
        "id": 5,
        "name": "Pizza Calabresa",
        "description": "Pizza com molho de tomate, calabresa, cebola e azeitonas.",
        "price": 32.50,
        "image": "/pizza-calabresa.png"
    },
    {
        "id": 6,
        "name": "Pizza Portuguesa",
        "description": "Pizza com presunto, ovos, cebola, azeitonas e ervilhas.",
        "price": 35.00,
        "image": "/pizza-portuguesa.png"
    },
    {
        "id": 7,
        "name": "Pizza Napolitana",
        "description": "Pizza com molho de tomate, queijo mussarela, tomate fresco e orégano.",
        "price": 31.90,
        "image": "/pizza-Napolitana.png"
    },
    {
        "id": 8,
        "name": "Pizza Vegetariana",
        "description": "Pizza com abobrinha, berinjela, tomate seco e queijo mussarela.",
        "price": 36.00,
        "image": "/pizza-vegetariana.png"
    },
    {
        "id": 9,
        "name": "Pizza de Atum",
        "description": "Pizza com molho de tomate, atum, cebola e azeitonas.",
        "price": 38.50,
        "image": "/pizza-atum.png"
    },
    {
        "id": 10,
        "name": "Pizza de Bacon",
        "description": "Pizza com molho de tomate, bacon crocante e queijo mussarela.",
        "price": 40.00,
        "image": "/pizza-bacon.png"
    },
    {
        "id": 11,
        "name": "Coca-Cola Lata",
        "description": "Refrigerante Coca-Cola, lata 350ml, gelada e refrescante.",
        "price": 6.50,
        "image": "/coca-cola-lata.png"
    },
    {
        "id": 12,
        "name": "Guaraná Antarctica Lata",
        "description": "Refrigerante Guaraná Antarctica, lata 350ml.",
        "price": 6.50,
        "image": "/guarana-antartida.png"
    },
    {
        "id": 13,
        "name": "Sprite Lata",
        "description": "Refrigerante Sprite, lata 350ml, leve e refrescante.",
        "price": 6.50,
        "image": "/sprite.png"
    },
    {
        "id": 14,
        "name": "Fanta Laranja Lata",
        "description": "Refrigerante Fanta Laranja, lata 350ml, sabor intenso.",
        "price": 6.50,
        "image": "/fanta-lata.png"
    },
    {
        "id": 15,
        "name": "Fanta Uva Lata",
        "description": "Refrigerante Fanta Uva, lata 350ml, refrescante.",
        "price": 6.50,
        "image": "fanta-uva.png"
    }
]

export default dataProducts;