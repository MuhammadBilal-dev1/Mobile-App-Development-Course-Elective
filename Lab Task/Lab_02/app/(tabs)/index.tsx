import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const [second, setSecond] = useState(0);
  const [minute, setMinute] = useState(0);
  const [hour, setHour] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setSecond(prevSec => {
        if (prevSec === 59) {
          // Jab 60 hone wale hon, tab minute barhao aur second 0 kardo
          setMinute(prevMin => {
            if (prevMin === 59) {
              setHour(prevHr => prevHr + 1);
              return 0;
            }
            return prevMin + 1;
          });
          return 0;
        }
        return prevSec + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 20 }}>Simple Timer</Text>
      <Text style={styles.timerText}>
        {hour < 10 ? `0${hour}` : hour}:{minute < 10 ? `0${minute}` : minute}:{second < 10 ? `0${second}` : second}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  timerText: {
    fontSize: 60,
    fontWeight: 'bold',
    color: '#333',
  },
});