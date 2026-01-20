import React, { Component } from 'react';
import jarvisData from './jarvis_data';

export class Jarvis extends Component {
    constructor() {
        super();
        this.inputRef = React.createRef();
        this.state = {
            messages: [
                { role: 'assistant', content: `Hello! I am Jarvis, Puneet's personal assistant. I know everything about his career, projects, and skills. How can I help you today?` }
            ],
            user_input: ''
        };
    }

    componentDidMount() {
        if (this.inputRef.current) {
            this.inputRef.current.focus();
        }
    }

    handleInput = (e) => {
        this.setState({ user_input: e.target.value });
    }

    sendMessage = (e) => {
        e.preventDefault();
        if (this.state.user_input.trim() === '') return;

        const newUserMessage = { role: 'user', content: this.state.user_input };
        const messages = [...this.state.messages, newUserMessage];

        this.setState({ messages, user_input: '' }, () => {
            this.generateResponse(newUserMessage.content.toLowerCase());
        });
    }

    generateResponse = (input) => {
        let response = "";

        if (input.includes('hi') || input.includes('hello') || input.includes('hey')) {
            response = `Hello! I'm Jarvis. Puneet is currently a ${jarvisData.bio.title}. How can I assist you?`;
        } else if (input.includes('who is puneet') || input.includes('about') || input.includes('puneet?')) {
            response = `${jarvisData.bio.summary} He is interested in ${jarvisData.bio.interests.join(", ")}.`;
        } else if (input.includes('project')) {
            const projects = jarvisData.projects.map(p => p.name).join(", ");
            response = `Puneet has worked on several projects including: ${projects}. Which one would you like to know more about?`;
        } else if (input.includes('skill') || input.includes('tech') || input.includes('know')) {
            response = `Puneet is an expert in ${jarvisData.skills.expertise.join(", ")}. He also works with ${jarvisData.skills.frameworks.slice(0, 5).join(", ")}.`;
        } else if (input.includes('experience') || input.includes('work') || input.includes('job')) {
            const exp = jarvisData.experience[0];
            response = `Puneet is currently a ${exp.role} at ${exp.company} (${exp.duration}). He has also been a ${jarvisData.experience[1].role} at ${jarvisData.experience[1].company}.`;
        } else if (input.includes('education') || input.includes('study') || input.includes('college')) {
            const edu = jarvisData.education[0];
            response = `Puneet is pursuing his ${edu.degree} at ${edu.institution} (${edu.duration}).`;
        } else if (input.includes('contact') || input.includes('email') || input.includes('reach')) {
            response = `You can email Puneet at ${jarvisData.contact.email} or find him on LinkedIn: ${jarvisData.contact.linkedin}`;
        } else if (input.includes('who are you') || input.includes('yourself')) {
            response = "I am Jarvis, an AI persona built by Puneet Kushwaha to represent him and answer questions about his work while he is away.";
        } else {
            response = "I'm not sure about that, but Puneet is a great developer! You can ask me about his projects, skills, experience, or how to contact him.";
        }

        setTimeout(() => {
            this.setState({
                messages: [...this.state.messages, { role: 'assistant', content: response }]
            });
            // Auto scroll to bottom
            const chatBox = document.getElementById('jarvis-chat-box');
            if (chatBox) chatBox.scrollTop = chatBox.scrollHeight;
        }, 600);
    }

    render() {
        return (
            <div className="h-full w-full flex flex-col bg-ub-drk-abrgn text-white font-ubuntu">
                <div className="flex-1 overflow-y-auto p-4 space-y-4" id="jarvis-chat-box">
                    {this.state.messages.map((msg, idx) => (
                        <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                            <div className={`max-w-xs md:max-w-md px-4 py-2 rounded-lg ${msg.role === 'user' ? 'bg-ub-orange text-white' : 'bg-gray-800 text-gray-200'}`}>
                                {msg.content}
                            </div>
                        </div>
                    ))}
                </div>
                <form onSubmit={this.sendMessage} className="p-4 bg-gray-900 flex space-x-2">
                    <input
                        ref={this.inputRef}
                        type="text"
                        value={this.state.user_input}
                        onChange={this.handleInput}
                        autoFocus
                        placeholder="Ask Jarvis anything..."
                        className="flex-1 bg-gray-800 border border-gray-700 rounded-full px-4 py-2 focus:outline-none focus:border-ub-orange text-sm text-white"
                    />
                    <button type="submit" className="bg-ub-orange hover:bg-orange-600 rounded-full p-2 transition duration-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                        </svg>
                    </button>
                </form>
            </div>
        );
    }
}

export default Jarvis;

export const displayJarvis = () => {
    return <Jarvis />;
}
