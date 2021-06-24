import { Dimensions, StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#F6D6FF",
      alignItems: "center",
      justifyContent: "center",
    },

    mainView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },

    scrollContainer: {
        paddingTop: 300,
    },
   
    inputView: {
      marginVertical: 10,
      backgroundColor: "#FF4263",
      borderRadius: 30,
      width: "80%",
      height: 45,
      alignItems: "center",
    },
   
    TextInput: {
      height: 50,
      flex: 1,
      padding: 10,
      marginLeft: 20,
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 40,
      backgroundColor: "#C14EE3",
    },
});
