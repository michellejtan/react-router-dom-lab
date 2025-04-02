import { Link } from "react-router";

const MailboxList = (props) => {

    if (!props.mailboxes || props.mailboxes.length == 0) // No mailboxes created yet!
    return <h1>No mailboxes created yet!</h1>;
    return (
        <>
            <h1>Mailbox List</h1>
            <ul>
                {props.mailboxes.map((currentmailbox) => (
                    <li key={currentmailbox._id}>
                        <div className="mail-box">
                            <Link to={`/mailboxes/${currentmailbox._id}`}>
                                Mailbox {currentmailbox._id}
                            </Link>
                        </div>
                    </li>
                ))}
            </ul>
        </>
    );
};

export default MailboxList;