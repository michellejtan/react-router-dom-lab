import { useState } from 'react';
import { useNavigate } from 'react-router';


const initialState = {
    boxOwner: '',
    boxSize: '',
};

const MailboxForm = (props) => {
    const [formData, setFormData] = useState(initialState);
    const navigate = useNavigate();


    const handleSubmit = (evt) => {
        evt.preventDefault();
        props.addBox(formData);
        setFormData(initialState);
        navigate('/mailboxes');
    };

    const handleChange = (evt) => {
        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        });
    };

    return (
        <main>
            <h1>New Mailbox</h1>
            <form onSubmit={handleSubmit}>
                <label htmlFor="boxOwner">Enter a Boxholder:</label>
                <input
                    type="text"
                    id="boxOwner"
                    name="boxOwner"
                    placeholder="Boxholder name"
                    value={formData.boxOwner}
                    onChange={handleChange}
                />

                <label htmlFor="boxSize">Select a Box Size:</label>
                <select
                    type="text"
                    id="boxSize"
                    name="boxSize"
                    value={formData.boxSize}
                    onChange={handleChange}
                >
                    <option>Select a Size</option>
                    <option value='small'>Small</option>
                    <option value='medium'>Medium</option>
                    <option value='large'>Large</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </main>
    );
};

export default MailboxForm;