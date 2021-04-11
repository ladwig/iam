import React, { useState } from 'react';
import styles from '../styles/main.module.css'

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
                <form
                    onSubmit={handleOnSubmit}
                    className={styles.form}
                    autoComplete="off"
                >


                        <input
                            className={styles.input + ' ' + styles.email}
                            id="email"
                            type="email"
                            onChange={handleOnChange}
                            required
                            placeholder="your@mailadress.com"
                            value={inputs.email}
                        />
                        <textarea
                            className={styles.input + ' ' + styles.message}
                            id="message"
                            onChange={handleOnChange}
                            required
                            rows="1"
                            value={inputs.message}
                            placeholder="Whats up...?"
                        />
                        <div className={styles.btnContainer}>
                    <button
                        className={styles.btn}
                        type="submit"
                        disabled={status.submitted || status.submitting}
                    >
                        {!status.submitting
                            ? !status.submitted
                                ? 'Contact me'
                                : 'Thank you!'
                            : 'Sending...'}
                    </button></div>
                    <div className={styles.status}>
                        {status.info.error && (
                            <div className={styles.error}>
                                Error: {status.info.msg}
                            </div>
                        )}

                    </div>
                </form>
        </>
    );
}
