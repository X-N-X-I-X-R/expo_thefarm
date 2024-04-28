import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

export default function Button({ label, theme, onPress }) {
  const backgroundColor = theme === 'primary' ? '#2196F3' : '#9E9E9E';

  return (
    <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
      <FontAwesome name="picture-o" size={18} color="white" style={styles.buttonIcon} />
      <Text style={styles.buttonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    margin: 10,
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: 'white',
    marginLeft: 10,
  },
});