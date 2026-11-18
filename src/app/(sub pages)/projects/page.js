import ProjectList from "@/components/projects";
import { projectsData } from "../../data";
import RenderModel from "@/components/RenderModel";
import dynamic from "next/dynamic";

const Staff = dynamic(() => import("@/components/models/Staff"), {
  ssr: false,
});

export const metadata = {
  title: "Projects — Yosr El Hamdouni",
};

export default function ProjectsPage() {
  return (
    <>
      <div className="w-full z-10">
        <ProjectList projects={projectsData} />
      </div>

      <div className="flex items-center justify-center fixed bg-transparent top-16 lg:top-20 -translate-x-1/2 lg:translate-x-0 -z-10 left-1/2 lg:-left-24 h-screen">
        <RenderModel>
          <Staff />
        </RenderModel>
      </div>
    </>
  );
}
