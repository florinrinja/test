import React from 'react';
import { Card, Text, CheckBox, Button, Icon } from 'react-native-elements';
import { View, StyleSheet } from 'react-native';
import UpDownButtons from './UpDownButtons';

interface ShoppingListCardProps {
  list: any,
  updateAmount: (
    food: string,
    portion: string,
    updatedNumber: string | null
  ) => void;
  toggleCheckBox: (
    food: string,
    portion: string,
    isChecked: boolean
  ) => void;
}

const ShoppingListCard = ({
  list,
  updateAmount,
  toggleCheckBox,
}: ShoppingListCardProps) => {
  return (
    <Card>
      <View>
        {Object.keys(list).map((food) =>
          Object.keys(list[food]).map((portion) => (
            <View
              key={food + portion}
              style={list[food][portion].checked && style.checkedItem}
            >
              <View style={style.heading}>
                <CheckBox
                  checked={list[food][portion].checked}
                  onPress={() =>
                    toggleCheckBox(food, portion, list[food][portion].checked)
                  }
                />
                <Text style={style.listItem}>{food}</Text>
              </View>
              <View style={style.subItem}>
                <UpDownButtons
                  inputDisabled = {list[food][portion].checked}
                  total={list[food][portion].amount}
                  onValueChange={(updatedNumber: string) =>
                    !list[food][portion].checked &&
                    updateAmount(food, portion, updatedNumber)
                  }
                />
                <Text>{portion}</Text>
              </View>
            </View>
          ))
        )}
      </View>
    </Card>
  );
}

const style = StyleSheet.create({
  heading: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listItem: {
    textAlign: 'left',
    fontSize: 20,
    flex: 1,
  },
  checkedItem: {
    opacity: 0.5,
  },
  subItem: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
});

export default ShoppingListCard;