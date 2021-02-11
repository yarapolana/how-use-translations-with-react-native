import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

// You can use either Trans or useTranslation hooks 
import { Trans, useTranslation } from 'react-i18next'

// This is where you import/activate your translations
import './i18n'
import i18n from './i18n'

export default function App() {
  const [language, setLanguage] = useState('is')
  // This is the translation lib you use
  const { t } = useTranslation()

  useEffect(() => {
    // You can add local storage here and call that 
    // to summon the users last known language for example. 
    i18n.changeLanguage(language)
  }, [language])

  return (
    <View style={styles.container}>

      <Text style={styles.text}>
        Your current language is 
        <Text style={styles.textBold}> {language === 'is' ? 'Icelandic' : 'English'}</Text>
      </Text>
  
      <Text style={{ fontSize: 32 }}>
        {/* This is how you translate with Trans */}
        <Trans>Good Morning</Trans>
      </Text>

      <Button
        onPress={() => setLanguage(language === 'is' ? 'en' : 'is')}
        color='#4987d8'
        // This is how you translate with hooks
        title={t('Click to Translate')}
      />

      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 12,
    position: 'absolute',
    bottom: 0,
    marginBottom: 150,
  },
  textBold: {
    fontSize: 12,
    fontWeight: 'bold',
  }
});
