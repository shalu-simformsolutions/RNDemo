import React, {useReducer} from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
  Dimensions,
} from 'react-native';
import {
  employeeListReducer,
  initialState,
} from '../../ReduxStore/reducers/employeeListReducer';
import Color from '../../Config/Color';

let width = Dimensions.get('window').width;

const index = () => {
  const [state] = useReducer(employeeListReducer, initialState);

  const employeeListItem = ({item}) => {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.listViewContainer}>
          <Text style={styles.itemName}>{`Name: ${item.name}`}</Text>
          <Text style={styles.itemText}>{`Email: ${item.email}`}</Text>
          <Text style={styles.itemText}>{`Age: ${item.age}`}</Text>
          <Text style={styles.itemText}>{`Gender: ${item.gender}`}</Text>
          <Text style={styles.itemText}>{`Phone: ${item.phoneNo}`}</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.mainContainer}>
      <SafeAreaView style={styles.SafeAreaView}>
        <FlatList
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item.id}
          data={state.employeeList}
          renderItem={employeeListItem}
          ItemSeparatorComponent={() => <View style={{margin: 5}} />}
        />
      </SafeAreaView>
    </View>
  );
};
export default index;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: width,
    flexDirection: 'row',
    backgroundColor: Color.white,
  },
  SafeAreaView: {
    flex: 1,
    marginHorizontal: 10,
    marginVertical: 20,
  },
  listViewContainer: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.1)',
    justifyContent: 'center',
    padding: 10,
  },
  itemName: {
    fontWeight: 'bold',
    fontSize: 16,
    color: Color.black,
    padding: 2,
  },
  itemText: {
    color: Color.black,
    fontSize: 12,
    padding: 2,
  },
});
