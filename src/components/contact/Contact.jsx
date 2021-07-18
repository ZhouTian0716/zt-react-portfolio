import "./Contact.scss"

export default function contact() {
    return (
        <form className="contact">
            <h1>Contact</h1>
            <h3>Name:</h3>
            <input type="text" required/>
            <h3>Email address:</h3>
            <input type="email" required/>
            <h3>Message:</h3>
            <textarea type="text" required/>
            <button>Submit</button>
        </form>
    )
}
