import React, { useState } from 'react';
import {View, Text, Modal, StyleSheet, Pressable, Dimensions} from 'react-native';
import { COLOR_BORDER, COLOR_PRIMARY } from '../../constants';
const Detail = (props) =>{
  let {title, detail, dateCreated}= props;
  const [modalVisible, setModalVisible] = useState(false);
    return(
      <View style={styles.container}>
        <Text style={styles.Title}>
          {title}
        </Text>
        <Text style={styles.Date}>
          {dateCreated}
        </Text>
        <Text style={styles.Details}>
          {detail}
        </Text>
          
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert("Modal has been closed.");
            setModalVisible(!modalVisible);
        }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
                <Text style={styles.modalText}>Chúng tôi sẽ gửi thông tin của bạn đến bệnh viện. 
                  Nếu phù hợp, bệnh viện sẽ liên lạc lại với bạn.</Text>
              <View style={styles.press}>
                <Pressable
                  style={styles.buttonClose}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={[styles.textStyle,{color:COLOR_PRIMARY}]}>Bỏ qua</Text>
                </Pressable>
                  
                <Pressable
                  style={styles.buttonOk}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Đồng ý</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
        <View style={{marginTop:20}}>
          <Pressable
            style={[styles.button]}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.textStyle}>Tôi có thể hỗ trợ</Text>
          </Pressable>
        </View>
      </View>      
    )
}
const styles = StyleSheet.create({
      container: {
        flex: 2,
        padding: 10,
        borderColor: '#ccc',
        borderWidth: 1,
        borderLeftWidth: 0,
        borderTopRightRadius: 20,
        borderTopLeftRadius: 20,
        backgroundColor: 'white',
        marginTop: -20,
        padding: 20,
        paddingBottom: Dimensions.get('window').height/2,
      },
      Title: {
        fontWeight: 'bold',
        fontSize: 14
      },
      Details: {
        fontSize: 14,
        color: '#444',
      },
      Date: {
        fontSize: 10,
        color: 'grey',
      },
      txtButton:{
        fontSize: 12,
        color: COLOR_BORDER
      },
      modal:{
        height:50,
        margin: 100,
        backgroundColor: COLOR_BORDER,
        flex:1,
        borderRadius: 4,
        padding:40
      },
      centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
      },
      modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 10,
        padding: 20,
        width: 300,
        height: 148,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
      },
      press:{
        flexDirection:'row'
      },
      button: {
        borderRadius: 5,
        padding: 10,
        elevation: 3,
        backgroundColor: COLOR_PRIMARY
      },
      buttonClose: {
        backgroundColor: '#fff',
        marginRight:10,
        borderRadius: 5,
        width: 129,
        height: 40,
        padding: 10,
        borderWidth: 1, 
        borderColor: COLOR_PRIMARY
      },
      buttonOk:{
        borderRadius: 5,
        padding: 10,
        backgroundColor: COLOR_PRIMARY,
        width: 129,
        height: 40,
      },
      textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center",
      },
      modalText: {
        width: 268,
        height: 48,
        marginTop: 20,
        marginBottom: 14,
        marginLeft: 16,
        marginRight: 16,
        fontSize: 12,
        fontWeight: '400',
        lineHeight: 16,
        textAlign: "left"
      }
  });

  export default Detail;
