import React, { useState } from 'react';

interface Feature {
  icon: string;
  title: string;
  description: string;
}

interface Message {
  date: string;
  content: string;
}

const CombinedGasUsage: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    { date: 'Jul 08', content: 'Gas status for Java Kimathi Street' },
  ]);
  const [inputMessage, setInputMessage] = useState('');

  const features: Feature[] = [
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/98493e5b5af22d7a32f457b862649b23eaf954c5477f30b2d890bbbded4c1bcb?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9',
      title: 'Compare Usage',
      description: 'See how each location stacks up against the others in terms of gas consumption.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d7fe6aa0f96030e3324db8dd0fd9c128b2d9ac015bac095762ffb846641bb503?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9',
      title: 'Identify Patterns',
      description: 'Understand the typical gas usage behaviour to optimise operations and plan ahead.',
    },
    {
      icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e20dfad1de4e84611fe6a2edc2797a1b7e8470e08b7b74f5d9d2e9ea49fd8268?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9',
      title: 'Spot Anomalies',
      description: 'Detect unusual gas usage promptly to avoid waste and ensure safety',
    },
  ];

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (inputMessage.trim()) {
      const newMessage: Message = {
        date: new Date().toLocaleDateString('en-US', { month: 'short', day: '2-digit' }),
        content: inputMessage.trim(),
      };
      setMessages([...messages, newMessage]);
      setInputMessage('');
    }
  };

  const handleNewMessage = () => {
    setInputMessage('');
  };

  return (
    <main className="flex flex-col lg:flex-row h-screen bg-stone-100 p-4 sm:p-6">
      <section className="flex-grow lg:mr-6 bg-white rounded-3xl p-4 sm:p-6 flex flex-col">
        <div className="flex-grow"></div>
        <div className="flex flex-col sm:flex-row justify-between mb-4">
          {features.map((feature, index) => (
            <div key={index} className="bg-stone-100 rounded-3xl p-4 mb-4 sm:mb-0 sm:mr-4 last:mr-0 flex-1">
              <div className="flex items-center mb-2">
                <div className="bg-white rounded-full p-2 mr-3">
                  <img src={feature.icon} alt="" className="w-6 h-6" />
                </div>
              </div>
              <h3 className="text-emerald-800 font-semibold mb-1">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit} className="flex items-center bg-stone-100 rounded-full p-2">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/337dc8520e27fd3e56c25977b3f51349412958aae4076bc8fa1bb32d3075286d?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" alt="" className="w-6 h-6 mr-3" />
          <input
            type="text"
            value={inputMessage}
            onChange={handleInputChange}
            className="flex-grow bg-transparent border-none outline-none"
            placeholder="Message matX IA"
          />
          <button type="submit" className="bg-emerald-800 rounded-full p-2">
            <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f916d9c1edda26c0d422da191536a2fc817bf04af0acd4c2aeca99103953de5?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" alt="" className="w-5 h-5" />
          </button>
        </form>
      </section>
      <aside className="lg:w-1/4 flex flex-col mt-6 lg:mt-0">
        <h2 className="text-xl font-semibold mb-4 underline">Message History</h2>
        <div className="flex-grow overflow-y-auto">
          {messages.map((message, index) => (
            <div key={index} className="flex items-center bg-stone-100 rounded-2xl p-3 mb-2">
              <span className="bg-white rounded-xl px-2 py-1 text-xs mr-3">{message.date}</span>
              <p className="flex-grow truncate">{message.content}</p>
              <button className="ml-2">
                <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/c4bde2b26a7a56772f5bf9b0092f4e9e2a018aff689d4dfb2a8b6a6784271180?apiKey=144882928c014ec7a74d06e0b85e9ba9&&apiKey=144882928c014ec7a74d06e0b85e9ba9" alt="" className="w-5 h-5" />
              </button>
            </div>
          ))}
        </div>
        <button onClick={handleNewMessage} className="bg-emerald-800 text-white rounded-full py-3 px-6 mt-4 flex items-center justify-center">
          <span className="mr-2">+</span>
          New Message
        </button>
      </aside>
    </main>
  );
};

export default CombinedGasUsage;
