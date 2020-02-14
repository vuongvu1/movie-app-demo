import React, {useRef} from 'react';
import {TextInput, Text, View, StyleSheet} from 'react-native';

const SearchBar = ({text, setText}) => {
  const inputRef = useRef(null);

  const clearText = () => {
    setText('');

    if (inputRef.current) {
      inputRef.current.clear();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.searchBar}>
        <TextInput
          ref={inputRef}
          style={styles.searchInput}
          onChangeText={setText}
          value={text}
          autoFocus
          autoCorrect={false}
          autoCapitalize="none"
          clearButtonMode="never"
        />

        <Text style={styles.clearBtn} onPress={clearText}>
          ✕
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  searchBar: {
    position: 'relative',
    height: 50,
  },
  searchInput: {
    borderBottomWidth: 1,
    borderColor: '#D3D3D3',
  },
  clearBtn: {
    position: 'absolute',
    top: 12.5,
    right: 10,
    marginVertical: 'auto',
    fontSize: 18,
    fontWeight: 'bold',
    color: 'grey',
  },
});

export default SearchBar;
