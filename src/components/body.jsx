
import React, { useEffect, useState } from 'react';
import Ideas from './Ideas';
import { saveIdeas } from '../services/api';
import { getAllIdeas } from '../services/api';

const IdeaBoard = () => {
  const [ideas, setIdeas] = useState([]);
  const [newIdea, setNewIdea] = useState({ heading: '', paragraph: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewIdea((prev) => ({ ...prev, [name]: value }));
  };

  const saveIdea =() => {
    if (newIdea.heading.trim() && newIdea.paragraph.trim()) {
      setIdeas((prev) => [...prev, { ...newIdea, id: Date.now() }]);
      setNewIdea({ heading: '', paragraph: '' }); 
      
    }
  };

 

  useEffect(()=>{
    async function set() {
      await saveIdeas({...ideas});
    }
    set();
  },[ideas])

  useEffect(()=>{
    async function get(){
      const responce = await getAllIdeas();
      setIdeas(responce.data);
    }
    get();
},[])




  return (
    <div>
      <div className="container">
        <div className="idea-form">
          <h2 class= "heading noto">Post Your Idea</h2>
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
        <Ideas ideas = {ideas} ></Ideas>
        
      </div>

    </div>
    
    
  );
};

export default IdeaBoard;
