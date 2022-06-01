/* eslint-disable no-alert */
import {View, Text, Image, Button} from 'react-native';
import React, {useState, useLayoutEffect} from 'react';
import styles from './styles';
import {
  generateRandom,
  getEmptyBoard,
  moveLeft,
  moveRight,
  moveUp,
  moveDown,
  checkWin,
  isOver,
  score,
  resetScore,
} from '../components/GameController';
import GestureRecognizer from 'react-native-swipe-gestures';
import GameData from '../components/gameData';

const Board = () => {
  const [board, setBoard] = useState([]);

  useLayoutEffect(() => {
    const random1 = generateRandom(getEmptyBoard());
    const random2 = generateRandom(random1);

    setBoard(random2);
  }, []);

  const checkEndGame = () => {
    if (checkWin(board)) {
      alert('You win!');
    } else if (isOver(board)) {
      alert('Game over!');
    }
  };

  const left = () => {
    const newBoard = moveLeft(board);
    setBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const right = () => {
    const newBoard = moveRight(board);
    setBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const up = () => {
    const newBoard = moveUp(board);
    setBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const down = () => {
    const newBoard = moveDown(board);
    setBoard(generateRandom(newBoard));
    checkEndGame();
  };

  const handleNewGame = () => {
    const random1 = generateRandom(getEmptyBoard());
    const random2 = generateRandom(random1);

    setBoard(random2);
    resetScore();
  };

  return (
    <View style={styles.container}>
      <View style={styles.scoresContainer}>
        <View style={styles.score}>
          <Text style={styles.scoreTitle}>Score</Text>
          <Text style={styles.scoreText}>{score}</Text>
        </View>
      </View>
      <GestureRecognizer
        style={styles.screenStyle}
        onSwipeLeft={left}
        onSwipeRight={right}
        onSwipeUp={up}
        onSwipeDown={down}>
        <View style={styles.boardStyle}>
          {board.map((row, rowIndex) => (
            <View key={`cell-${rowIndex}`} style={styles.rowStyle}>
              {row.map((value, cellIndex) => (
                <View key={`cell-${cellIndex}`} style={styles.cellStyle}>
                  {value > 0 ? (
                    <Image
                      source={GameData.find(e => e.value === value)?.img}
                      style={styles.imgStyle}
                    />
                  ) : null}
                </View>
              ))}
            </View>
          ))}
        </View>
      </GestureRecognizer>
      <View style={styles.btnContainer}>
        <Button title="New Game" color="#fe8a71" onPress={handleNewGame}>
          New Game
        </Button>
      </View>
    </View>
  );
};

export default Board;
