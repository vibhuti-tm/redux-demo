import React,{useEffect,useState} from 'react';
import {View, Text, FlatList, Image, TouchableOpacity} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {getMovies, addFavorite, removeFavorite} from '../redux/actions/getMovies';
import { Images } from '../images/Images';
const Movies = () => {
  const movies = useSelector(state => state.moviesReducer.movies);
  const favorites = useSelector(state => state.moviesReducer.favorites);
  const dispatch = useDispatch();
  const fetchMovies = () => dispatch(getMovies());
  const addToFavorites = movie => dispatch(addFavorite(movie));
const removeFromFavorites = movie => dispatch(removeFavorite(movie));
const handleAddFavorite = movie => {
  addToFavorites(movie)
};
const handleRemoveFavorite = movie => {
  removeFromFavorites(movie);
};
const exists = movie => {
  if (favorites?.filter(item => item.id === movie.id).length > 0) {
    return true;
  }
  return false;
};
  useEffect(() => {
    fetchMovies();
  }, []);
  return (
    <View style={{flex: 1, marginTop: 44, paddingHorizontal: 20}}>
    <Text style={{fontSize: 22}}>Popular Movies</Text>
    <View style={{flex: 1, marginTop: 12}}>
      <FlatList
        data={movies}
        keyExtractor={item => item.id.toString()}
        renderItem={({item}) => {
          const IMAGE_URL =
            'https://image.tmdb.org/t/p/w185' + item.poster_path;
          return (
            <View style={{marginVertical: 12}}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Image
                  source={{
                    uri: IMAGE_URL,
                  }}
                  resizeMode="cover"
                  style={{width: 100, height: 150, borderRadius: 10}}
                />
                <View style={{flex: 1, marginLeft: 12}}>
                  <View>
                    <Text style={{fontSize: 22, paddingRight: 16}}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      marginTop: 10,
                      alignItems: 'center'
                    }}>
                    <Image
                        source={Images.thumb} style={{height:20,width:20,tintColor:'green'}}
                      />
                    <Text
                      style={{
                        fontSize: 18,
                        paddingLeft: 10,
                        color: '#64676D',
                      }}>
                      {item.vote_count}
                    </Text>
                    <TouchableOpacity
                       onPress={() =>
    exists(item) ? handleRemoveFavorite(item) : handleAddFavorite(item)
  }

                      activeOpacity={0.7}
                      style={{
                        marginLeft: 14,
                        flexDirection: 'row',
                        padding: 2,
                        borderRadius: 20,
                        alignItems: 'center',
                        justifyContent: 'center',
                        height: 40,
                        width: 40,
                      }}>
                     <Image
                        source={exists(item) ?Images.like: Images.heartOutline} style={{height:20,width:20,tintColor:'red'}}
                      />
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
        showsVerticalScrollIndicator={false}
      />
    </View>
  </View>

  );
};
export default Movies;