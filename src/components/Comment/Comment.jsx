import React, { useState } from "react";
import styles from "./Comment.module.css"

let key = 0;
const Comment = () => {
  const [submittedForm, setSubmittedForm] = useState([]);
  function onSubmit(e) {
    e.preventDefault();
    if (validateRequiredForm()) {
      const comment = new FormData(e.target);
      if (validateEmail(comment.get("email"))) {
        if (validateAge(comment.get("age"))) {
          console.log("Response", comment.get("response"));
          setSubmittedForm(submittedForm.concat(result(comment)));
          document.getElementById("form").reset()
        }
      }
    }
  };

  function validateRequiredForm() {
    let name = document.forms["comment"]["name"].value;
    let email = document.forms["comment"]["email"].value;
    let content = document.forms["comment"]["content"].value;

    if (name == null || name === "") {
      alert("Name is required!");
      return false;
    } else {
      if (email == null || email === "") {
        alert("Email is required!");
        return false;
      } else {
        if (content == null || content === "") {
          alert("Content is required!");
          return false;
        } else {
          return true;
        }
      }
    }
  }

  function validateEmail(email) {
    let re = /\S+@\S+\.\S+/;
    if (re.test(email)) {
      return true;
    } else {
      alert("Wrong Email Format!");
      return false;
    };
  }

  function validateAge(age) {
    let re = /^[1-9][0-9]?$|^100$/;
    if (re.test(age) || age == null || age === "") {
      return true;
    } else {
      alert("Age should be between 1 and 100!");
      return false;
    };
  }


  function result(form) {
    console.log(form);
    let result = (
      <div key={key++}>
        <p>Name: {form.get("name")}, Email: {form.get("email")}, Country: {form.get("country")}</p>
        <p>Age: {form.get("age")}, Gender: {form.get("genderDropdown")}, Job: {form.get("jobDropdown")}</p>
        <p>Response: {form.get("response")}</p>
        <p>Content: {form.get("content")}</p>
      </div>
    )
    return result;
  }

  return (
    <div className={styles.comment_container}>
      <h2 className={styles.title}>Comment</h2>
      {
        (
          <div>
          <form id="form" className={styles.form} name="comment" onSubmit={onSubmit}>

            <div className={styles.text}>
              <label htmlFor="name">Name:</label>
              <input type="text" name="name" id="name" placeholder="Required" />
            </div>

            <div className={styles.text}>
              <label htmlFor="email">Email:</label>
              <input type="email" name="email" id="email" placeholder="Required and Validated"></input>
            </div>

            <div className={styles.text}>
              <label htmlFor="country">Country:</label>
              <input type="text" name="country" id="country"></input>
            </div>

            <div className={styles.text}>
              <label htmlFor="age">Age:</label>
              <input type="text" name="age" id="age" placeholder="Validated (1-100)"></input>
            </div>

            <div className={styles.dropdown}>
              <label htmlFor="gender">Gender:</label>
              <select name="genderDropdown" id="gender">
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.dropdown}>
              <label htmlFor="job">Job:</label>
              <select name="jobDropdown" id="job">
                <option value="programmer">Programmer</option>
                <option value="designer">Designer</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className={styles.radio}>
              <label>Response:</label>
              <label htmlFor="responseGood"><span role="img" aria-label="Good">👍</span></label>
              <input type="radio" name="response" id="responseGood" value="👍" />
              <label htmlFor="responseFair"><span role="img" aria-label="Fair">🤔</span></label>
              <input type="radio" name="response" id="responseFair" value="🤔" />
              <label htmlFor="responseBad"><span role="img" aria-label="Bad">👎</span></label>
              <input type="radio" name="response" id="responseBad" value="👎" />
            </div>

            <div className={styles.comment_content}>
              <label htmlFor="commentContent">Content</label>
              <textarea name="content" rows="4" cols="50" id="commentContent" placeholder="Required" />
            </div>
            <input className={styles.button} type="submit" value="Send" />
          </form>
          </div>
        )
      }
      {(
        submittedForm ? submittedForm : null)
      }
    </div>
  )
}

export default Comment
