import React, { useState } from "react";

const Form = () => {
  const [fields, setfields] = useState([
    {
      name: "LinkedIn",
      type: "text",
      placeholder: "Enter your LinkedIn username",
      id: "linkedin",
    },
    {
      name: "What do you expect to learn from here?",
      type: "text",
      placeholder: "What do you expect to learn from here?",
      id: "learn",
    },
  ]);

  return (
    <>
      <div className="container">
        <form>
          <div className="input">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Enter your name" />
          </div>

          <div className="input">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email address"
            />
          </div>

          <div className="input">
            <label htmlFor="phone">Phone</label>
            <input
              type="number"
              id="phone"
              placeholder="Enter your mobile no"
            />
          </div>

          {fields.map((field) => {
            return (
              <div className="input">
                <label htmlFor={field.id}>{field.name}</label>
                <input
                  type={field.type}
                  id={field.id}
                  placeholder={field.placeholder}
                />
              </div>
            );
          })}
        </form>
      </div>
    </>
  );
};

export default Form;
