# Chat Firebase

Uma aplicação móvel desenvolvida com React Native, Expo, Firebase e NativeWind.
(Agradeço ao Jacques pelas instruções de como fazer a atividade)

## Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **Firebase** - Backend as a Service (autenticação, banco de dados, armazenamento)
- **NativeWind** - Framework CSS utilitário para React Native

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

```bash
npm install -g expo/cli
```

## Instalação

1. **Clone o repositório**

    ```bash
    git clone https://github.com/Twiiggg/chatFirebase49to53
    cd chatFirebase49to53
    ```

2. **Instale as dependências**

  ```bash
  npm install
  # ou
  yarn install
  ```

## Configuração

### Firebase

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
2. Adicione uma aplicação web ao seu projeto
3. Na visão geral do projeto, crie a Authentication e Cloud Firestore do projeto
4. Copie as credenciais de configuração
5. Crie um arquivo `.env` na raiz do projeto:

```.env
EXPO_PUBLIC_FIREBASE_API_KEY=sua_api_key
EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
EXPO_PUBLIC_FIREBASE_PROJECT_ID=seu_projeto_id
EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
EXPO_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
```

Se faz isso para *não* ter que colocar seus dados do Firebase

Porém, caso o `.env` não funcionar, delete o `.env` e edite diretamente o `firebaseConfig.js`

```js
const firebaseConfig = {
apiKey: "sua_api_key",
authDomain: "seu_projeto.firebaseapp.com",
projectId: "seu_projeto_id",
storageBucket: "seu_projeto.appspot.com",
messagingSenderId: "123456789",
appId: "1:123456789:web:abcdef"
};
```

## Executando o projeto

1. **Inicie o servidor de desenvolvimento**

    ```bash
    npx expo start
    # ou
    yarn expo start
    ```

2. **Execute no dispositivo/emulador**

- Para Android: Pressione `a` no terminal ou escaneie o QR code com o app Expo Go
- Para iOS: Pressione `i` no terminal ou escaneie o QR code com a câmera do iPhone

## Funcionalidades Firebase

- **Autenticação**: Login/registro de usuários
- **Firestore**: Banco de dados NoSQL

## Estilização com NativeWind

Este projeto utiliza NativeWind para estilização, que permite usar classes do Tailwind CSS diretamente nos componentes React Native:

```jsx
<View className="flex-1 justify-center items-center bg-blue-500">
<Text className="text-white text-xl font-bold">
Hello NativeWind!
</Text>
</View>
```
