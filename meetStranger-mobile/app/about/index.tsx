import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import { aboutStyles as styles } from '../../styles/screens/aboutStyles';

export default function About() {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Text style={styles.backButton}>← Voltar</Text>
        </TouchableOpacity>
        <Text style={styles.title}>Sobre o MeetStranger</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🎭 O que é o MeetStranger?</Text>
          <Text style={styles.text}>
            O MeetStranger é um aplicativo de comunicação que conecta pessoas 
            do mundo todo através de conversas por texto. Nossa missão é criar um 
            espaço seguro onde você pode conhecer novas perspectivas e fazer conexões 
            genuínas sem julgamentos.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🔒 Privacidade</Text>
          <Text style={styles.text}>
            Sua privacidade é nossa prioridade. No MeetStranger:
          </Text>
          <Text style={styles.bulletPoint}>• Não coletamos dados pessoais</Text>
          <Text style={styles.bulletPoint}>• Você pode sair a qualquer momento</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>🌍 Como Funciona</Text>
          <Text style={styles.text}>
            1. Escolha um tópico de interesse (Filmes, Jogos ou Séries)
          </Text>
          <Text style={styles.text}>
            2. Seja conectado com alguém que compartilha o mesmo interesse
          </Text>
          <Text style={styles.text}>
            3. Converse livremente sobre o assunto escolhido
          </Text>
          <Text style={styles.text}>
            4. A qualquer momento, encontre um novo parceiro de conversa
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>⚡ Recursos</Text>
          <Text style={styles.bulletPoint}>• Chat em tempo real</Text>
          <Text style={styles.bulletPoint}>• Múltiplas categorias de interesse</Text>
          <Text style={styles.bulletPoint}>• Interface simples e intuitiva</Text>
          <Text style={styles.bulletPoint}>• Conexão instantânea</Text>
          <Text style={styles.bulletPoint}>• Totalmente gratuito</Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>👨💻 Sobre o Desenvolvedor</Text>
          <Text style={styles.text}>
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.version}>Versão 1.0.0</Text>
          <Text style={styles.copyright}>
            © 2026 MeetStranger. Feito com ❤️ para conectar pessoas.
          </Text>
        </View>
      </View>
    </ScrollView>
  );
}