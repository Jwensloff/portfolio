import styles from './Projects.module.css';

function Projects() {
  let projs = [
    { name: 'project1', repo: 'gitRepo', link: 'deployedLink' },
    { name: 'project2', repo: 'gitRepo', link: 'deployedLink' },
    { name: 'project3', repo: 'gitRepo', link: 'deployedLink' },
  ];
  const projects = projs.map((proj) => {
    return (
      <div>
        <p>{proj.name}</p>
        <p>gitHub Repo {proj.repo}</p>
        <p>DeployedLink: {proj.link}</p>
      </div>
    );
  });
  return <section className='container'>{projects}</section>;
}

export default Projects;
