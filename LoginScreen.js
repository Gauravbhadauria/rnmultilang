import {View, Text, TextInput, Button} from 'react-native';
import React from 'react';
import {useTranslation} from 'react-i18next';
import i18next from 'i18next';
import {useNavigation} from '@react-navigation/native';

const LoginScreen = () => {
  const {t} = useTranslation();
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <Text style={{marginTop: 100, marginLeft: 30}}>{t('email')}</Text>
      <TextInput
        style={{
          width: '90%',
          marginTop: 10,
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
        }}
      />
      <Text style={{marginTop: 20, marginLeft: 30}}>{t('password')}</Text>
      <TextInput
        style={{
          width: '90%',
          marginTop: 10,
          height: 50,
          borderWidth: 1,
          alignSelf: 'center',
          marginBottom: 30,
        }}
      />
      <View style={{width: '90%', alignSelf: 'center'}}>
        <Button title={t('login')} />
      </View>
      <View style={{width: '90%', marginTop: 20, alignSelf: 'center'}}>
        <Button
          title={t('signup')}
          onPress={() => {
            navigation.navigate('Signup');
          }}
        />
      </View>
      <View
        style={{
          width: '90%',
          marginTop: 30,
          alignSelf: 'center',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Button
          title="English"
          onPress={() => {
            i18next.changeLanguage('en');
          }}
        />
        <Button
          title="Hindi"
          onPress={() => {
            i18next.changeLanguage('hi');
          }}
        />
        <Button
          title="Tamil"
          onPress={() => {
            i18next.changeLanguage('ta');
          }}
        />
        <Button
          title="Punjabi"
          onPress={() => {
            i18next.changeLanguage('pa');
          }}
        />
      </View>
    </View>
  );
};

export default LoginScreen;
