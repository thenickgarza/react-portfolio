import React from "react";



function ContactMe() {

    return (
        <section className="contactmecontainer">
            <form id="contact-form" >
                <div>
                <h1 style={{display: "flex", justifyContent: "center", color: "#CFCFCF"}}>Contact me</h1>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                    <label htmlFor="email">Email address:</label>
                    <input type="email" name="email" style={{width: "-webkit-fill-available"}} />
                </div>
                <div>
                    <label htmlFor="message">Message</label>
                    <textarea name="message" rows="5"/>
                </div>
                <button type="submit" style={{justifyContent: "center"}}>Send! </button>
            </form>
        </section>
    )
}

export default ContactMe;