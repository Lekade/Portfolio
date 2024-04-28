import React from 'react';

export const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <h2>Contacts</h2>
                <form>
                    <label >
                        <span>Name</span>
                        <input type="text" placeholder="Name"/>
                    </label>
                    <label >
                        <span>Mail</span>
                        <input type="email" placeholder="Mail"/>
                    </label>
                    <label >
                        <span>Message</span>
                        <textarea placeholder="Message"/>
                    </label>
                    <button>Submit</button>
                </form>
            </div>
        </section>
    );
};