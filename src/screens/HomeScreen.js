import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Grid, Row, Col } from 'react-native-easy-grid';

const HomeScreen = () => {
  return (
    <Grid style={styles.grid}>
      <Row style={styles.row}>
        <Col style={styles.col}><Text>Column 1</Text></Col>
        <Col style={styles.col}><Text>Column 2</Text></Col>
      </Row>
      <Row style={styles.row}>
        <Col style={styles.col}><Text>Column 3</Text></Col>
        <Col style={styles.col}><Text>Column 4</Text></Col>
      </Row>
    </Grid>
  );
};

const styles = StyleSheet.create({
  grid: {
    flex: 1,
  },
  row: {
    flex: 1,
  },
  col: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
  },
}); 

export default HomeScreen;
