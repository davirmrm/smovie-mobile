import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { detailMovie } from './redux/homeActions';
import { Colors, Dimension } from '../../constants';
import { useNavigation } from '@react-navigation/native';

export default () =>{
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const { listMovies } = useSelector(state=> state.homeState)

  const movieDetail = e => {
    dispatch(detailMovie({...e}, navigation))
  }
  
  return (
    <ScrollView>
      <View style={styles.boxListMovie}>
      {
        listMovies?.map(movie=> {
          return (
            <TouchableOpacity style={styles.boxMovie} key={movie.imdbID} onPress={()=> movieDetail(movie)}>
              <View  style={styles.boxMovieImg}>
                <Text style={styles.type}>{movie.Type}</Text>
                {
                  movie.Poster !== 'N/A' ?
                  <Image 
                    style={styles.logo}
                    source={{uri: movie.Poster}} 
                  />
                  :<View style={styles.imgFake} className='img-fake'></View>
                }
              </View>
              <Text style={styles.title}>{movie.Title} - {movie.Year}</Text>
            </TouchableOpacity>
          )
        })
      }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  logo: {
    width: '100%',
    height: 200,
  },
  boxListMovie:{
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxMovie: {
    width: ((Dimension.width - 60) / 2),
    marginBottom: 20,
    backgroundColor: Colors.primaryBg,

    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: Colors.primaryBgh,
    color: Colors.primaryColor,
  },
  boxMovieImg:{
    position: 'relative',
    width: '100%',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: Colors.primaryColor,
  },
  imgFake:{
    backgroundColor: Colors.primaryColor,
    width: '100%',
    height: 200,
  },
  type: {
    backgroundColor: Colors.primaryBg,
    color: Colors.primaryColor,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.primaryBgh,
    position: 'absolute',

    borderRadius: 5,
    padding: 5,
    top: 4,
    right: 4,
    zIndex: 2,
  },
  title:{
    color: Colors.primaryColor,
    textAlign: 'center',
    padding: 5,
  },
});
