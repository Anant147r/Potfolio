import React from "react";
import Project from "./Project/Project";
import {
  DevConnectorApp,
  KanbanBoard,
  NetflixHomepage,
  MicrosoftHomepage,
  GoogleHomePage,
  ChitChatMessengerApp,
} from "../imageAssets/imageAssets";
const Work = () => {
  const projects = [
    {
      projectName: "Chit Chat App (Messenger App)",
      projectURL: "https://chit-a-chat.herokuapp.com/",
      codeURL: "",
      backgroundImage: ChitChatMessengerApp,
    },
    {
      projectName: "Dev Connector App",
      projectURL: "https://secret-citadel-37038.herokuapp.com/",
      codeURL: "https://github.com/Anant147r/DevApp",
      backgroundImage: DevConnectorApp,
    },
    {
      projectName: "Kanban Board",
      projectURL: "https://anant147r.github.io/Kanban-Board/",
      codeURL: "https://github.com/Anant147r/Kanban-Board",
      backgroundImage: KanbanBoard,
    },

    {
      projectName: "Netfilx Homepage",
      projectURL: "https://anant147r.github.io/Netflix_home_page/",
      codeURL: "https://github.com/Anant147r/Netflix_home_page",
      backgroundImage: NetflixHomepage,
    },
    {
      projectName: "Microsoft Homepage",
      projectURL: "https://anant147r.github.io/Microsoft-Landing-Page/",
      codeURL: "https://github.com/Anant147r/Microsoft-Landing-Page",
      backgroundImage: MicrosoftHomepage,
    },
    {
      projectName: "Google Homepage",
      projectURL: "https://github.com/Anant147r/Google-Landing-Page",
      codeURL: "https://github.com/Anant147r/Google-Landing-Page",
      backgroundImage: GoogleHomePage,
    },
  ];
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">Check out some of my recent work</p>
        </div>

        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div key={index}>
              <Project {...project} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
