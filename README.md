Meu Querido App – Componentes React Native com Expo<br>

Este é um projeto desenvolvido em React Native utilizando o Expo, com o objetivo de demonstrar o uso dos principais componentes nativos da tecnologia. O projeto faz parte de uma atividade prática da disciplina de Progamação de App, onde foi proposto criar uma aplicação funcional e organizada, com base no app “Hello” do tutorial inicial.<br>

A aplicação inclui uma interface simples e moderna, com abas e navegação implementadas via expo-router. Em uma das abas, o usuário encontra exemplos reais de componentes como View, Text, TextInput, Modal, Button, Switch, FlatList, entre outros — todos integrados de forma visual, clara e interativa.<br>

🛠 Tecnologias Utilizadas<br>
✔ React Native (com Expo)<br>
✔ Typescript<br>
✔ Navegação com expo-router<br>
✔ Estilização com StyleSheet<br>
✔ Interface responsiva<br>

📌 Funcionalidades Demonstradas<br>
✔ View e Text: Estrutura e exibição de textos<br>
✔ TextInput e Alert: Entrada de dados e alertas dinâmicos<br>
✔ Modal: Janelas de sobreposição para informações extras<br>
✔ Image: Exibição de imagem local<br>
✔ ActivityIndicator: Indicador visual de carregamento<br>
✔ FlatList e SectionList: Listagens organizadas e otimizadas<br>
✔ ScrollView: Rolagem de conteúdo longo<br>
✔ Switch: Controle de ativação/desativação<br>
✔ TouchableOpacity: Botões interativos com estilo<br>
✔ StatusBar: Customização da barra de status<br>
✔ SafeAreaView: Garantia de visualização adequada em todos os dispositivos<br>

📖 Minha Experiência
Este projeto foi muito importante para consolidar meu conhecimento prático em React Native. Após seguir o tutorial “Hello React Native”, me senti motivado a expandir a aplicação, criando uma aba com todos os principais componentes que a tecnologia oferece.

Durante o processo, aprendi não só sobre os componentes em si, mas também sobre boas práticas de organização de código, navegação com Expo Router, controle de estados com hooks e melhorias de layout com base em feedbacks.

A estilização foi pensada com cuidado para manter a usabilidade e o design agradáveis. Mesmo com os desafios iniciais, principalmente com listas aninhadas e modais, consegui entender como estruturar melhor a aplicação para evitar erros e deixar a navegação fluida.

Foi uma experiência leve, mas rica tecnicamente, e que certamente será a base para projetos mais robustos no futuro.

🔍 Informações sobre o projeto
O código está disponível neste repositório, com comentários claros e estrutura organizada. O projeto roda tanto em emuladores Android quanto via Expo Go, facilitando os testes em dispositivos reais. Não requer backend, banco de dados ou autenticação — o foco está 100% na exibição e comportamento dos componentes nativos.

Aqui vai uma explicação de todos os componentes utilizados: 

📘 1. View
✅ O que é: Um dos componentes mais básicos do React Native. Ele representa uma área de layout para agrupar outros componentes.

📌 Para que serve: Criar blocos de layout, como se fossem "divs" no HTML.

📍 No código: Usamos View para criar os cards, modais, e containers de layout.

Exemplo:

```<View style={styles.card}>...</View> -->```<br>
```<View style={styles.modalView}>...</View>```

📘 2. Text
✅ O que é: Componente utilizado para exibir textos.

📌 Para que serve: Mostrar qualquer tipo de texto na tela (título, parágrafo, legenda, etc).

📍 No código: Usado para títulos, conteúdos de listas, textos dentro dos botões e modais.

Exemplo: 

```<Text style={styles.title}>Componentes do React Native</Text>```<br>
```<Text>Olá, este é um modal!</Text>```

📘 3. TextInput
✅ O que é: Um campo de texto que permite entrada do usuário.

📌 Para que serve: Capturar informações digitadas, como nome, senha, etc.

📍 No código: Campo para digitar texto e usar no alerta.

Exemplo:

```<TextInput```<br>
  ```  placeholder="Digite algo..."```<br>
  ```  value={text}```<br>
  ```  onChangeText={setText}```<br>
