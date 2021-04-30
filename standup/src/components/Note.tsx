import * as React from 'react';





const Note : React.FC = () => {

    const [name , setName] = React.useState<string>('');
    const [task , setTask] = React.useState<string>('');
    const [yesteday , setYesteday] = React.useState<string>('');
    const [today , setToday] = React.useState<string>('');
    const [impediment , setImpediment] = React.useState<string>('');
    
  

    const changeName = (event: React.ChangeEvent<HTMLSelectElement>) :void => {
        setName(event.target.value);
       
        
    };

    const changeTask = ((event: React.ChangeEvent<HTMLSelectElement>) :void => {
        setTask(event.target.value);
        
       
        
    });
    const changeYesteday = ((event: React.ChangeEvent<HTMLTextAreaElement>) :void => {
        setYesteday(event.target.value);
       
        
      
    });
    const changeToday = ((event: React.ChangeEvent<HTMLTextAreaElement>) :void => {
        setToday(event.target.value);
     
        
        
    });
    const changeImpediment = ((event: React.ChangeEvent<HTMLTextAreaElement>) :void => {
        setImpediment(event.target.value);
        
       
    });

    const handleSubmit= ((event: React.FormEvent<HTMLFormElement>) :void => {
        event.preventDefault();
        const newNote ={name , task , yesteday , today , impediment}
        ;
        console.log('submited' , newNote);
        setName('');
        setTask('');
        setYesteday('');
        setToday('');
        setImpediment('');
      
    });


   
    
        return (
             <div>
                <h2>Write a New Note</h2>
                <div>
                 <form onSubmit={handleSubmit}>
                     <div>
                        <label>
                            Select your name
                            <select value ={name} onChange ={changeName }>
                                <option value ='Name'>Name...</option>
                                <option value ='Tommy'>Tommy</option>
                                <option value ='Jenny'>Jenny</option>
                                <option value ='Joanna'>Joanna</option>
                                <option value ='Marek'>Marek</option>
                                <option value ='Jane'>Jane</option>
                                <option value ='Danny'>Danny</option>

                            </select>
                        </label>
                     </div>
                     <div>
                        <label>
                             Select your task
                            <select value ={task} onChange ={changeTask}>
                                <option value ='Task'>Task...</option>
                                <option value ='UX'>UX</option>
                                <option value ='UI'>UI</option>
                                <option value ='Backend'>Backend</option>
                                <option value ='Frontend'>Frontend</option>
                                <option value ='Meeting with Client'>Meeting with Client</option>

                            </select>
                        </label>
                     </div>
                     <div>
                        <label>
                            What did you work on yesteday?
                            <textarea value ={yesteday} onChange ={changeYesteday}/>
                        </label>
                     </div>
                     <div>
                        <label>
                            What did you work on today?
                            <textarea value ={today} onChange ={changeToday}/>
                        </label>
                     </div>
                     <div>
                        <label>
                            Any impediment(s)?
                            <textarea value ={impediment} onChange ={changeImpediment}/>
                        </label>
                     </div>
                     <div>
                       <input type ='submit' value ='Save Note'/>   
                     </div>
                  
                 </form>
              </div>
             </div>
            
         );
    }
 
export default Note;