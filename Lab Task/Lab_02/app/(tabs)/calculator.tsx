import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'

const Calculator = () => {
    const [input, setInput] = useState("0")
    const [prevValue, setPrevValue] = useState<number | null>(null)
    const [operator, setOperator] = useState<string | null>(null)

    const buttons = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "C", "="]
    const operations = ["+", "-", "*", "/"]

    const handlePress = (val: any) => {
        if (val === "C") {
            setInput("0")
            setPrevValue(null)
            setOperator(null)
        } else if (operations.includes(val)) {
            setPrevValue(parseFloat(input))
            setOperator(val)
            setInput("0")
        } else if (val === "=") {
            const current = parseFloat(input)
            let res = 0
            if (operator === "+" && prevValue !== null) res = prevValue + current
            if (operator === "-" && prevValue !== null) res = prevValue - current
            if (operator === "*" && prevValue !== null) res = prevValue * current
            if (operator === "/" && prevValue !== null) res = prevValue / current
            setInput(res.toString())
            setPrevValue(null)
            setOperator(null)
        } else {
            setInput(prev => (prev === "0" ? val : prev + val))
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.screen}>
                <Text style={styles.screenText}>{input}</Text>
            </View>

            <View style={styles.mainRow}>
                {/* Left Side: Numbers 3x3 Grid */}
                <View style={styles.numberGrid}>
                    {buttons.map((btn) => (
                        <Pressable style={styles.btn} key={btn} onPress={() => handlePress(btn)}>
                            <Text style={styles.btnText}>{btn}</Text>
                        </Pressable>
                    ))}
                </View>

                {/* Right Side: Operations Column */}
                <View style={styles.operationColumn}>
                    {operations.map((op) => (
                        <Pressable style={[styles.btn, styles.opBtn]} key={op} onPress={() => handlePress(op)}>
                            <Text style={styles.btnText}>{op}</Text>
                        </Pressable>
                    ))}
                </View>
            </View>
        </View>
    )
}

export default Calculator

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        padding: 10
    },
    screen: {
        backgroundColor: '#eee',
        padding: 30,
        borderRadius: 10,
        marginBottom: 20,
        alignItems: 'flex-end'
    },
    screenText: {
        fontSize: 40,
        fontWeight: 'bold'
    },
    mainRow: {
        flexDirection: 'row', // Is se numbers aur operations side-by-side aayenge
        justifyContent: 'space-between'
    },
    numberGrid: {
        flexDirection: 'row',
        flexWrap: 'wrap', // Is se 3 buttons ke baad niche line change hogi
        width: '75%', 
    },
    operationColumn: {
        flexDirection: 'column',
        width: '25%',
        alignItems: 'center'
    },
    btn: {
        backgroundColor: '#333',
        width: 70,
        height: 70,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    opBtn: {
        backgroundColor: '#FF9500', // Operations ko thora alag color de diya
    },
    btnText: {
        color: "#fff",
        fontSize: 25,
        fontWeight: 'bold'
    }
})