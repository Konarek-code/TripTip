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
    @media (max-width: 800px) {
        width:350px;
      }

     Button{
     margin-left: 370px;
     margin-top: 10px;
     width:280px;
     @media (max-width: 800px) {
      margin:15px auto;
      }
     }
`;

export const SingupLinker = styled.a`
  margin: 5px 400px;
  width: 300px;
  font-size: 14px;
  color: grey;
  cursor: pointer;
  @media (max-width: 800px) {
    margin: 15px auto;
    width: 200px;
  }
`;

export const LabelTitle = styled.label`
  position: relative;
  padding: 0;
  top: 5px;
  right: 160px;
  font-size: 36px;
  font-weight: bold;

  @media (max-width: 800px) {
    right: 275px;
  }
`;

export const Imagecontainer = styled.img`
  position: relative;
  height: 100px;
  width: 100px;
  left: 30px;
  bottom: 60px;
  @media (max-width: 800px) {
    display: none;
  }
`;

export const StampImage = styled.img`
  position:relative;
  top:-120px;
  left:570px;
  height:100px;
  width:100px;

  @media (max-width: 800px) {
      height:70px;
    width:70px;
        top:-80px;
         left:260px;
      }
}`;

export const LettersImage = styled.img`
  position:relative;
  top:70px;
  left:50px;
  height:100px;
  width:250px;
    @media (max-width: 800px) {
        display:none
      }
}`;
