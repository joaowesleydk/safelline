import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { BorderRadius, Spacing } from '../../design-system/tokens/spacing';
import { TextStyles } from '../../design-system/tokens/typography';

export const chatSelectStyles = StyleSheet.create({

  container: {
    flex: 1, 
    backgroundColor: colors.background, 
    paddingHorizontal: Spacing.xl, 
  },

  header: {
    paddingTop: Spacing['4xl'],   
    paddingBottom: Spacing.xl,    
    alignItems: 'center',         
  },
 
  title: {
    ...TextStyles.title,          
    fontWeight: 'bold',           
    color: colors.primary,    
    marginBottom: Spacing.xs,    
    letterSpacing: -0.2,          
  },
 
  subtitle: {
    ...TextStyles.body,           
    color: colors.textSecondary,  
    textAlign: 'center',          
    lineHeight: 20,               
    paddingHorizontal: Spacing.sm,
  },

  categories: {
    flex: 1, 
    gap: Spacing.sm, 
  },

  categoryCard: {
    backgroundColor: colors.surface, 
    padding: Spacing.lg,             
    borderRadius: BorderRadius.lg,
    alignItems: 'center',           
    borderWidth: 1,                  
    borderColor: colors.border,      
    marginBottom: Spacing.xs,        
  },

  categoryIcon: {
    fontSize: 32,                   
    marginBottom: Spacing.xs,      
  },

  categoryName: {
    ...TextStyles.body,             
    fontWeight: 'bold',             
    color: colors.primary,      
    marginBottom: Spacing.xs,       
    letterSpacing: -0.1,           
  },

  categoryDescription: {
    ...TextStyles.small,          
    color: colors.textSecondary,  
    textAlign: 'center',            
    lineHeight: 16,                 
  },

  buttonContainer: {
    paddingBottom: Spacing['4xl'],  
    paddingHorizontal: Spacing.xs,  
  },
});