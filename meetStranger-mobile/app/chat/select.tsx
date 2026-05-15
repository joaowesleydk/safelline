import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { Button } from '../../components/Button';
import { chatSelectStyles as styles } from '../../styles/screens/chatSelectStyles';

interface ChatCategory {
  id: string;
  name: string;
  description: string;
  icon: string;
}

const categories: ChatCategory[] = [
  {
    id: 'games',
    name: 'Games',
    description: '',
    icon: '🎮'
  },
  {
    id: 'series',
    name: 'Séries',
    description: '',
    icon: '📺'
  },
  {
    id: 'filmes',
    name: 'Filmes',
    description: '',
    icon: '🎬'
  }
];

export default function ChatSelect() {
  const router = useRouter();

  const handleCategorySelect = (categoryId: string) => {
    router.push(`/chat/room?category=${categoryId}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Qual é o seu interesse?</Text>
        <Text style={styles.subtitle}>
          Selecione o assunto que mais te interessa para conversar
        </Text>
      </View>

      <View style={styles.categories}>
        {categories.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={styles.categoryCard}
            onPress={() => handleCategorySelect(category.id)}
            activeOpacity={0.8}
          >
            <Text style={styles.categoryIcon}>{category.icon}</Text>
            <Text style={styles.categoryName}>{category.name}</Text>
            <Text style={styles.categoryDescription}>{category.description}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <View style={styles.buttonContainer}>
        <Button
  title="← Voltar"
  onPress={() => {
    if (router.canGoBack()) {
      router.back();
    } else {
      router.push('/home');
    }
  }}
  variant="primary"
/>
      </View>
    </View>
  );
}