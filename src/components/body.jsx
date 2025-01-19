
import React, { useEffect, useState } from 'react';
import Ideas from './Ideas';

const IdeaBoard = () => {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState({ heading: '', paragraph: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIdea((prev) => ({ ...prev, [name]: value }));
  };

  const saveIdea = () => {
    if (newIdea.heading.trim() && newIdea.paragraph.trim()) {
       setIdeas((prev) => [...prev, { ...newIdea, id: Date.now() }]);

      setNewIdea({ heading: '', paragraph: '' });
    }
  };

  
  


  return (
    <div className="container">
      <div className="idea-form">
        <h2>Post Your Idea</h2>
        <input
          type="text"
          name="heading"
          value={newIdea.heading}
          onChange={handleInputChange}
          placeholder="Enter your idea heading"
        />
        <textarea
          name="paragraph"
          value={newIdea.paragraph}
          onChange={handleInputChange}
          placeholder="Describe your idea"
          rows={4}
        />
        <button onClick={saveIdea}>Save Idea</button>
      </div>
      <Ideas ideas = {ideas} setidea={setIdeas}></Ideas>
      
    </div>
    
  );
};

export default IdeaBoard;
