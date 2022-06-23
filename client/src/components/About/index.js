import React from "react";

function About() {
    return (
        <div className="container">
  <div>
    <h2>Contact Me</h2>
    <p>You can contact me below! I look forward to hearing from you!</p>
  </div>
  <div className="row">
    <div className="column">
      <img src="/w3images/map.jpg" alt="default"/>
    </div>
    <div className="column">
      <form action="/action_page.php">
        <label for="fname">First Name</label>
        <input type="text" id="fname" name="firstname" placeholder="Your name.."/>
        <label for="lname">Last Name</label>
        <input type="text" id="lname" name="lastname" placeholder="Your last name.."/>
        <label for="country">Country</label>
        <select id="country" name="country">
          <option value="usa">USA</option>
          <option value="canada">Canada</option>
          <option value="australia">Australia</option>
        </select>
        <label for="subject">Subject</label>
        <textarea id="subject" name="subject" placeholder="Write something.."></textarea>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  </div>
</div>
    )
}

export default About;