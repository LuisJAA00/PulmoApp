import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert, ScrollView, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router'; // Import the Link component
import icons from '@/constants/icons'; // Ensure you have the Google icon in your icons
import { login } from '@/lib/appwrite';
import { useGlobalContext } from '@/lib/global-provider';
import { Redirect } from 'expo-router';
import TitleCard from "@/components/TitleCard";

const SignIn = () => {
    const { refetch, loading, isLogged } = useGlobalContext();

    if (!loading && isLogged) return <Redirect href="/" />;

    const handleLogin = async () => {
        const result = await login();
        if (result) {
            refetch();
        } else {
            Alert.alert('Error', 'Failed to login');
        }
    };

    return (
        <View className="h-full bg-white">
            <TitleCard title="Sign In" /> {/* TitleCard component */}

            <SafeAreaView className='bg-white h-full'>
                <ScrollView contentContainerStyle={{ flexGrow: 1, paddingTop: 0 }}> {/* Removed default padding-top */}
                    <View className="px-10 mt-8"> {/* Increased margin-top from mt-2 to mt-5 */}
                        <View>
                            <Text className='text-lg font-rubik text-black-200'>Email Address</Text>
                            <TextInput
                                className='border border-gray-300 rounded-lg p-3 mt-2'
                                placeholder="Enter your email"
                                keyboardType="email-address"
                            />
                        </View>

                        <View className="mt-5">
                            <Text className='text-lg font-rubik text-black-200'>Password</Text>
                            <TextInput
                                className='border border-gray-300 rounded-lg p-3 mt-2'
                                placeholder="Enter your password"
                                secureTextEntry
                            />
                        </View>

                        <TouchableOpacity 
                            className='bg-blue-500 rounded-lg w-full py-4 mt-8'
                            onPress={() => Alert.alert('Sign In', 'Sign In logic here')}
                        >
                            <Text className='text-lg font-rubik-medium text-white text-center'>
                                Sign In
                            </Text>
                        </TouchableOpacity>

                        <View className="flex flex-row items-center justify-center mt-5">
                            <View className="flex-1 h-px bg-gray-300" />
                            <Text className='text-lg font-rubik text-black-200 mx-4'>OR</Text>
                            <View className="flex-1 h-px bg-gray-300" />
                        </View>

                        <TouchableOpacity 
                            className='bg-white border border-gray-300 rounded-lg w-full py-4 mt-5 flex flex-row items-center justify-center'
                            onPress={handleLogin}
                        >
                            <Image
                                source={icons.google}
                                className="w-5 h-5"
                                resizeMode='contain'
                            />
                            <Text className='text-lg font-rubik-medium text-black-300 ml-2'>
                                Continue with Google
                            </Text>
                        </TouchableOpacity>

                        <Text className='text-center mt-5 text-lg font-rubik text-black-200'>
                            Don't have an account?{' '}
                            <Link href="/sign-up" className="text-blue-500">
                                Sign Up
                            </Link>
                        </Text>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </View>
    );
}

export default SignIn;