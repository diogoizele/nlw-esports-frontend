# NLW - eSports 🕹

## Frontend 🎑

### Instalação 🎠

```bash
# Clone este repositório
$ git clone

# Acesse a pasta do projeto no terminal/cmd

# Instale as dependências
$ npm install

# Execute a aplicação em modo de desenvolvimento
$ npm run dev

# O servidor inciará na porta:3000 - acesse http://localhost:3000
```

### Aprendizados 🐱‍💻

#### [Aula - 2]:

- Utilização da pasta `public` para obter acesso aos arquivos de dentro dos componentes React, através do `path`;
- Instalação e configuração da biblioteca **Tailwind CSS**;

  - `npm install -D tailwindcss postcss autoprefixer`;
  - `npx tailwindcss init -p` a flag -p cria o arquivo de configuração `postcss.config.cjs`;
  - Para configurar os arquivos que serão visíveis pelo Tailwindcss, altere `content: ["./src/**/*.tsx"]` em `tailwind.config.cjs`;
  - Crie um arquivo `main.css` e importe-o em `main.tsx`:

    - Conteúdo do arquivo:

    ```CSS
     @tailwind base;
     @tailwind components;
     @tailwind utilities;
    ```

#### [Aula - 4]:

- Bibliotecas de components que suportam acessibilidade (Trabalham com as propriedades de aria das tags):
  - Headless;
  - Ariakit;
  - Radix;

#### [Aula - 5]:

- KeenSlider - Biblioteca para carrossél
