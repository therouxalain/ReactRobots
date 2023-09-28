import UnRobot from "./UnRobot";

const ListeRobots = ({ robots, onDeleteMany, onToggleMany, toggleEdit }) => {
  return (
    <>
    <div className="robotitre">VOS AMIS-MACHNINES DANS NOTRE INVENTAIRE</div>
      {robots.map((robot) => (
        <UnRobot
          robot={robot}
          key={robot.id}
          onToggleEdit={toggleEdit}
          onDelete={onDeleteMany}
          onToggle={onToggleMany} 
        />
      ))}
    </>
  );
};

export default ListeRobots;
