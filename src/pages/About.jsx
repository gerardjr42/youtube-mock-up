
export default function About () {
    return (
        <div>

       <h1 className="font-serif text-2xl py-4px mt-4 text-white">Developer Squad</h1>
        <div className="team-members flex-wrap flex flex-row justify-center font serif space-x-5">
            <div className="team-member flex-auto justify-center ">
                <img className="rounded-full border-4  border-red-500 w-60 space-x-5 flex mx-auto" src="https://ca.slack-edge.com/TCVA3PF24-U064W1APKS4-be83538ebf43-512" alt="The Project Manager" />
                <h2 className= "font serif text-center text-lg text-white"> Gerardo Garcia</h2>
                <p className= "text-center font-serif text-white">Super Organizer</p>
                <p className= "font serif text-center  text-wrap text-base font-light text-white">Lorem ipsum, dolor Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae nulla, numquam cumque perspiciatis omnis molestiae ut? Labore, itaque eveniet? Vero assumenda commodi dolore placeat sint in corporis porro quasi iusto?sit About Me</p>
                <a className="text-center mx-auto font-serif italic underline  text-white" href= "https://github.com/gerardjr42"> Gerardo's github</a>
            </div>
            
          <div className="team-member">
            <img className= "rounded-full border-4 border-red-500 space-x-5 w-60 items-center mx-auto" src="https://ca.slack-edge.com/TCVA3PF24-U0640C0HG6S-5ff8831c47ab-512" alt= "The Problem Solver" />
            <h2 className="font-serif text-center text-lg text-white"> Abraham Zambrano Tablante</h2>
            <p className= "font serif text-center text-white"> The Doer</p>
            <p className="font serif text-center  text-wrap text-base font-light text-white"> Lorem ipsum,Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque autem quasi quia repellendus nesciunt ut ipsa adipisci culpa optio pariatur voluptate consequuntur tempora, quam cum eveniet, blanditiis error vitae consectetur! dolor sit About Me</p>
            <a className="text-center font-serif italic underline text-white" href= "https://github.com/abrahamzambranotablante">Abraham's github</a> 
          </div>
            
            <div className="team-member">
                <img className="rounded-full border-4 border-red-500 space-x-5 w-60 mx-auto" src="https://ca.slack-edge.com/TCVA3PF24-U06471E6458-39230e958373-512" alt= "DatCodeGirl" />
                <h2 className="font-serif text-center text-lg text-white"> Adeola AinaMarshall</h2>
                <p className="font serif text-center text-white">The Learner</p>
                <p className="font serif text-center  text-wrap text-base font-light text-white"> Lorem ipsum, dolor sit Lorem ipsum dolor sit amet consectetur, adipisicing elit. Excepturi impedit id minima. Eveniet illum sapiente, laboriosam nihil laborum possimus molestias? Mollitia rem natus optio asperiores vitae inventore hic incidunt laudantium. About Me</p>
                <a className="text-center font-serif italic underline  text-white" href= "https://github.com/datCodeGirl"> Adeola's github</a>
            </div>
        </div>
     </div> 


        
    
    );
}