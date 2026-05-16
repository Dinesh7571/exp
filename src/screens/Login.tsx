import { Button, Card, Description, Input, Label, TextField } from 'heroui-native'
import LottieView from 'lottie-react-native';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, Pressable, ScrollView, Text, View } from 'react-native'
import { Uniwind } from 'uniwind';
import VideoBackground from '../components/VideoBackground';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const [theme, setTheme] = useState('ocean-light');

    const toggleTheme = () => {
        
        const newTheme = theme === 'light' ? 'dark' : 'light';
        Uniwind.setTheme(newTheme);
        setTheme(newTheme);
    };
    return (
        <VideoBackground>
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            className="flex-1"
        >
            <ScrollView
                contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
                keyboardShouldPersistTaps="handled"
                showsVerticalScrollIndicator={false}
            >
                <View className="flex-1 justify-center px-6 py-10 ">
                   
                    <Card className="gap-4 ">
                        <TextField isRequired>
                            <Label>Email</Label>
                            <Input
                                placeholder="Enter your email"
                                keyboardType="email-address"
                                autoCapitalize="none"
                                value={email}
                                onChangeText={setEmail}
                            />

                        </TextField>
                        <TextField isRequired>
                            <Label>New password</Label>
                            <View className="w-full flex-row items-center">
                                <Input
                                    value={password}
                                    onChangeText={setPassword}
                                    className="flex-1"
                                    placeholder="Enter your password"
                                    secureTextEntry={!isPasswordVisible}
                                />

                                <Pressable
                                    className="absolute right-4"
                                    onPress={() => setIsPasswordVisible(!isPasswordVisible)}
                                >

                                </Pressable>
                            </View>
                            <Description>Password must be at least 6 characters</Description>
                        </TextField>
                        <Button onPress={toggleTheme}>
                            <Button.Label>
                                {theme === 'light' ? 'Ocean Theme (light)' : 'Ocean Theme (dark)'}
                            </Button.Label>
                        </Button>
                    </Card>
                    
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
        </VideoBackground>
    )
}

export default Login