```/>```

📘 4. Button
✅ O que é: Um botão padrão e simples.

📌 Para que serve: Executar ações, como abrir modal, exibir alerta, iniciar carregamento.

📍 No código: Vários botões para abrir modal, mostrar alerta, etc.

Exemplo:

```<Button title="Mostrar Alerta" onPress={...} />```

📘 5. Alert
✅ O que é: Um sistema de alerta/modal nativo do sistema operacional.

📌 Para que serve: Exibir mensagens importantes ao usuário.

📍 No código: Quando clicamos no botão "Mostrar Alerta".

Exemplo: 

```Alert.alert('Alerta', `Você digitou: ${text}`)```

📘 6. Image
✅ O que é: Componente para exibir imagens.

📌 Para que serve: Mostrar logos, fotos, banners, etc.

📍 No código: Mostramos o ícone do app (imagem local).

Exemplo: 

```<Image source={require('@assets/Images/icon.png')} style={styles.image} />```

📘 7. Modal
✅ O que é: Uma janela de sobreposição (como um pop-up).

📌 Para que serve: Mostrar informações secundárias ou interações extras.

📍 No código: Abre ao clicar no botão “Abrir Modal”.

Exemplo: 

```<Modal visible={modalVisible} animationType="slide">```<br>
  ```  <View style={styles.modalView}>```

📘 8. ActivityIndicator
✅ O que é: Um "loader" ou indicador de carregamento.

📌 Para que serve: Mostrar que uma ação está sendo processada.

📍 No código: É exibido quando clicamos no botão “Mostrar Loader”.

Exemplo: 

```<ActivityIndicator size="large" color="#0000ff" />```

📘 9. FlatList
✅ O que é: Lista otimizada para rolagem vertical com muitos itens.

📌 Para que serve: Exibir dados em lista, como cards de produtos ou posts.

📍 No código: Lista simples com nomes como "React", "Native", etc.

Exemplo: 

```<FlatList data={items} ... />```

📘 10. SafeAreaView
✅ O que é: Uma View que respeita as áreas seguras (notch, barra de status, etc).

📌 Para que serve: Evitar que conteúdo fique por baixo de elementos do sistema.

📍 No código: Envolve toda a tela para garantir boa exibição.

Exemplo: 

```<SafeAreaView style={styles.container}>```

📘 11. ScrollView
✅ O que é: Container que permite rolagem vertical ou horizontal.

📌 Para que serve: Colocar conteúdo que pode ultrapassar a altura da tela.

📍 No código: Envolve todos os cards com rolagem vertical.

Exemplo:

```<ScrollView>```<br>
  ```  {/* conteúdo rolável */}```<br>
```</ScrollView>```

📘 12. SectionList
✅ O que é: Lista com agrupamento por seções e cabeçalhos.

📌 Para que serve: Exibir dados com categorias, como “A-Z” ou “Hoje / Ontem”.

📍 No código: Lista com seções “Linguagens” e “Frameworks”.

Exemplo: 

```<SectionList sections={sections} ... />```

📘 13. StatusBar
✅ O que é: Permite controlar a aparência da barra de status do dispositivo.

📌 Para que serve: Mudar cor do texto, fundo, e estilo da barra superior.

📍 No código: Define o estilo da barra de status no início da tela.

Exemplo:

```<StatusBar barStyle="dark-content" />```

📘 14. Switch
✅ O que é: Um botão de alternância (liga/desliga).

📌 Para que serve: Usado em configurações e preferências.

📍 No código: Alterna entre “Ligado” e “Desligado”.

Exemplo: 

```<Switch value={switchOn} onValueChange={setSwitchOn} />```

📘 15. TouchableOpacity
✅ O que é: Um botão customizável com efeito de opacidade ao toque.

📌 Para que serve: Criar botões estilizados ou interações mais visuais.

📍 No código: Botão azul com texto “Toque Aqui”.

Exemplo: 

```<TouchableOpacity onPress={() => Alert.alert('Você tocou!')}>```<br>
  ```  <Text style={styles.touchableText}>Toque Aqui</Text>```<br>
```</TouchableOpacity>```
