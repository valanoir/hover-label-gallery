import React from 'react';
import gift from '../images/gift.gif';
import delivery from '../images/delivery.gif';
import teamwork from '../images/teamwork.gif';

interface CardProps {
  icon: string;
  title: string;
  description: string;
}

const Card: React.FC<CardProps> = ({ icon, title, description }) => (
  <div className="flex flex-col items-start text-left p-6 bg-white rounded-lg w-full max-w-xs" style={{ borderRadius: '15px' }}>
    <img src={icon} alt={`${title} icon`} className="w-16 h-16 mb-4 object-contain" />
    <h3 className="font-bold mb-2" style={{ fontSize: '18px' }}>{title}</h3>
    <p className="text-gray-600" style={{ fontSize: '16px' }}>{description}</p>
  </div>
);

const GiftPlatform: React.FC = () => {
  const cards = [
    {
      icon: gift,
      title: 'Thousands of gifts',
      description: 'One vendor of record. Shop our business gift marketplace. We handle all sourcing, vetting, and compliance for you.',
    },
    {
      icon: delivery,
      title: 'Send to hundreds of recipients at once',
      description: 'State-of-the-art, multi-recipient checkout that makes it easy to send gifts in bulk.',
    },
    {
      icon: teamwork,
      title: 'Easily automate employee gifting',
      description: 'Set up gift workflows, milestones, and triggers once, then gifts go out automatically.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-gray-50" style={{ backgroundColor: 'rgb(210 224 237)' }}>
      <h1 className="font-bold mb-4 text-center" style={{ fontSize: '60px' }}>Designed for frequent gifters</h1>
      <p className="text-center text-gray-600 mb-8 max-w-2xl">
        Our gifting platform features make recurrent gifting as simple as clicking a button. We take care of the planning, sourcing, customizing, budgeting, storing, and logistics so you can focus on appreciation.
      </p>
      <div className="grid grid-cols-1 justify-items-center sm:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {cards.map((card, index) => (
          <Card key={index} icon={card.icon} title={card.title} description={card.description} />
        ))}
      </div>
      <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
        <button className="px-8 py-3 border-2 border-gray-400 text-gray-500 rounded-full hover:border-gray-800 hover:text-gray-800 transition-colors">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default GiftPlatform;