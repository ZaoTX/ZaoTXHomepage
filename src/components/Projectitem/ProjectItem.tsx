
interface ProjectItemProps {
    image: string;
    title: string;
    description: string;
    link: string;
}
function ProjectItem({image, title, description, link}:ProjectItemProps) {
  return (
    <div className='projectItem'>
        <div>
            
        </div>
        <h1>{title},{image},{description},{link}</h1>
    </div>
  )
}

export default ProjectItem