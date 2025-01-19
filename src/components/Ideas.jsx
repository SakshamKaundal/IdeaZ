
const Ideas = (props)=>{

    
      return(
        <div className="ideas-list">
        {props.ideas.map((idea) => (
          <div key={idea.id} className="idea-card">
            <h3>{idea.heading}</h3>
            <p>{idea.paragraph}</p>
            <button onClick={() => deleteIdea(idea.id)}>Delete</button>
          </div>
        ))}
      </div>

    )


}

export default Ideas;