import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    height: 600px;
    width : 700px;
    background-color:#f4ecd9 ;
    justify-content:center
    padding: 10px auto;
    margin: 30px auto;
    border: double;
    border-radius: 10px;
    box-shadow: 3px 3px 3px 3px black;
    overflow: hidden;
    label{
      padding:5px;
      margin-left: 350px;
    }
    @media (max-width: 930px) {
        margin: 30px 100px;
      }

     @media (max-width: 1400px) {

        margin: 200px 3 00px;
      }
      Button{
     margin-left: 370px;
     margin-top: 10px;
     width:280px;
     }
     form{
      position:relative;
      bottom:40px;
     }
`;

export const SingupLinker = styled.a`
  position: relative;
  left: 410px;
  bottom: 40px;
  width: 300px;
  font-size: 14px;
  color: grey;
  cursor: pointer;
`;

export const LabelTitle = styled.label`
  position: relative;
  padding: 0;
  top: 5px;
  right: 160px;
  font-size: 36px;
  font-weight: bold;
`;

export const Imagecontainer = styled.img`
  position: relative;
  height: 100px;
  width: 100px;
  left: 30px;
  bottom: 57px;
`;

export const StampImage = styled.img`
  position:relative;
  top:-120px;
  left:570px;
  height:100px;
  width:100px;
}`;

export const LettersImage = styled.img`
  position:relative;
  top:70px;
  left:50px;
  height:100px;
  width:250px;
}`;
