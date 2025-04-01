import { Link } from "react-router";

const MailboxList = (props) => {
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((currentmailbox) => (
                    <li key={currentmailbox._id}>
                        <Link to={`/mailboxes/${currentmailbox._id}`}>
                            Mailbox {currentmailbox._id}
                        </Link>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;