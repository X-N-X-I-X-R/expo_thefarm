import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function IconButton({ icon, label, onPress }) {
  return (
    <TouchableOpacity style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="white" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    backgroundColor: '#2196F3',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius: 4,
    flexDirection: 'row',
    margin: 10,
  },
  iconButtonLabel: {
    color: 'white',
    marginLeft: 10,
  },
});