import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Grid, Row, Col } from "react-flexbox-grid";
import "../../pages/Contacts/contact.scss";

export const Contacts = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6gc9wib",
        "template_0dqbpb8",
        form.current,
        "dT_SnZgOw2mqdSEB8"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <Grid>
      <Row>
        <Col md={6} className="form_border">
          <h4>Form Title</h4>
          <Row center="xs">
            <form ref={form} onSubmit={sendEmail} className="form_width">
              <input type="text" name="user_name" placeholder="Name" required />
              <input
                type="email"
                name="user_email"
                placeholder="Email"
                required
              />
              <textarea name="message" placeholder="Message" />
              <input type="submit" value="Send" />
            </form>
          </Row>
        </Col>
      </Row>
    </Grid>
  );
};

export default Contacts;
