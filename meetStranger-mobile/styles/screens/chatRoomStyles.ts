import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { BorderRadius, Layout, Spacing } from '../../design-system/tokens/spacing';
import { TextStyles } from '../../design-system/tokens/typography';
export const chatRoomStyles = StyleSheet.create({

  
  container: {
    flex: 1,
    backgroundColor: colors.background, 
  },


  header: {
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between', 
    paddingHorizontal: Spacing.lg, 
    paddingTop: Spacing['4xl'], 
    paddingBottom: Spacing.lg,
    backgroundColor: colors.surface, 
    borderBottomWidth: 1, 
    borderBottomColor: colors.border, 
  },

  
  headerButton: {
    paddingHorizontal: Spacing.md, 
    paddingVertical: Spacing.sm,  
    borderRadius: BorderRadius.md, 
    backgroundColor: colors.primary, 
    minWidth: 60, 
    alignItems: 'center', 
  },

  
  headerButtonText: {
    ...TextStyles.caption, 
    color: colors.background,
    fontWeight: '600', 
  },

  
  headerCenter: {
    alignItems: 'center', 
  },

  
  headerTitle: {
    ...TextStyles.title,
    color: colors.primary, 
  },

  
  connectionStatus: {
    ...TextStyles.small, 
    color: colors.textSecondary, 
    marginTop: Spacing.xs, 
  },

  messagesList: {
    flex: 1, 
  },

  
  messagesContent: {
    paddingVertical: Spacing.lg, 
    paddingBottom: Spacing['4xl'], 
  },

  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end', 
    paddingHorizontal: Spacing.lg, 
    paddingVertical: Spacing.md,
    paddingBottom: Spacing['4xl'], 
    backgroundColor: colors.background, 
    borderTopWidth: 1, 
    borderTopColor: colors.border, 
  },


  textInput: {
    flex: 1, 
    borderWidth: 1, 
    borderColor: colors.border, 
    borderRadius: BorderRadius.full, 
    paddingHorizontal: Spacing.lg, 
    paddingVertical: Spacing.md, 
    marginRight: Spacing.md,
    maxHeight: 100, // Limita crescimento (multi-line)
    ...TextStyles.body, // Texto padrão
    color: colors.primary, // Cor do texto digitado
    backgroundColor: colors.background, // Fundo do input
  },

  // Botão de enviar mensagem
  sendButton: {
    width: Layout.minTouchTarget, // Largura mínima para toque (44px)
    height: Layout.minTouchTarget, // Altura mínima para toque
    borderRadius: BorderRadius.full, // Formato circular
    backgroundColor: colors.primary, // Cor principal
    alignItems: 'center', // Centraliza horizontalmente
    justifyContent: 'center', // Centraliza verticalmente
  },

  // Estilo quando botão está desabilitado
  sendButtonDisabled: {
    backgroundColor: colors.border, // Cor neutra indicando inativo
  },

  // Texto dentro do botão de enviar
  sendButtonText: {
    ...TextStyles.body, // Texto padrão
    color: colors.background, // Cor clara para contraste
    fontWeight: 'bold', // Destaque no texto
  },
});