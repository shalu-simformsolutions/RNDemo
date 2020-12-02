import React, {useState} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
  SafeAreaView,
  ScrollView,
  Alert,
} from 'react-native';
import Color from '../../Config/Color';

let width = Dimensions.get('window').width;

const index = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const loginPress = () => {
    let authUser = 'day@gmail.com';
    let authPass = 'day123';
    let reg = /^\w+([\\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,5})+$/;
    if (!email) {
      Alert.alert('Alert', 'Please Enter Email Address', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    } else if (!reg.test(email)) {
      Alert.alert('Alert', 'Please Enter a valid Email Address', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    } else if (!password) {
      Alert.alert('Alert', 'Please Enter Password', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    } else if (email === authUser && password === authPass) {
      navigation.navigate('DashboardScreen');
      return;
    } else {
      Alert.alert('Alert', 'Incorrect Username and Password', [
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
      return;
    }
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.SafeAreaView}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.loginView}>
            <Text style={styles.loginText}>{'login'}</Text>
            <Text style={styles.textStyle}>
              {'Enter your details below to continue'}
            </Text>
          </View>

          <View style={styles.textinputContainer}>
            <TextInput
              style={styles.textInputStyle}
              placeholder="Username"
              value={email}
              returnKeyType="next"
              autoCapitalize="none"
              keyboardType="email-address"
              autoCorrect={false}
              onChangeText={(val) => setEmail(val)}
            />

            <TextInput
              style={styles.textInputStyle}
              placeholder="Password"
              value={password}
              autoCapitalize="none"
              returnKeyType="done"
              keyboardType="default"
              type="password"
              secureTextEntry={true}
              autoCorrect={false}
              onChangeText={(val) => setPassword(val)}
            />

            <TouchableOpacity style={{alignSelf: 'flex-end'}}>
              <Text style={styles.forgotPass}>Forgot password?</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => loginPress()}
              style={[styles.loginButtonStyle]}>
              <Text style={styles.buttonText}>{'login'}</Text>
            </TouchableOpacity>

            <View style={styles.signupView}>
              <Text style={{}}>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={styles.signUpText}>Signup</Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width,
    backgroundColor: Color.white,
  },
  SafeAreaView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  loginView: {
    justifyContent: 'center',
    marginTop: '50%',
  },
  loginText: {
    color: Color.black,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'left',
    textTransform: 'uppercase',
  },
  textStyle: {
    color: Color.black,
    fontSize: 14,
    textAlign: 'left',
  },
  textinputContainer: {
    flex: 1,
    justifyContent: 'center',
    marginTop: '10%',
  },
  textInputStyle: {
    borderColor: Color.PRIMARY,
    backgroundColor: Color.white,
    borderWidth: 1,
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 8,
    fontSize: 14,
    marginVertical: 8,
  },
  forgotPass: {
    color: Color.gray,
    textAlign: 'center',
    marginTop: 5,
    fontSize: 14,
  },
  signUpText: {
    textAlign: 'center',
    marginTop: 5,
    color: Color.PRIMARY,
    fontSize: 14,
    letterSpacing: 0.4,
  },
  loginButtonStyle: {
    borderRadius: 4,
    paddingHorizontal: 16,
    paddingVertical: 12,
    backgroundColor: Color.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 40,
  },
  buttonText: {
    color: Color.white,
    fontWeight: 'bold',
    fontSize: 14,
    letterSpacing: 0.4,
    alignSelf: 'center',
    textTransform: 'uppercase',
  },
  signupView: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },
});
