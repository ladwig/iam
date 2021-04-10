import React, { useState } from 'react';

export default function Contact() {
    const [status, setStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null },
    });

    const [inputs, setInputs] = useState({
        email: '',
        message: '',
    });

    const handleResponse = (status, msg) => {
        if (status === 200) {
            setStatus({
                submitted: true,
                submitting: false,
                info: { error: false, msg: msg },
            });
            setInputs({
                email: '',
                message: '',
            });
        } else {
            setStatus({
                info: { error: true, msg: msg },
            });
        }
    };

    const handleOnChange = (e) => {
        e.persist();
        setInputs((prev) => ({
            ...prev,
            [e.target.id]: e.target.value,
        }));
        setStatus({
            submitted: false,
            submitting: false,
            info: { error: false, msg: null },
        });
    };

    const handleOnSubmit = async (e) => {
        e.preventDefault();
        setStatus((prevStatus) => ({ ...prevStatus, submitting: true }));
        const res = await fetch('/api/send', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(inputs),
        });
        const text = await res.text();
        handleResponse(res.status, text);
    };

    return (
        <>
            <div className="">


                <form
                    onSubmit={handleOnSubmit}
                    className=""
                >
                    <h3 className="">
                        <span className="">
                            Contact me
                        </span>
                    </h3>

                    <div className="">
                        <label htmlFor="email">Email</label>
                        <input
                            className=""
                            id="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            placeholder="john@doe.com"
                            value={inputs.email}
                        />
                    </div>
                    <div className="">
                        <label htmlFor="message">Message</label>
                        <textarea
                            className=""
                            id="message"
                            onChange={handleOnChange}
                            required
                            rows="10"
                            value={inputs.message}
                            placeholder="Whats up...?"
                        />
                    </div>
                    <button
                        className=""
                        type="submit"
                        disabled={status.submitting}
                    >
                        {!status.submitting
                            ? !status.submitted
                                ? 'Send'
                                : 'Sent'
                            : 'Sending...'}
                    </button>
                    <div className="">
                        {status.info.error && (
                            <div className="error">
                                Error: {status.info.msg}
                            </div>
                        )}
                        {!status.info.error && status.info.msg && (
                            <div className="success">{status.info.msg}</div>
                        )}
                    </div>
                </form>
            </div>
        </>
    );
}
