import {ListRenderItem} from 'react-native';

import {SelectDropdownOption} from './SelectDropdownOption';
import {DropdownOption} from './types';

export const renderDropdownOption =
  (
    onOptionPress: (optionCode: DropdownOption) => void,
    selectedOption?: DropdownOption,
  ): ListRenderItem<DropdownOption> =>
  ({item}) => {
    return (
      <SelectDropdownOption
        isActive={selectedOption?.code === item.code}
        option={item}
        onSelect={onOptionPress}
      />
    );
  };
