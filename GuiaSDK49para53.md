# Como atualizar a ATV_04_DDMII-PAMII da SDK 49 para 53

## Pré-requisitos

Antes de começar, certifique-se de ter instalado em sua máquina:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

```bash
npm install -g @expo/cli
```

## Começando o guia

1. Clone o repositório [ATV_04_DDMII-PAMII](https://github.com/profjacques/ATV_04_DDMII-PAMII) do profjaques

    ```bash
    git clone https://github.com/profjacques/ATV_04_DDMII-PAMII
    cd ATV_04_DDMII-PAMII
    ```

2. Instale as dependências

    ```bash
    npm install
    # ou
    yarn
    ```

3. Atualize o expo usando a `@expo/cli`

    ```bash
    expo upgrade
    ```

4. Retire `"react-test-renderer": "18.2.0",` do `package.json` pois ele apresenta um conflito com o React 19.0.0

    ```js
    {
        "devDependencies"{
            "react-test-renderer": "18.2.0"
            // delete a linha a cima
        }
    }
    ```

5. Reinstale as dependências

    ```bash
    npm install
    # ou
    yarn
    ```

6. Atualize e Conserte as dependências

    ```bash
    npx expo install --fix
    # corrige dependencias imcompativeis
    ```

7. Atualize o `app.json`

    ```js
    {
        "expo": {
            // adicione a seção entre os comentários
            "sdkVersion": "53.0.0" , 
            "runtimeVersion" : {
                "policy": "sdkVersion"
            },
            "newArchEnabled": false,
            // 
        }
    }
    ```

8. Atualize o `metro.config.js` como dito nas [Docs](https://docs.expo.dev/versions/v53.0.0/config/metro/#packagejsonexports) no ultimo codeblock da parte de package.json:exports

    ```js
    // não usar o inexistente package.json:exports
    config.resolver.unstable_enablePackageExports = false;

    // adicione a linha acima
    module.exports = withNativeWind(config, { input: './global.css' })
    ```

9. Atualize `babel.config.js`

    ```js
    module.exports = function (api) {
      api.cache(true);
      return {
        presets: [
          ["babel-preset-expo", { jsxImportSource: "nativewind" }],
          "nativewind/babel",
        ],
        plugins: [
          // Required for expo-router
          // 'expo-router/babel' está desatualizado e é preferido usar "babel-preset-expo"
          // 'expo-router/babel',
          "react-native-reanimated/plugin"
        ],
      };
    };
    ```

10. Configure o Firebase:

    - Crie um projeto no [Firebase Console](https://console.firebase.google.com/)
    - Adicione uma aplicação web ao seu projeto
    - Na visão geral do projeto, crie a Authentication e Cloud Firestore do projeto
    - Copie as credenciais de configuração
    - Crie um arquivo `.env` na raiz do projeto:

    ```.env
    EXPO_PUBLIC_FIREBASE_API_KEY=sua_api_key
    EXPO_PUBLIC_FIREBASE_AUTH_DOMAIN=seu_projeto.firebaseapp.com
    EXPO_PUBLIC_FIREBASE_PROJECT_ID=seu_projeto_id
    EXPO_PUBLIC_FIREBASE_STORAGE_BUCKET=seu_projeto.appspot.com
    EXPO_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=123456789
    EXPO_PUBLIC_FIREBASE_APP_ID=1:123456789:web:abcdef
    EXPO_PUBLIC_FIREBASE_MEASUREMENT_ID=A-BCDEF1234
    ```

11. E então execute o projeto

    ```bash
    npx expo start
    # ou
    yarn expo start
    ```


Creio que esses foram todos os passos que eu para atualizar diretamente do SDK 49 para o 53

Também rodei `npx expo-doctor` algumas vezes mas creio não ser estritamente necessário

Em grande parte o que o Jacques instruiu na atividade no teams foi o suficiente

E também o projeto simplesmente não usa a nova arquitetura do React

mas é isso

Valeu ^^
