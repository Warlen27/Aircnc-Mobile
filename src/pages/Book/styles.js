import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  margin: 30px;
`;

export const Label = styled.Text`
   font-weight: bold;
   color: #444;
   margin-bottom: 8px;
   margin-top: 30px;
`;

export const Form = styled.View`
   align-self: stretch;
   padding: 0 30px;
   margin-top: 30px;
   
`;

export const Input = styled.TextInput`
   border: 1px #ddd solid;
   padding: 0 20px;
   font-size: 16px;
   color: #444;
   height: 44px;
   margin-bottom: 20px;
   border-radius: 2px;
   
`;

export const Button = styled.TouchableOpacity`
   height: 42px;
   background-color: #fe5a5b;
   justify-content: center;
   align-items: center;
   border-radius: 2px;
   
`;

export const ButtonText = styled.Text`
   color: #fff;
   font-weight: bold;
   font-size: 16px;
   
`;

export const CancelButton = styled.TouchableOpacity`
   height: 42px;
   background-color: #ccc;
   justify-content: center;
   align-items: center;
   border-radius: 2px
   margin-top: 10px;
   
`;


