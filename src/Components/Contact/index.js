import React from 'react'
// import "./style.css";
import { ContactSection, ContactTitle, Form,FormInput,Input,InputEmail,InputExp,InputSubmit,InputText,Span,TextArea} from "./style.js"
import Footer from './../Footer';

const Contact = () => {
  return (
    //React.Fragment == Div Parent w ma byezhar div bel element
    <React.Fragment>

        <ContactSection>
            <div className="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form action='' >
                    <FormInput>
                        <InputText type="text" placeholder="Your Name" />
                        <InputEmail type="email" placeholder="Your Email" />
                    </FormInput>
                    <InputExp type="text" class="sub" placeholder="Your Subject" />
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message" />
                </Form>
            </div>
        </ContactSection>
        
        <Footer />

        </React.Fragment>
  )
}

export default Contact;
