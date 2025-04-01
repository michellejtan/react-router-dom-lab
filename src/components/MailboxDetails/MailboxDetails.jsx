import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const currentMailBox = props.mailboxes.find((mailbox) => (
        mailbox._id === parseInt(mailboxId)
    ));

    return (
        <>
            <h1>Mailbox {mailboxId}</h1>
            <h2>Details</h2>

            <p>Boxholder: {currentMailBox.boxOwner}</p>
            <p>Box Size: {currentMailBox.boxSize}</p>
        </>
    );
};

export default MailboxDetails;