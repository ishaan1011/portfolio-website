import React, { useState } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiOutlineDownload,
  AiOutlineInstagram,
  AiOutlineMail,
} from "react-icons/ai";
import { Button, Input, Textarea } from "../../components/form";
import { Page } from "../../components/Page";
import { blue, green, mindaro, pink, red, thistle, vanilla, yellow } from "../../utils";
import {
  ContactForm,
  ContactWrapper,
  DownloadButton,
  IconButton,
} from "./Contact.styled";

export const Contact = () => {
  const [form, setFormState] = useState({ name: "", email: "", message: "" });
  return (
    <Page header="Contact">
      <ContactWrapper>
          <ContactForm
            action="https://formspree.io/f/mandlrjq"
            method="POST"
            name="contact"
            id="contactform"
          >
          <Input
            placeholder="Name"
            type="text"
            name="name"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, name: e.target.value }));
            }}
            value={form.name}
          />
          <Input
            placeholder="Email"
            type="email"
            name="email"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, email: e.target.value }));
            }}
            value={form.email}
          />
          <Textarea
            lines={15}
            placeholder="Hi! How are you?"
            name="message"
            onChange={(e) => {
              setFormState((prev) => ({ ...prev, message: e.target.value }));
            }}
            value={form.message}
          />
          <Button
            type="submit"
            disabled={
              form.email.length <= 0 ||
              form.name.length <= 0 ||
              form.message.length <= 0
            }
          >
            Submit
          </Button>
        </ContactForm>
        <div className="buttons">
          <div className="socials">
            <a
              href="https://www.linkedin.com/in/ishaanchadha-ucsd/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton bg={blue}>
                <AiFillLinkedin size={40} />
              </IconButton>
            </a>

            <a href="mailto:ichadha.work@gmail.com">
              <IconButton bg={mindaro}>
                <AiOutlineMail size={40} />
              </IconButton>
            </a>

            <a
              href="https://github.com/ishaan1011"
              target="_blank"
              rel="noopener noreferrer"
            >
              <IconButton bg={vanilla}>
                <AiFillGithub size={40} />
              </IconButton>
            </a>

            <a
              href="https://drive.google.com/file/d/1hZLs4cTKE0ZDcPaBL8DNub2wR6VjnGOr/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <DownloadButton bg={pink} tooltip="Download Resume">
                <AiOutlineDownload size={40} />
                <span>Resume</span>
              </DownloadButton>
            </a>
          </div>
        </div>
      </ContactWrapper>
    </Page>
  );
};
