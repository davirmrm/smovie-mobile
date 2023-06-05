import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
} from 'react-native';
import { useSelector } from 'react-redux';
import { Colors } from '../../constants';

export default () =>{
  const nls = require('./nls/en-US.json')
  const { movie } = useSelector(state=> state.homeState)

console.log(movie, 'movie');
  return (
    <ScrollView>
      <View style={styles.Wrapper}>
        <View style={styles.boxMovie}>
          <Text style={styles.titleScreen}>{movie.Title}</Text>
          <View  style={styles.boxMovieImg}>
            <Text style={styles.type}>
              <Text style={styles.typeText}>{movie.imdbRating} -</Text>
              <Text style={styles.typeText}> {movie.imdbVotes} votes</Text>
            </Text>
            {
              movie.Poster !== 'N/A' ?
              <Image 
                style={styles.logo}
                source={{uri: movie.Poster}} 
              />
              :<View style={styles.imgFake} className='img-fake'></View>
            }
          </View>
          <View  style={styles.boxMovieInfo}>
            <Text style={styles.small}>{movie.Type} - {movie.Year}</Text>
            <Text style={styles.info}>{movie.Plot}</Text>
            <Text style={styles.info}>
              <Text style={styles.infoStrong}>{nls.Director}</Text>
              : {movie.Director}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.infoStrong}>{nls.Genre}</Text>
              : {movie.Genre}
            </Text>
            <Text style={styles.info}>
              <Text style={styles.infoStrong}>{nls.Actors}</Text>
              : {movie.Actors}
              </Text>
              {
                movie?.Ratings?.lenght &&
                <Text style={styles.info}>
                  <Text style={styles.infoStrong}>{nls.Ratings}</Text>
                  :
                </Text>
              }
            {
              movie?.Ratings?.map((r, i)=>{
                return (
                  <Text key={`Ratings-${i}`} style={styles.infoList}>
                    <Text style={styles.infoListStrong}>{r.Source}</Text> - 
                    {r.Value}
                  </Text>
                )
              })
            }
          </View>
        </View>
        {
          movie.Awards !== 'N/A' && (
            <Text style={styles.boxAwards}>{movie.Awards}</Text>
          )
        }
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  Wrapper: {
    backgroundColor: '#FFFFFF', padding: 20, width: '100%',
    height: Platform.OS === 'ios' ? '90%' : '100%',
  },
  titleScreen:{
    color: Colors.primaryBg,
    textAlign: 'center',
    paddingBottom: 20,
    paddingHorizontal: 5,
    fontSize: 24,
    fontWeight: 600,
  },
  boxListMovie:{
    backgroundColor: '#FFF',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  boxMovie: {
    width: '100%',
    marginBottom: 20,
  },
  boxMovieImg:{
    position: 'relative',
    width: '100%',
    borderWidth: 3,
    borderStyle: 'solid',
    borderColor: Colors.primaryColor,
  }, 
  logo: {
    marginHorizontal: 35,
    width: 300,
    height: 400,
  },
  imgFake:{
    backgroundColor: Colors.primaryColor,
    width: '100%',
    height: 200,
  },
  boxMovieInfo: {
    marginVertical: 10,
  },
  type: {
    backgroundColor: Colors.primaryBg,
    color: Colors.input_color,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: Colors.primaryBgh,
    position: 'absolute',

    borderRadius: 5,
    paddingVertical: 5,
    paddingHorizontal: 10,
    top: 4,
    right: 35,
    zIndex: 2,
  },
  typeText: {
    color: Colors.primaryColor,
  },
  title:{
    textAlign: 'center',
    padding: 5,
    fontSize: 18,
    fontWeight: 600,
  },
  small:{
    textAlign: 'center',
    padding: 5,
  },
  info:{
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 400,
  },
  infoStrong:{
    fontSize: 16,
    fontWeight: 800,
  },
  infoList:{
    paddingLeft: 20,
    paddingBottom: 10,
    fontSize: 16,
    fontWeight: 400,
  },
  infoListStrong:{
    fontSize: 16,
    fontWeight: 500,
  },
  boxAwards:{
    backgroundColor: Colors.primaryBg,
    color: Colors.primaryColor,
    borderWidth: 4,
    borderStyle: 'solid',
    borderColor: Colors.primaryBgh,
    borderRadius: 5,
    fontSize: 16,
    fontWeight: 500,
    textAlign: 'center',
    paddingHorizontal: 10,
    paddingVertical: 20,
  }
});
