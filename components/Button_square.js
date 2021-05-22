import React from 'react'
import {View,Button,Text} from 'native-base'

const Button_square =({square_button})=>{


    return(
<View style={{alignSelf:'center'}}>
        <Button style={{ width: 186,
            height: 48,
            backgroundColor: "#61eaf2",justifyContent:'center'
            
            
            }}>
        <Text>{square_button} </Text>
      </Button></View>
    )
}

export default Button_square