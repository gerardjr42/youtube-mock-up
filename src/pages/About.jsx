export default function About() {
  return (
    <div>
      <h1 className="py-4 px mt-4 font-serif text-3xl text-white text-center mb-6">
        Developer Squad
      </h1>
      <div className="team-members font serif flex flex-row flex-wrap justify-center space-x-5">

        <div className="team-member">
          <img
            className="mx-auto w-60 items-center space-x-5 rounded-full border-4 border-red-500"
            src="https://ca.slack-edge.com/TCVA3PF24-U0640C0HG6S-5ff8831c47ab-512"
            alt="The Problem Solver"
          />
          <h2 className="text-center font-serif text-xl text-white">
            Abraham Zambrano Tablante
          </h2>
          <p className="font serif text-center text-white"> The Doer</p>
          <p className="font serif text-wrap  text-center text-base font-light text-white w-[50%] mx-auto">
            In my academic pursuits in Informatic Engineering, I'm fueled by an
            insatiable curiosity for technology. Thriving in the realm of
            algorithms, coding challenges, and problem-solving, I've gained
            proficiency in software development, database management, and system
            analysis.
          <a
            className="text-center font-serif italic text-white underline ml-4"
            href="https://github.com/abrahamzambranotablante"
            target="_blank"
          >
            Abraham's github
          </a>
          </p>
        </div>

        <div className="team-member">
          <img
            className="mx-auto w-60 space-x-5 rounded-full border-4 border-red-500"
            src="https://ca.slack-edge.com/TCVA3PF24-U06471E6458-39230e958373-512"
            alt="DatCodeGirl"
          />
          <h2 className="text-center font-serif text-xl text-white">
            Adeola AinaMarshall
          </h2>
          <p className="font serif text-center text-white">The Learner</p>
          <p className="font serif text-wrap  text-center text-base font-light text-white w-[50%] mx-auto">
            Lorem ipsum, dolor sit Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Excepturi impedit id minima. Eveniet illum
            sapiente, laboriosam nihil laborum possimus molestias? Mollitia rem
            natus optio asperiores vitae inventore hic incidunt laudantium.
            About Me
          <a
            className="text-center font-serif italic text-white  underline ml-4"
            href="https://github.com/datCodeGirl"
            target="_blank"
          >
            Adeola's github
          </a>
          </p>
        </div>
      </div>
        <div className="team-member flex-auto justify-center ">
          <img
            className="mx-auto flex  w-60 space-x-5 rounded-full border-4 border-red-500"
            src="https://ca.slack-edge.com/TCVA3PF24-U064W1APKS4-be83538ebf43-512"
            alt="The Project Manager"
          />
          <h2 className="font serif text-center text-xl text-white">
            Gerardo Garcia
          </h2>
          <p className="text-center font-serif text-white">Super Organizer</p>
          <p className="font serif text-wrap  text-center text-base font-light text-white w-[50%] mx-auto">
            Hello, I'm Gerardo Garcia, a versatile full-stack developer with a
            unique blend of biology, nursing and technology expertise I excel in
            Agile methodologies, fostering a collaborative environment that
            emphasizes teamwork. As a team player and team leader, I go beyond
            traditional roles by actively promoting a culture of knowledge
            sharing and mentorship within the team.
          <a
            className="mx-auto text-center font-serif italic text-white underline ml-4"
            href="https://github.com/gerardjr42"
            target="_blank"
          >
            Gerardo's github
          </a>
          </p>
        </div>
    </div>
  );
}
