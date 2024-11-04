+# Code Pizzaria 🍕

Code Pizzaria é um projeto de cardápio online desenvolvido para uma pizzaria. Os clientes podem visualizar o menu, adicionar itens ao carrinho e enviar o pedido diretamente para o WhatsApp da pizzaria. Este projeto foi criado com **Next.js 14**, **TypeScript**, e **Tailwind CSS**.

## 📋 Funcionalidades

- **Exibição do Menu**: Lista de pizzas e bebidas disponíveis, com nome, descrição e preço de cada item.
- **Carrinho de Compras**: Possibilidade de adicionar e remover itens do carrinho e ver o valor total.
- **Pedido via WhatsApp**: O usuário pode revisar o pedido no carrinho e enviá-lo diretamente para o WhatsApp da pizzaria para finalizar a compra.

## 🚀 Tecnologias Utilizadas

- **Next.js 14**: Framework para construção de aplicações React com renderização otimizada.
- **TypeScript**: Suporte para tipagem estática, melhorando a qualidade e manutenção do código.
- **Tailwind CSS**: Biblioteca de utilitários CSS para estilização rápida e personalizada da interface.

## 📦 Instalação e Execução

1. Clone o repositório:

   git clone https://github.com/francisguitt/code-pizzaria.git
   cd code-pizzaria
   
Instale as dependências:


npm install
Execute o projeto:

npm run dev
Abra o navegador e acesse http://localhost:3000 para visualizar o projeto.

📱 Funcionalidade de Pedido via WhatsApp
No carrinho, após adicionar os itens desejados, o usuário pode clicar no botão "Enviar Pedido". Esse botão gera uma mensagem automática com o resumo do pedido e abre o WhatsApp para envio.

📂 Estrutura de Pastas

code-pizzaria/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   └── page.tsx
│   │   ├── cart/
│   │   │   └── page.jsx
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── components/
│   │   ├── CartButton.tsx
│   │   ├── CartItems.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   └── MenuItems.tsx
└── public/
           

🤝 Contribuição
Sinta-se à vontade para contribuir! Faça um fork do projeto, crie uma branch para suas alterações, e envie um pull request.

📄 Licença
Este projeto é distribuído sob a licença MIT. Consulte o arquivo LICENSE para obter mais informações.

📹 [Assista ao vídeo no YouTube](https://youtu.be/caosZSt2BuI?si=N72jfHluk2g713vh)
