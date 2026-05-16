import { Button, Card, Chip, ListGroup, PressableFeedback, Separator, Switch } from 'heroui-native';
import React from 'react';
import { View } from 'react-native';
import { Text } from 'react-native-gesture-handler';
import Animated, { ZoomIn } from 'react-native-reanimated';

export default function SwitchExample() {
  const [darkMode, setDarkMode] = React.useState(false);

  return (
    <View className="">
      <ListGroup>
        <PressableFeedback animation={true} onPress={() => { }}>
          <PressableFeedback.Scale>
            <ListGroup.Item>
              <ListGroup.ItemContent>
                <ListGroup.ItemTitle>Language</ListGroup.ItemTitle>
                <ListGroup.ItemDescription>English</ListGroup.ItemDescription>
              </ListGroup.ItemContent>

              <ListGroup.ItemSuffix>
              </ListGroup.ItemSuffix>

            </ListGroup.Item>
          </PressableFeedback.Scale>
        </PressableFeedback>
        <Separator className="mx-4" />
        <ListGroup.Item>
          <ListGroup.ItemContent>
            <ListGroup.ItemTitle>Notifications</ListGroup.ItemTitle>
          </ListGroup.ItemContent>
          <ListGroup.ItemSuffix>
            <Chip variant="primary" color="danger">
              <Chip.Label className="font-bold">7</Chip.Label>
            </Chip>
          </ListGroup.ItemSuffix>
        </ListGroup.Item>
      </ListGroup>
    </View>
  );
}