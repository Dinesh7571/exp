import React, { ReactNode } from "react";
import { View, StyleSheet } from "react-native";
import Video from "react-native-video";

type Props = {
    children: ReactNode;
};

const VideoBackground = ({ children }: Props) => {
    return (
        <View style={styles.container}>
            <Video
                source={{
                    uri: "https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260306_074215_04640ca7-042c-45d6-bb56-58b1e8a42489.mp4",
                }}
                style={styles.video}
                resizeMode="cover"
                repeat
                muted
                paused={false}       
                playInBackground      
                playWhenInactive    
                ignoreSilentSwitch="ignore"  
                controls={false}
            />

            <View style={styles.overlay}>
                {children}
            </View>
        </View>
    );
};

export default VideoBackground;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  
    video: {
        ...StyleSheet.absoluteFillObject,
        transform: [{ rotate: "180deg" }],
        
    },
    overlay: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
});