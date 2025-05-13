import auth from '@react-native-firebase/auth';
import { useRouter } from 'expo-router';
import { FirebaseError } from 'firebase/app';
import { useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  Button,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

export default function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);

  const router = useRouter();

  const cleanAndValidate = (text: string) => text.trim();

  const handleSignIn = async () => {
    const cleanedEmail = cleanAndValidate(email);
    const cleanedPassword = cleanAndValidate(password);

    if (!cleanedEmail || !cleanedPassword) {
      Alert.alert('Campos requeridos', 'Por favor, completa email y contraseña.');
      return;
    }

    setLoading(true);
    try {
      await auth().signInWithEmailAndPassword(cleanedEmail, cleanedPassword);
      router.replace('/(auth)/home');
    } catch (e: any) {
      const err = e as FirebaseError;
      Alert.alert('Error en inicio de sesión', err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const handleSignUp = async () => {
    const cleanedEmail = cleanAndValidate(email);
    const cleanedPassword = cleanAndValidate(password);
    const cleanedConfirm = cleanAndValidate(confirmPassword);

    if (!cleanedEmail || !cleanedPassword || !cleanedConfirm) {
      Alert.alert('Campos requeridos', 'Completa todos los campos.');
      return;
    }

    if (cleanedPassword !== cleanedConfirm) {
      Alert.alert('Error', 'Las contraseñas no coinciden.');
      return;
    }

    setLoading(true);
    try {
      await auth().createUserWithEmailAndPassword(cleanedEmail, cleanedPassword);
      Alert.alert('Éxito', 'Cuenta creada. Verifica tu correo.');
      router.replace('/(auth)/home');
    } catch (e: any) {
      const err = e as FirebaseError;
      Alert.alert('Error en registro', err.message || 'Error desconocido');
    } finally {
      setLoading(false);
    }
  };

  const toggleToRegister = () => {
    setIsRegistering(true);
  };

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.container}>
        <Text style={styles.title}>{isRegistering ? 'Crear cuenta' : 'Iniciar sesión'}</Text>

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          placeholder="Correo electrónico"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        <TextInput
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          placeholder="Contraseña"
          secureTextEntry
        />

        {isRegistering && (
          <TextInput
            style={styles.input}
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            placeholder="Confirmar contraseña"
            secureTextEntry
          />
        )}

        {loading ? (
          <ActivityIndicator size="large" style={styles.loader} />
        ) : (
          <>
            {!isRegistering ? (
              <>
                <View style={styles.button}>
                  <Button onPress={handleSignIn} title="Iniciar sesión" />
                </View>
                <View style={styles.button}>
                  <Button onPress={toggleToRegister} title="Crear cuenta" color="#4CAF50" />
                </View>
              </>
            ) : (
              <View style={styles.button}>
                <Button onPress={handleSignUp} title="Registrarse" color="#4CAF50" />
              </View>
            )}
          </>
        )}
      </KeyboardAvoidingView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
  },
  container: {
    marginHorizontal: 20,
    paddingVertical: 40,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    marginVertical: 6,
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: '#fff',
    borderColor: '#ccc',
  },
  button: {
    marginVertical: 10,
  },
  loader: {
    marginVertical: 30,
  },
});
