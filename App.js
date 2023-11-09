import React, { useState } from 'react'; 
import { View, Text, TextInput, TouchableOpacity, ScrollView } from 'react-native'; 
import { styles } from "./styles"; 
  
export default function BillSplitter() { 
  const [billAmount, setBillAmount] = useState(''); 
  const [customTip, setCustomTip] = useState(''); 
  const [numberOfPeople, setNumberOfPeople] = useState(''); 
  const [tipPercentage, setTipPercentage] = useState(0); 
  const [tipAmount, setTipAmount] = useState(''); 
  const [totalBill, setTotalBill] = useState(''); 
  const [eachPersonBill, setEachPersonBill] = useState(''); 
  
  const handleBillAmountChange = (value) => { 
    const amount = parseFloat(value); 
  
    if (!isNaN(amount) && amount >= 0) { 
      setBillAmount(value); 
    } else { 
      // Handle negative or invalid input 
      setBillAmount(''); 
    } 
  }; 
  
  const handleCustomTipChange = (value) => { 
    const custom = parseFloat(value); 
  
    if (!isNaN(custom) && custom >= 0) { 
      setCustomTip(value); 
      setTipPercentage(custom); 
      setTipAmount(''); 
      setTotalBill(''); 
      setEachPersonBill(''); 
    } else { 
      // Handle negative or invalid input 
      setCustomTip(''); 
    } 
  }; 
  
  const handleNumberOfPeopleChange = (value) => { 
    const people = parseInt(value); 
  
    if (!isNaN(people) && people >= 0) { 
      setNumberOfPeople(value); 
    } else { 
      // Handle negative or invalid input 
      setNumberOfPeople(''); 
    } 
  }; 
  
  const handleTipButtonClick = (percentage) => { 
    setTipPercentage(percentage); 
    setCustomTip(percentage.toString()); // Set the custom tip input to the selected percentage 
  }; 
  
  const calculateBill = () => { 
    if (!billAmount || !numberOfPeople || !tipPercentage) {
      alert('Please fill out all required fields');
      return;
    }

    const bill = parseFloat(billAmount); 
    const tip = (bill * tipPercentage) / 100; 
    const total = bill + tip; 
    const eachPerson = total / parseFloat(numberOfPeople); 
  
    setTipAmount(`$${tip.toFixed(2)}`); 
    setTotalBill(`$${total.toFixed(2)}`); 
    setEachPersonBill(`$${eachPerson.toFixed(2)}`); 
  }; 

  const handleReset = () => {
    setBillAmount('');
    setCustomTip('');
    setNumberOfPeople('');
    setTipPercentage(0);
    setTipAmount('');
    setTotalBill('');
    setEachPersonBill('');
  };
  
  return ( 
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Tip Calculator</Text>  
      <View style={styles.billInput}> 
        <Text style={styles.text} >Bill</Text> 
        <View style={styles.inputContainer}> 
          <Text >$</Text> 
          <TextInput 
            style={styles.input}
            placeholder="Bill Amount" 
            keyboardType="numeric"
            value={billAmount} 
            onChangeText={handleBillAmountChange} 
          /> 
        </View> 
        <Text  style={styles.text} >Select Tip</Text> 
        <View style={styles.tipContainer}> 
          <TouchableOpacity 
            style={[styles.tip, tipPercentage === 5 ? styles.selected : null]} 
            onPress={() => handleTipButtonClick(5)} 
          > 
            <Text style={styles.tipText} >5%</Text> 
          </TouchableOpacity> 
          <TouchableOpacity 
            style={[styles.tip, tipPercentage === 10 ? styles.selected : null]} 
            onPress={() => handleTipButtonClick(10)} 
          > 
            <Text  style={styles.tipText}>10%</Text> 
          </TouchableOpacity> 
          <TouchableOpacity 
            style={[styles.tip, tipPercentage === 15 ? styles.selected : null]} 
            onPress={() => handleTipButtonClick(15)} 
          > 
            <Text  style={styles.tipText}>15%</Text> 
          </TouchableOpacity> 
          <TouchableOpacity 
            style={[styles.tip, tipPercentage === 18 ? styles.selected : null]} 
            onPress={() => handleTipButtonClick(18)} 
          > 
            <Text  style={styles.tipText}>18%</Text> 
          </TouchableOpacity> 
          <TouchableOpacity 
            style={[styles.tip, tipPercentage === 20 ? styles.selected : null]} 
            onPress={() => handleTipButtonClick(20)} 
          > 
            <Text  style={styles.tipText}>20%</Text> 
          </TouchableOpacity> 
          <TouchableOpacity 
            style={[styles.tip, tipPercentage === 25 ? styles.selected : null]} 
            onPress={() => handleTipButtonClick(25)} 
          > 
            <Text  style={styles.tipText}>25%</Text> 
          </TouchableOpacity> 
        </View> 
        <TextInput 
          style={styles.customTip} 
          placeholder="Custom Tip in Percentage"
          keyboardType="numeric"
          value={customTip} 
          onChangeText={handleCustomTipChange} 
        /> 
        <Text  style={styles.text} >Number of People</Text> 
        <TextInput 
          style={styles.numberOfPeople} 
          placeholder="Number of people"
          keyboardType="numeric"
          value={numberOfPeople} 
          onChangeText={handleNumberOfPeopleChange} 
        /> 
        <TouchableOpacity 
          style={styles.generateBillBtn} 
          onPress={calculateBill} 
        > 
          <Text style={styles.generateBillBtnText}>Generate Bill</Text> 
        </TouchableOpacity> 
      </View> 
      <View style={styles.billOutput}> 
        <Text style={styles.tipAmount}> 
          Tip amount <Text style={styles.value}>{tipAmount}</Text> 
        </Text> 
        <Text style={styles.total}> 
          Total <Text style={styles.value}>{totalBill}</Text> 
        </Text> 
        <Text style={styles.eachPersonBill}> 
          Each Person Bill <Text style={styles.value}>{eachPersonBill}</Text> 
        </Text> 
        <TouchableOpacity 
          style={styles.resetBtn} 
          onPress={handleReset}
          disabled={!billAmount} 

        > 
          <Text style={styles.resetBtnText}>Reset</Text> 
        </TouchableOpacity> 
      </View> 
    </ScrollView> 
  ); 
}