import styled from 'styled-components';

const StyledDisplay = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // border: solid red 1px;
    flex-wrap: wrap;
    justify-content: center;
    font-family: Roboto;
    align-items: start;
`

const StyledImgProduct = styled.div`

    margin: 40px 30px;
    // border: solid black 1px;
    img {
        height: 650px;
        width: 510px;
        // border: solid black 1px;    
      
    }
    
`
const StyledProdDetailsDescrip = styled.div`
    margin-top: 100px;
    padding: 20px;
    display: flex;
    max-width: 1000px;
    min-height: 600px;  
    flex-direction: column;
    align-items: center;
    margin-right: 40px;
    // border: solid black 1px;
    text-align: center;
    font-size:35px;
  
`

const StyledTitle = styled.p`
    font-size: 35px;
    font-weight: bold;
    text-transform: uppercase;
    color: black;
    
`

const StyledDetailsText = styled.div`
    font-size: 27px;
    color: gray;
    text-align: center;
    justify-content: center;
    margin: 10px 60px;
    padding: 35px 80px;
    // border: solid red 1px;
`

export {
    StyledDisplay,
    StyledTitle,
    StyledImgProduct,
    StyledProdDetailsDescrip,
    StyledDetailsText,
    
}

