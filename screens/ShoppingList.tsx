import React, { useState } from 'react';
import { View, StyleSheet, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { ScrollView } from 'react-native-gesture-handler';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import CustomHeader from './Header';
import ShoppingListCard from './ShoppingListCard';
import moment from 'moment';
import { Text, Icon, Button, Input } from 'react-native-elements';

const ShoppingList = () => {
  const [period, setPeriod] = useState<null | Date>(null);
  const [itemName, setItemName] = useState<string>('');

  const [list, setList] = useState({
    id: '1',
    items: {
      biscuits: {
        portion: {
          checked: false,
          amount: 0,
        }
      },
      potatoes: {
        gram: {
          checked: false,
          amount: 0,
        }
      }
    }
  });

  const [isVisible, setIsDatePickerVisible] = useState(false);
  const [isNewItemVisible, setIsNewItemVisible] = useState(false);
  const [currentInput, setCurrentInput] = useState(null);

  const getPeriod = (input: Date) => {
    setIsDatePickerVisible(false);
    setPeriod(moment(input).startOf('day').toDate());
  };

  const updateAmount = (
    food: string,
    portion: string,
    updatedNumber: string | null
  ) => {
    const newFood = list.items[food];
    newFood[portion].amount = updatedNumber;
    setList((previousList) => ({ ...previousList, [food]: newFood }));
  };

  const toggleCheckBox = (
    food: string,
    portion: string,
    isChecked: boolean
  ) => {
    const newFood = list.items[food];
    newFood[portion].checked = !isChecked;
    setList((previousList) => ({ ...previousList, [food]: newFood }));
  };

  return (
    <View style={style.content}>
      <CustomHeader title="Shopping List" />
      <Modal
        isVisible={isNewItemVisible}
        hideModalContentWhileAnimating={true}
        animationIn="slideInUp"
        animationOut="slideOutDown"
        onBackdropPress={()=>setIsNewItemVisible(false)}
        onSwipeComplete={()=>setIsNewItemVisible(false)}
        swipeDirection="right"
      >
        <View style={style.centeredView}>
          <View style={style.modalView}>
            <Text style={style.modalText}>Add new item</Text>
            <View>
              <Text style={style.textStyle}>Item name</Text>
              <Input
                autoFocus={true}
                multiline={true}
                numberOfLines={3}
                style={style.textArea}
                value={itemName}
                onChangeText={(value) => onChange(value)}
              />
            </View>
            <Pressable
              style={[style.button, style.buttonClose]}
              onPress={() => setIsNewItemVisible(!isNewItemVisible)}
            >
              <Text style={style.textStyle}>Add item</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <DateTimePickerModal
        isVisible={isVisible}
        date={currentInput || new Date()}
        mode="date"
        onChange={setCurrentInput}
        onConfirm={getPeriod}
        onCancel={() => setIsDatePickerVisible(false)}
      />
      <View style={style.horizontal}>
        <Button
          icon={
            <Icon name="plus"
              type="font-awesome" />}
          onPress={() =>
            setIsNewItemVisible(true)}
        />
        <Button
          icon={<Icon name="restore" />}
          onPress={() =>
            setIsDatePickerVisible(true)}
        />
        <Text h4>
          {period ? moment(period).format("DD/MM/YYYY") : 'Enter date'}
        </Text>
      </View>
      <ScrollView style={style.listSpace}>
        {
          (Object.keys(list.items).length ? (
            <ShoppingListCard
              list={list.items}
              updateAmount={updateAmount}
              toggleCheckBox={toggleCheckBox}
            />
          ) : (
            <Text>No list found</Text>
          ))}
      </ScrollView>
    </View>
  );
}

const style = StyleSheet.create({
  content: {
    flex: 1,
  },
  textArea: {
    textAlignVertical: 'top',
    backgroundColor: 'white',
  },
  listSpace: {
    flex: 1,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center",
    color: 'black',
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});

export default ShoppingList;
