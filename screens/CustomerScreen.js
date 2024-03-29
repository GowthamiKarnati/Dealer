import { View, Text, SafeAreaView, StyleSheet, ScrollView } from 'react-native';
import React from 'react'
import AppBar from '../components/CustomerComponents/AppBar';
import Details from '../components/CustomerComponents/Details';
import { useRoute } from '@react-navigation/native';
import EmiComponent from '../components/CustomerComponents/EmiComponent';
import CustomerKYC from '../components/CustomerComponents/CustomerKYC';
import ActiveApplications from '../components/CustomerComponents/ActiveApplications';
const CustomerScreen = () => {
  const route = useRoute();
  //const { customerData } = route.params || {};
  return (
    <SafeAreaView style={styles.container}>
      
      <AppBar   />
      <ScrollView >
      <Details   />
      <ActiveApplications />
      <CustomerKYC />
      <EmiComponent />
      </ScrollView>
    </SafeAreaView>
  )
}
const styles=StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'#f3f4f6'
    }
  });
export default CustomerScreen