import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';
import { Spacing } from '../../design-system/tokens/spacing';
import { TextStyles } from '../../design-system/tokens/typography';


export const aboutStyles = StyleSheet.create({

                  
  container: {
    flex: 1, 
    backgroundColor: colors.background, 
  },

  
  header: {
    paddingTop: Spacing['4xl'],    
    paddingHorizontal: Spacing.xl, 
    paddingBottom: Spacing.xl,     
  },

  
  backButton: {
    ...TextStyles.body,            
    color: colors.primary,         
    fontWeight: '500',             
    marginBottom: Spacing.lg,      
  },

  
  title: {
    ...TextStyles.h1,             
    color: colors.primary,     
  },

  
  content: {
    paddingHorizontal: Spacing.xl, 
    paddingBottom: Spacing['3xl'], 
  },

  
  section: {
    marginBottom: Spacing['3xl'],  
  },

  
  sectionTitle: {
    ...TextStyles.h3,             
    color: colors.primary,     
    marginBottom: Spacing.md,      
  },

  
  text: {
    ...TextStyles.body,        
    color: colors.textSecondary,   
    marginBottom: Spacing.sm,      
  },

  
  bulletPoint: {
    ...TextStyles.body,            
    color: colors.textSecondary,   
    marginLeft: Spacing.lg,        
    marginBottom: Spacing.xs,      
  },

  
  footer: {
    alignItems: 'center',       
    paddingTop: Spacing['3xl'],    
    borderTopWidth: 1,             
    borderTopColor: colors.border, 
  },


  version: {
    ...TextStyles.caption,        
    color: colors.textSecondary,   
    marginBottom: Spacing.sm,      
  },


  copyright: {
    ...TextStyles.caption,         
    color: colors.textSecondary,  
    textAlign: 'center',          
  },
});