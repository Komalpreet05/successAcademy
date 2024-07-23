import React from 'react'
import './Contact.css'
import { FaArrowRight } from 'react-icons/fa'

const Contact = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "51e19f78-c14a-4901-9bff-f1300d454c9a");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };

    return (
        <div className='contact'>
            <div className="contact-col">
                <h3>Send us a message <img src="/images/msg-icon.png" alt="msgIcon" /> </h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia fuga perferendis incidunt repudiandae ab enim, similique rerum id assumenda accusantium animi! Tempore ea delectus ad molestiae culpa cum perspiciatis neque.</p>
                <ul>
                    <li> <img src="/images/mail-icon.png" alt="" /> Successacademyworld@gmail.com</li>
                    <li> <img src="/images/phone-icon.png" alt="" /> +12897892566</li>
                    <li> <img src="/images/location-icon.png" alt="" />  Toronto, ON, Canada</li>
                </ul>
            </div>

            <div className="contact-col">
                <form onSubmit={onSubmit}>
                    <label htmlFor="">Your Name</label>
                    <input type="text" name='name' placeholder='Enter Your Name' required />

                    <label htmlFor="">Phone Number</label>
                    <input type="tel" name="phone" id="" placeholder='Enter Your Contact Number' required />

                    <label htmlFor="">Write Your Message Here</label>
                    <textarea name="message" id="" rows={6} placeholder='Enter Your Message' required></textarea>

                    <button type='submit' className='btn btn-contact'>Submit Now <FaArrowRight /></button>
                </form>
                <span>{result}</span>
            </div>
        </div>
    )
}

export default Contact
