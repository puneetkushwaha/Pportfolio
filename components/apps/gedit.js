import React, { Component } from 'react';
import $ from 'jquery';
import ReactGA from 'react-ga4';
import emailjs from '@emailjs/browser';

export class Gedit extends Component {

    constructor() {
        super();
        this.state = {
            sending: false,
            messageLength: 0,
            status: null, // 'success' or 'error'
        }
    }

    componentDidMount() {
        if (process.env.NEXT_PUBLIC_USER_ID) {
            emailjs.init(process.env.NEXT_PUBLIC_USER_ID);
        }
    }

    handleMessageChange = (e) => {
        this.setState({ messageLength: e.target.value.length });
    }

    clearForm = () => {
        $("#sender-name").val('');
        $("#sender-subject").val('');
        $("#sender-message").val('');
        this.setState({ messageLength: 0, status: null });
    }

    sendMessage = async () => {
        let name = $("#sender-name").val();
        let subject = $("#sender-subject").val();
        let message = $("#sender-message").val();

        name = name.trim();
        subject = subject.trim();
        message = message.trim();

        let error = false;

        if (name.length === 0) {
            $("#sender-name").val('');
            $("#sender-name").attr("placeholder", "Email or Name is required!");
            error = true;
        }

        if (message.length === 0) {
            $("#sender-message").val('');
            $("#sender-message").attr("placeholder", "Please write a message!");
            error = true;
        }
        if (error) return;

        this.setState({ sending: true, status: null });

        const serviceID = process.env.NEXT_PUBLIC_SERVICE_ID;
        const templateID = process.env.NEXT_PUBLIC_TEMPLATE_ID;
        const userID = process.env.NEXT_PUBLIC_USER_ID;

        if (!serviceID || !templateID || !userID) {
            this.setState({ sending: false, status: 'error' });
            return;
        }

        const templateParams = {
            'from_name': name,
            'subject': subject,
            'message': message,
        }

        emailjs.send(serviceID, templateID, templateParams, userID).then(() => {
            this.setState({ sending: false, status: 'success' });
            setTimeout(() => {
                $("#close-gedit").trigger("click");
            }, 2000);
        }).catch((err) => {
            console.error("Failed to send email:", err);
            this.setState({ sending: false, status: 'error' });
        })

        ReactGA.event({
            category: "Send Message",
            action: `${name}, ${subject}, ${message}`
        });
    }

    render() {
        return (
            <div className="w-full h-full relative flex flex-col bg-ub-cool-grey text-white select-none font-ubuntu">
                <div className="flex items-center justify-between w-full bg-ub-gedit-light bg-opacity-60 border-b border-t border-blue-400 text-sm h-10 px-2">
                    <div className="flex items-center gap-2">
                        <img src="/themes/Yaru/apps/gedit.png" className="w-5" alt="gedit" />
                        <span className="font-medium">New Message</span>
                    </div>
                    <div className="flex gap-2">
                        <button onClick={this.clearForm} className="px-3 py-1 text-xs hover:bg-white hover:bg-opacity-10 rounded transition-colors">Discard</button>
                        <button
                            onClick={this.sendMessage}
                            disabled={this.state.sending}
                            className={`flex items-center gap-2 px-4 py-1 text-xs font-bold rounded shadow-md transition-all ${this.state.sending ? 'bg-gray-500 cursor-not-allowed' : 'bg-ub-orange hover:bg-opacity-90 active:scale-95 cursor-pointer'}`}
                        >
                            {this.state.sending ? 'Sending...' : 'Send'}
                            {!this.state.sending && <img src="/themes/Yaru/status/mail-send-symbolic.svg" className="w-3 filter invert" alt="send" />}
                        </button>
                    </div>
                </div>

                <div className="relative flex-grow flex flex-col bg-ub-gedit-dark font-normal">
                    {/* Header Inputs */}
                    <div className="border-b border-black border-opacity-20 px-4 py-2 space-y-1">
                        <div className="flex items-center gap-4 text-xs">
                            <span className="text-gray-400 w-12">To:</span>
                            <span className="text-ubt-gedit-orange font-medium px-2 py-0.5 bg-black bg-opacity-20 rounded">Puneet Kushwaha &lt;puneetkushwaha9452@gmail.com&gt;</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                            <span className="text-gray-400 w-12">From:</span>
                            <input
                                id="sender-name"
                                className="flex-grow bg-transparent outline-none focus:bg-white focus:bg-opacity-5 px-2 py-1 rounded transition-colors text-ubt-gedit-blue"
                                placeholder="Your Email or Name"
                                spellCheck="false"
                                autoComplete="off"
                            />
                        </div>
                        <div className="flex items-center gap-4 text-xs">
                            <span className="text-gray-400 w-12">Subject:</span>
                            <input
                                id="sender-subject"
                                className="flex-grow bg-transparent outline-none focus:bg-white focus:bg-opacity-5 px-2 py-1 rounded transition-colors"
                                placeholder="What's this about?"
                                spellCheck="false"
                                autoComplete="off"
                            />
                        </div>
                    </div>

                    {/* Message Body */}
                    <div className="relative flex-grow flex flex-col pt-4">
                        <textarea
                            id="sender-message"
                            onChange={this.handleMessageChange}
                            className="w-full flex-grow bg-transparent outline-none px-6 py-2 text-sm leading-relaxed tracking-wide resize-none focus:bg-white focus:bg-opacity-5 transition-colors"
                            placeholder="Type your message here..."
                            spellCheck="false"
                        />

                        {/* Footer Info */}
                        <div className="flex justify-between items-center px-4 py-2 text-[10px] text-gray-500 bg-black bg-opacity-10">
                            <span>Markdown is supported</span>
                            <span className={this.state.messageLength > 500 ? 'text-ub-orange font-bold' : ''}>
                                {this.state.messageLength} characters
                            </span>
                        </div>
                    </div>

                    {/* Feedback Overlays */}
                    {this.state.sending && (
                        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black bg-opacity-40 backdrop-blur-sm">
                            <div className="w-12 h-12 border-4 border-ub-orange border-t-transparent rounded-full animate-spin"></div>
                            <span className="mt-4 font-bold tracking-widest text-sm animate-pulse">SENDING...</span>
                        </div>
                    )}

                    {this.state.status === 'success' && (
                        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-green-500 bg-opacity-90 backdrop-blur-sm animate-fadeIn">
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mb-4 shadow-lg">
                                <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                            </div>
                            <span className="font-bold text-lg">Message Sent!</span>
                            <span className="text-sm opacity-80 mt-1">Closing window...</span>
                        </div>
                    )}

                    {this.state.status === 'error' && (
                        <div className="absolute inset-x-0 top-0 z-50 bg-red-600 bg-opacity-95 py-2 px-4 flex items-center justify-between animate-transformDownShow">
                            <span className="text-xs font-medium">Failed to send message. Please check your connection.</span>
                            <button onClick={() => this.setState({ status: null })} className="text-xs font-bold px-2 py-0.5 bg-white bg-opacity-20 rounded">Dismiss</button>
                        </div>
                    )}
                </div>
            </div>
        )
    }
}

export default Gedit;

export const displayGedit = () => {
    return <Gedit />;
}
