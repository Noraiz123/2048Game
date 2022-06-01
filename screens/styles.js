import {StyleSheet, StatusBar, Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fefadd',
  },
  scoresContainer: {
    marginTop: StatusBar.currentHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  score: {
    backgroundColor: '#7b796d',
    paddingHorizontal: 30,
    paddingVertical: 5,
    marginTop: 20,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreTitle: {
    fontWeight: '600',
    color: '#fefadd',
    fontSize: 16,
  },
  scoreText: {
    fontWeight: '800',
    color: '#fefadd',
    fontSize: 20,
  },
  boardStyle: {
    width: width,
    padding: 5,
    backgroundColor: '#7b796d',
    marginTop: 20,
  },
  rowStyle: {
    flexDirection: 'row',
    height: width / 4,
  },
  cellStyle: {
    backgroundColor: 'rgba(255, 255, 255, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
    borderRadius: 5,
  },
  imgStyle: {
    width: '100%',
    height: '100%',
  },
  btnContainer: {
    marginTop: 40,
    paddingHorizontal: 100,
  },
});

export default styles;
