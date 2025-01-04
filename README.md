IA.Dieta NutriFácil AI, que está conectado à IA do Google Gemini, tem como objetivo fornecer sugestões personalizadas de dieta e prática esportiva com base nos dados fornecidos pelos usuários. Aqui está um resumo detalhado do que ele faz:

Funcionalidades principais:
Entrada de Dados pelo Usuário:

O usuário fornece informações sobre seu perfil, como idade, peso, altura, nível de atividade física, preferências alimentares e objetivos (emagrecer, manter peso, ganhar massa, etc.).
Integração com a IA do Google Gemini:

A IA do Google Gemini processa os dados fornecidos e utiliza algoritmos avançados para gerar recomendações personalizadas.
Isso inclui uma dieta adequada ao objetivo do usuário e sugestões de exercícios físicos que podem ser feitos para atingir esse objetivo.
Sugestões de Dieta:

A IA sugere um plano alimentar adaptado às necessidades nutricionais do usuário, com base em seu objetivo (perda de peso, ganho de massa muscular, etc.), tipo de metabolismo e preferências alimentares (vegetariano, vegano, low carb, etc.).
Plano de Exercícios:

Além da dieta, o aplicativo sugere atividades físicas adequadas ao nível de fitness e preferências do usuário, como exercícios de musculação, aeróbicos, yoga, etc.
A IA também pode adaptar o plano de exercícios com base no progresso do usuário ou na integração com outros dispositivos ou aplicativos de monitoramento de saúde.
Acompanhamento e Ajustes:

O aplicativo pode monitorar o progresso do usuário, como alterações de peso, medidas corporais e desempenho nas atividades físicas.
Caso o progresso não esteja dentro das expectativas, a IA ajusta automaticamente as sugestões de dieta e treino.
Benefícios:
Personalização: As sugestões são feitas especificamente para o perfil e objetivo do usuário, garantindo maior eficácia.
Facilidade de Uso: O usuário não precisa ser um especialista em nutrição ou treinamento físico para seguir as recomendações, pois tudo é personalizado pela IA.
Integração Inteligente: A IA do Google Gemini garante que as sugestões sejam sempre baseadas nas melhores práticas e nas últimas evidências científicas.
Resumo:
O NutriFácil AI é um assistente inteligente de saúde e bem-estar, proporcionando recomendações de dieta e exercícios personalizadas com base nos dados fornecidos pelo usuário, utilizando a IA do Google Gemini para gerar as melhores sugestões possíveis para cada perfil.

Tecnologias Utilizadas
Fastify: Framework web rápido e com baixo overhead.
TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.
dotenv: Para gerenciar variáveis de ambiente.
CORS: Para permitir requisições de diferentes origens.
Google Generative AI: API do Google para integrar IA generativa.
tsx: Para executar e compilar arquivos TypeScript diretamente.
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/lean123456lean/IA.Dieta.git
Navegue até a pasta do backend:

bash
Copiar código
cd IA.Dieta/backend
Instale as dependências:

bash
Copiar código
npm install
Scripts
dev
Executa o servidor em modo de desenvolvimento, monitorando as alterações em tempo real:

bash
Copiar código
npm run dev
Isso irá iniciar o servidor Fastify em modo de desenvolvimento, recompilando o código TypeScript sempre que houver modificações nos arquivos.

Estrutura do Projeto
css
Copiar código
backend/
├── src/
│   ├── controllers/
│   ├── routes.ts
│   ├── server.ts
│   └── services/
├── .gitignore
├── package.json
└── tsconfig.json
src/controllers/: Contém os arquivos responsáveis pela lógica de controle das rotas.
src/routes.ts: Define as rotas da API.
src/server.ts: Inicia o servidor Fastify e configura o ambiente.
src/services/: Contém a lógica de serviços, como integração com a IA generativa do Google.
Dependências
@fastify/cors: Middleware para lidar com CORS.
@google/generative-ai: Biblioteca para integrar a IA generativa do Google.
cors: Outro pacote CORS como alternativa.
dotenv: Para carregamento de variáveis de ambiente a partir de arquivos .env.
fastify: Framework web.
tsx: Utilitário para rodar arquivos TypeScript diretamente.
Contribuindo
Sinta-se à vontade para contribuir para o projeto. Para começar, faça um fork do repositório, crie uma branch para suas alterações e submeta um Pull Request.

Frontend - IA.Dieta (React Native)
Agora, para o frontend, podemos criar uma documentação similar, com informações sobre a instalação e configuração para o seu aplicativo React Native.

IA.Dieta - Frontend
Este é o frontend da aplicação IA.Dieta, desenvolvido com React Native para dispositivos móveis. Ele interage com o backend para fornecer uma interface de usuário interativa para a gestão de dieta e nutrição.

Tecnologias Utilizadas
React Native: Framework para criar aplicativos móveis nativos.
React Navigation: Biblioteca para gerenciar navegação no app.
Axios: Para realizar requisições HTTP ao backend.
TypeScript: Linguagem de programação que adiciona tipagem estática ao JavaScript.
Expo: Plataforma e conjunto de ferramentas para React Native.
Instalação
Clone o repositório:

bash
Copiar código
git clone https://github.com/lean123456lean/IA.Dieta.git
Navegue até a pasta do frontend (React Native):

bash
Copiar código
cd IA.Dieta/mobile
Instale as dependências:

bash
Copiar código
npm install
Se você não tiver o Expo instalado, instale-o globalmente:

bash
Copiar código
npm install -g expo-cli
Para rodar o aplicativo, use o seguinte comando:

bash
Copiar código
expo start
Isso irá iniciar o aplicativo no emulador ou dispositivo físico com o Expo.

Estrutura do Projeto
go
Copiar código
mobile/
├── app/
│   ├── components/
│   ├── constants/
│   ├── screens/
│   ├── services/
│   └── assets/
├── .gitignore
├── app.json
└── package.json
app/components/: Contém componentes reutilizáveis do React Native, como botões, campos de texto e cabeçalhos.
app/screens/: Contém as telas principais do aplicativo.
app/services/: Contém serviços para comunicação com o backend e outras funcionalidades.
app/assets/: Contém os recursos de mídia (imagens, fontes, etc.) usados no aplicativo.
Dependências
react-native: Framework para desenvolvimento de apps móveis nativos.
react-navigation: Biblioteca para navegação no React Native.
axios: Para realizar requisições HTTP.
expo: Plataforma para desenvolvimento e distribuição de apps React Native.

typescript: Para adicionar tipagem estática ao projeto.

Contribuindo
Sinta-se à vontade para contribuir para o projeto. Para começar, faça um fork do repositório, crie uma branch para suas alterações e submeta um Pull Request.


# Demonstração do Aplicativo

Confira a demonstração do aplicativo no YouTube:

[Assista ao vídeo de demonstração](https://youtube.com/shorts/fQj85F_d2QI?feature=share)

# Demonstração do Aplicativo

Veja a imagem abaixo:

![Descrição da imagem](![WhatsApp Image 2024-12-20 at 08 54 30](https://github.com/user-attachments/assets/061bd1b8-e2b6-4b0d-b49d-4d33d20d21b2)
)
