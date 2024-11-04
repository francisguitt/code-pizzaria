"use client"
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { IconCircleArrowLeftFilled, IconMinus, IconPlus, IconShoppingCartCopy, IconShoppingCartX } from "@tabler/icons-react";

const CartItems = () => {
    const [cart, setCart] = useState<any[]>([]);
    const [total, setTotal] = useState(0);
    const [fields, setFields] = useState({
        name: "",
        lastName: "",
        phone: "",
        street: "",
        neighborhood: "",
        number: ""
    });

    useEffect(() => {
        const storadCat = localStorage.getItem('cart');
        if (storadCat) {
            setCart(JSON.parse(storadCat));
        }
    }, []);


    useEffect(() => {
        const newTotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setTotal(newTotal)
    }, [cart]);

    const handleIncrement = (id: number) => {
        const updateCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity + 1 } : item);
        setCart(updateCart);
        localStorage.setItem('cart', JSON.stringify(updateCart));
    }

    const handleDecrement = (id: number) => {
        const existingProduct = cart.find(item => item.id === id);
        if (existingProduct && existingProduct.quantity > 1) {
            const updateCart = cart.map(item => item.id === id ? { ...item, quantity: item.quantity - 1 } : item);
            setCart(updateCart);
            localStorage.setItem('cart', JSON.stringify(updateCart));

        } else if (existingProduct && existingProduct.quantity === 1) {
            const updateCart = cart.filter(item => item.id !== id);
            setCart(updateCart);
            localStorage.setItem('cart', JSON.stringify(updateCart));
        }
    }

    const isOpen = () => {
        const currentHour = new Date().getHours();
        return currentHour >= 18 && currentHour < 24;
    }
    const handleWhatsOrderApp = () => {
        if (!isOpen()) {
            alert("Fechado no momento. estamos abertos de segunda a domingo  das 18:00 às 00:00");
            return;
        }

        if (!fields.name || !fields.lastName || !fields.street || !fields.neighborhood || !fields.number || !fields.phone) {
            alert("Por favor prencha todos os campos");
            return;
        }

        const orderMessage = cart.map(item => `${item.quantity} ${item.name}, `).join('\n');
        const fieldsMessage = `Nome: ${fields.name}, Sobre Nome: ${fields.lastName}, Whatsapp: ${fields.phone},
         Endereço: ${fields.street} , Número: ${fields.number}, Bairro: ${fields.neighborhood}`
        const customerMessage = `Pedido:\n${orderMessage}\nTotal R$: ${total.toFixed(2)} \n${fieldsMessage}`;

        const whatsappUrl = `https://wa.me/999999999?text=${encodeURIComponent(customerMessage)}`
        window.location.href = whatsappUrl;
    }

    const router = useRouter();
    const backToHome = () => {
        router.push("/");
    }


    return (
        <div>
            <div className="flex items-center bg-orange-400 w-full p-5">
                <button onClick={backToHome} className="ml-2 text-left">
                    <IconCircleArrowLeftFilled size={32} color="white" stroke={2} />
                    <p className="text-zinc-700">voltar</p>
                </button>
                <div className="flex items-center gap-6 md: mx-auto">
                    <IconShoppingCartCopy size={40} color="#ffdd" />
                    <h1 className="font-bold text-2xl text-zinc-700">Meu Carrinho</h1>
                </div>
            </div>
            {cart.length === 0 ? (
                <div className="flex flex-col justify-center items-center w-full h-screen mx-auto">
                    <p className="font-bold text-lg mb-10 text-zinc-700">Seu carrinho está vazio</p>
                    <IconShoppingCartX size={200} stroke={1} color="gray" />
                </div>
            ) : (
                <div className="space-y-6">
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center
                         justify-around
                         py-6 px-6 border-b rounded-md hover:bg-zinc-50 duration-75 transition-colors">
                            <img src={item.image} width={100} alt={item.name} />
                            <div className="flex flex-col items-center ml-3">
                                <span className="text-center text-zinc-700 font-bold">{item.name} ( Qti:{item.quantity} )</span>
                                <span className="text-red-400 font-bold">R$ {(item.price * item.quantity).toFixed(2)}</span>
                                <div className="gap-2 flex  justify-around items-center bg-zinc-300 rounded-full">
                                    <button onClick={() => handleDecrement(item.id)} className="w-[40px] pl-2">
                                        <IconMinus size={20} stroke={1} color="blue" />
                                    </button>

                                    <span className="text-white">|</span>
                                    <button onClick={() => handleIncrement(item.id)} className="w-[40px] pl-2 mr-1 bg-green-200 rounded-full ">
                                        <IconPlus size={20} stroke={1} color="red" />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                    <div className="mb-6 ml-4 mr-4">
                        <h2 className="font-bold text-lg text-zinc-700">Dados de Entrega</h2>

                        <input type="text"
                            placeholder="Nome"
                            value={fields.name}
                            onChange={(e) => setFields({ ...fields, name: e.target.value })}
                            className="border p-2 w-full mb-2"
                        />
                        <input type="text"
                            placeholder="Sobre Nome"
                            value={fields.lastName}
                            onChange={(e) => setFields({ ...fields, lastName: e.target.value })}
                            className="border p-2 w-full mb-2" />

                        <input type="number"
                            placeholder="Telefone"
                            value={fields.phone}
                            onChange={(e) => setFields({ ...fields, phone: e.target.value })}
                            className="border p-2 w-full mb-2" />
                        <input
                            type="text"
                            placeholder="Rua"
                            value={fields.street}
                            onChange={(e) => setFields({ ...fields, street: e.target.value })}
                            className="border p-2 w-full mb-2" />

                        <input type="number"
                            placeholder="Número"
                            value={fields.number}
                            onChange={(e) => setFields({ ...fields, number: e.target.value })}
                            className="border p-2 w-full mb-2" />

                        <input type="text"
                            placeholder="Bairro"
                            value={fields.neighborhood}
                            onChange={(e) => setFields({ ...fields, neighborhood: e.target.value })}
                            className="border p-2 w-full mb-2" />
                    </div>
                    <div className="text-center">
                        <p className="font-bold  text-lg text-zinc-700">Total: R$ {total.toFixed(2)}</p>
                        <button onClick={handleWhatsOrderApp} className="bg-green-500 text-white px-4 py-2 rounded-lg mt-4 mb-7">
                            Finalizar Pedido
                        </button>
                    </div>
                </div>
            )}

        </div>
    )
}
export default CartItems;