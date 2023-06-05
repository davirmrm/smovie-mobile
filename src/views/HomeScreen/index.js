import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Input, adjustText } from '../../components';
import { searchMovie, setListMoviesClean } from './redux/homeActions';
import ListMovies from './listMovies';

export default () =>{
  const dispatch = useDispatch()
  const nls = require('./nls/en-US.json')
  const [searchText, setSearchText] = useState('');
  const { paginate } = useSelector(state=> state.homeState)

  const handleSearch = e => {
    setSearchText(e)
  }

  const handleSearching = e => {
    console.log(e);
    if (e) {
      dispatch(searchMovie({search: e, page: 1}))
    } else{
      dispatch([
        setListMoviesClean(),
        // AddAlert('info', nls.mensage.searchNone)
      ])
    }
  }

  const handlePaginate = e => {
    console.log(e);
      dispatch(searchMovie({search: paginate.search, page: e, paginate: true}))
  }

  return (
    <ScrollView style={{ backgroundColor: '#FFF' }}>
      <View style={styles.Wrapper}>
        <View style={styles.searchBar}>
          <Input
            styles={styles.searchBarInput}
            value={searchText}
            placeholder={nls.searchPlaceholder}
            action={e=> handleSearch(e)}
          />
          <Button
            type='primary'
            title={nls.search}
            styles={styles.searchBarButton}
            onPress={() => handleSearching(searchText)}
          />
        </View>
        
        {
          paginate.search &&
          <Text style={styles.searchBarInfo}>{adjustText(nls.infoSearch, {search: paginate.search, totalElements: paginate.totalElements})}</Text>
        }
        
        <ListMovies />
        {
          paginate.search &&
          <Text style={styles.searchBarInfo}>{adjustText(nls.infoSeeTotal, {numberSee: paginate.totalElements > 10 ? paginate.pageNumber * 10 : paginate.totalElements, totalElements: paginate.totalElements})}</Text>
        }
        {
          paginate.pageNumber < paginate.totalPages &&
          <Button
            type='primary'
            title={nls.seeMore}
            styles={styles.searchBarButton}
            onPress={() => handlePaginate(paginate.pageNumber + 1)}
          />
        }
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#FFFFFF', padding: 20, width: '100%',
    height: Platform.OS === 'ios' ? '90%' : '100%',
  },
  searchBar: {
    display:'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  searchBarInput:{
    width: '70%',
  },
  searchBarButton:{
    margin: 0
  },
  searchBarInfo:{
    fontSize: 14,
    textAlign: 'center',
    padding: 15,
  },
});