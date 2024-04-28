import { TouchableOpacity, StyleSheet } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function CircleButton({ onPress }) {
  return (
    <TouchableOpacity style={styles.circleButton} onPress={onPress}>
      <MaterialIcons name="add" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  circleButton: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 100,
    width: 60,
    height: 60,
    margin: 10,
  },
});