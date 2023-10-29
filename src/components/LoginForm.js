import React from 'react';
import styled from 'styled-components';


const Container = styled.div`
  display: flex;

  justify-content:"space-evenly";

  padding:40px;

  @media(max-width:600px){
   flex-direction
   :column;
   justify-content:center;
   align-items:center
  }
`;

const Image = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  /* height:90vh */
`;

const Heading = styled.h1`
text-align:center;
//styleName: Heading 1 - Bold - 48;
font-size: 48px;
font-weight: 700;
line-height: 53px;
letter-spacing: 0em;
color:rgba(4, 7, 47, 1);


`
const FormContainerwrapper = styled.div`

padding:40px;
`
const FormContainer = styled.div`
/* height: 90vh; */
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius:12px;
  box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
width:1047px;


@media(max-width:600px){
width:100%;

}
`;

const Form = styled.form`
  
  text-align: center;
    padding: 40px 87px 40px 87px;
    width: 87%;

`;

const Input = styled.input`
  width: 100%;
  margin: 10px 0;
  padding: 10px;
 font-family:poppins;
height: 56px;
border-radius: 8px;
border: 1px solid rgba(4, 7, 47, 0.4);

font-size: 18px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

@media(max-width:600px){
    width: 90%;
}

`

const Label = styled.label`
 
  color: rgba(115, 123, 134, 1);
  //styleName: Body Light - Regular - 18;

font-size: 18px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: left;
display:flex;
align-items:center

`;
const LableWrapper = styled.div`
color:rgba(4, 7, 47, 1);
font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
text-align: left;

`
const Checkbox = styled.input`
  margin-right: 5px;
  border: 1px solid rgba(115, 123, 134, 1)


`;
const Checkboxwrapper = styled.div`
text-align: left
`

const Checkboxwrapperfirst = styled.div`
display
:flex;
justify-content:space-between;
`
const Pschange = styled.span`
//styleName: Body Light - Regular - 18;
color: rgba(247, 135, 25, 1);

font-size: 18px;
font-weight: 400;
line-height: 20px;
letter-spacing: 0em;
text-align: right;

`

const Terms = styled.span`
color:rgba(247, 135, 25, 1);
text-decoration:underline
`
const Button = styled.button`
width: 538px;
height: 56px;
background-color:rgba(21, 117, 167, 1);
border-radius: 8px;
border: none;
  cursor: pointer;
  font-family:poppins;
//styleName: Button - Medium - 18;

font-size: 18px;
font-weight: 500;
line-height: 20px;
letter-spacing: 0em;
/* text-align: left; */
color: rgba(255, 255, 255, 1);
margin-top:40px
;
@media(max-width:600px){
    width:70%
}

`;

const StyledImage = styled.img`
  
  width: 200px; 
  height: auto;
`;

const Para = styled.p`
 


font-size: 18px;
font-weight: 400;
line-height: 27px;
letter-spacing: 0em;

color:rgba(4, 7, 47, 1)
  `

const Span2 = styled.span`


  font-family: Poppins;
font-size: 18px;
font-weight: 700;
line-height: 27px;
letter-spacing: 0em;
text-decoration:underline;

color:rgba(247, 135, 25, 1)


  `
function LoginForm() {
    return (
        <Container>
            <Image>
                <StyledImage src="./images/formsidesvg.svg" alt="Login Image" />
            </Image>
            <FormContainerwrapper>
                <FormContainer>
                    <Heading>Login</Heading>
                    <Form>
                        <LableWrapper>
                            <Label htmlFor="loginId">Login ID</Label>
                        </LableWrapper>

                        <Input type="text" id="loginId" placeholder="Enter Login ID" />
                        <LableWrapper>
                            <Label htmlFor="password">Password</Label>
                        </LableWrapper>

                        <Input type="password" id="password" placeholder="Enter Password" />

                        <Checkboxwrapperfirst>
                            <Label>
                                <Checkbox type="checkbox" id="rememberMe" /> Remember me
                            </Label>

                            <Pschange>change password</Pschange>
                        </Checkboxwrapperfirst>

                        <Checkboxwrapper>
                            <Label>
                                <Checkbox type="checkbox" id="agreeToTerms" /> Agree to <Terms>Terms & Conditions</Terms>
                            </Label>
                        </Checkboxwrapper>



                        <Button type="submit">Login</Button>

                        <Para>Don't have an account? <Span2>Register Here</Span2> </Para>
                    </Form>
                </FormContainer>
            </FormContainerwrapper>
        </Container>
    );
}

export default LoginForm;



