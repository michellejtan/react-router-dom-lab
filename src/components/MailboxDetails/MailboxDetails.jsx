import { useParams } from 'react-router';

const MailboxDetails = (props) => {
    const { mailboxId } = useParams();
    const selectedBox = props.mailboxes.find((mailbox) => (
        mailbox._id === Number(mailboxId)
    ));

    const selectedLetters = props.letters.filter((letter) => (
        letter.mailboxId === mailboxId

    ));
    // console.log(selectedLetters);

    if (!selectedBox || props.selectedBox.length === 0) //selectedBox doesn't even exist!
        return <h1>No mailbox Found</h1>;
    
    return (
        <>
            <h1>Mailbox {mailboxId}</h1>
            <h2>Details</h2>

            <p>Boxholder: {selectedBox.boxOwner}</p>
            <p>Box Size: {selectedBox.boxSize}</p>

            <h2>Letters</h2>
            {selectedLetters.length === 0 ? (
                <p>No letters</p>
            ) : (
                selectedLetters.map((letter, index) => {
                    return (
                        <div key={index}>
                            <p>Dear {letter.recipient},</p>
                            <p>{letter.message}</p>
                        </div>
                    );
                })

            )}
        </>
    );
};

export default MailboxDetails;