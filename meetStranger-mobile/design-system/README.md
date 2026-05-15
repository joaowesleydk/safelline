# MeetStranger Design System

## 🎨 Visão Geral

O MeetStranger Design System é um sistema de design completo focado em comunicação anônima, simplicidade e privacidade. Desenvolvido especificamente para aplicações React Native com Expo e TypeScript.

## 🎯 Princípios

- **Minimalista**: Interface limpa e sem distrações
- **Alto contraste**: Legibilidade otimizada para longas conversas
- **Foco em leitura**: Tipografia e espaçamento otimizados para chat
- **Feedback visual sutil**: Animações leves e não intrusivas
- **Privacidade**: Cores e elementos que transmitem segurança
- **Conforto**: Interface adequada para uso prolongado

## 📁 Estrutura

```
design-system/
├── tokens/
│   ├── colors.ts          # Tokens de cores (light/dark)
│   ├── typography.ts      # Tipografia e text styles
│   └── spacing.ts         # Espaçamentos, bordas e sombras
├── components/
│   ├── Button.tsx         # Componente de botão
│   ├── Input.tsx          # Componente de input
│   ├── Card.tsx           # Componente de card
│   └── ChatBubble.tsx     # Componente de mensagem
├── animations/
│   ├── fade.ts            # Animações de fade
│   ├── slide.ts           # Animações de slide
│   └── interactions.ts    # Animações de interação
└── index.ts               # Exports principais
```

## 🎨 Tokens de Design

### Cores

```typescript
import { Colors, lightTheme, darkTheme } from './design-system';

// Cores principais
Colors.primary          // #ff841e
Colors.primaryDark      // #2563EB
Colors.background       // #FFFFFF
Colors.surface          // #F8FAFC
Colors.textPrimary      // #0F172A
Colors.textSecondary    // #475569
```

### Tipografia

```typescript
import { TextStyles, FontSizes } from './design-system';

// Estilos pré-definidos
TextStyles.h1           // Heading 1
TextStyles.title        // Título
TextStyles.body         // Texto corpo
TextStyles.chatMessage  // Otimizado para chat
```

### Espaçamento

```typescript
import { Spacing, BorderRadius, Layout } from './design-system';

Spacing.xs    // 4px
Spacing.sm    // 8px
Spacing.md    // 16px
Spacing.lg    // 24px
Spacing.xl    // 32px
```

## 🧱 Componentes

### Button

```typescript
import { Button } from './design-system';

<Button
  title="Clique aqui"
  onPress={() => {}}
  variant="primary"     // primary | secondary | ghost | danger
  size="md"            // sm | md | lg
  disabled={false}
  loading={false}
  fullWidth={true}
/>
```

### Input

```typescript
import { Input } from './design-system';

<Input
  label="Email"
  placeholder="Digite seu email"
  error="Campo obrigatório"
  variant="default"    // default | filled
  leftIcon={<Icon />}
  rightIcon={<Icon />}
/>
```

### Card

```typescript
import { Card } from './design-system';

<Card
  variant="elevated"   // default | elevated | outlined
  padding="lg"         // xs | sm | md | lg | xl
  onPress={() => {}}   // Opcional para interação
>
  <Text>Conteúdo do card</Text>
</Card>
```

### ChatBubble

```typescript
import { ChatBubble } from './design-system';

<ChatBubble
  message="Olá! Como vai?"
  position="left"        // left | right
  timestamp="14:30"
  username="Usuário"
  showUsername={true}
  animationDelay={100}
/>
```

## 🎞️ Animações

### Fade

```typescript
import { useFadeIn, useFadeOut } from './design-system';

const fadeAnim = useFadeIn(300, 100); // duration, delay

<Animated.View style={{ opacity: fadeAnim }}>
  <Text>Conteúdo com fade</Text>
</Animated.View>
```

### Slide

```typescript
import { useSlideUp, useSlideIn } from './design-system';

const slideAnim = useSlideUp(300);

<Animated.View style={slideAnim}>
  <Text>Conteúdo com slide</Text>
</Animated.View>
```

### Interações

```typescript
import { usePressAnimation, usePulseAnimation } from './design-system';

const pressAnim = usePressAnimation(0.97);

<Animated.View style={pressAnim.transform}>
  <TouchableOpacity
    onPressIn={pressAnim.onPressIn}
    onPressOut={pressAnim.onPressOut}
  >
    <Text>Botão com animação</Text>
  </TouchableOpacity>
</Animated.View>
```

## 🌙 Suporte a Dark Mode

O Design System está preparado para dark mode:

```typescript
import { lightTheme, darkTheme } from './design-system';

// Use o tema apropriado baseado na preferência do usuário
const currentTheme = isDarkMode ? darkTheme : lightTheme;
```

## 📱 Boas Práticas

### Acessibilidade
- Todos os botões têm área mínima de toque (44px)
- Contraste adequado para leitura
- Suporte a screen readers

### Performance
- Animações otimizadas com `useNativeDriver`
- Componentes leves e reutilizáveis
- Lazy loading quando apropriado

### Consistência
- Use sempre os tokens de design
- Mantenha padrões de espaçamento
- Siga as variantes definidas

## 🔧 Extensibilidade

Para adicionar novos componentes:

1. Crie o componente em `components/`
2. Use os tokens existentes
3. Adicione animações se necessário
4. Exporte no `index.ts`
5. Documente o uso

## 📊 Métricas

- **Componentes**: 4 componentes base
- **Tokens**: 50+ tokens de design
- **Animações**: 8 hooks de animação
- **Variantes**: 15+ variações de componentes
- **Compatibilidade**: iOS, Android, Web

## 🚀 Roadmap

- [ ] Componente de Loading
- [ ] Componente de Modal
- [ ] Componente de Toast
- [ ] Tema automático (sistema)
- [ ] Mais variações de cores
- [ ] Componentes de navegação

---

**Versão**: 1.0.0  
**Última atualização**: 2024  
**Compatibilidade**: React Native 0.70+, Expo SDK 49+