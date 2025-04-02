import { useState } from 'react';
import { useNavigate } from 'react-router';


const initialState = {
    mailboxId: '',
    recipient: '',
    message: '',
};

const LetterForm = (props) => {
    const [letterData, setletterData] = useState(initialState);
    const navigate = useNavigate();


    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addLetter(letterData);
        setletterData(initialState);
        navigate(`/mailboxes/${letterData.mailboxId}`); // to ‘MailboxDetails’ page
    };

    const handleChange = (evt) => {
        setletterData({
            ...letterData,
            [evt.target.name]: evt.target.value
        });
    };

    return (
        <main>
            <h1>New Letter</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="mailboxId">Select a Mailbox:</label>
                <select
                    type="number"
                    id="mailboxId"
                    name="mailboxId"
                    value={letterData.mailboxId}
                    onChange={handleChange}
                // placeholder="Select a Mailbox"

                >
                    <option>Select a Mailbox</option>
                    {props.mailboxes.map((mailbox) => (
                        <option
                            key={mailbox._id}
                            value={mailbox._id}                        >
                            Mailbox {mailbox._id}
                        </option>
                    ))}
                </select>

                <label htmlFor="recipient">Recipient:</label>
                <input
                    type="text"
                    id="recipient"
                    name="recipient"
                    placeholder="Recipient name"
                    value={letterData.recipient}
                    onChange={handleChange}
                />
                <label htmlFor="message">Message:</label>
                <textarea
                    type="message"
                    id="message"
                    name="message"
                    placeholder="Message"
                    value={letterData.message}
                    onChange={handleChange}
                />
                {/* </textarea> */}

                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default LetterForm;