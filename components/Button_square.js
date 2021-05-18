import React from 'react'
import {View,Button,Text} from 'native-base'

const Button_square =({square_button})=>{


    return(
<View style={{ justifyContent: "center",}}>
        <Button style={{ width: 186,
            height: 28.5,
            backgroundColor: "#61eaf2"
            
            
            }}>
        <Text>{square_button} </Text>
      </Button></View>
    )
}

export default Button_square