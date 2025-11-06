
function Catalog (props) {
  return <li>{props.weapon}</li>;
};

function Armory (props) {
  return (
    <ul>
      {props.weapons.map((weapon) => {
        return <Catalog key={weapon} weapon={weapon} />;
      })}
    </ul>
  );
};

function ArmoryCatalog () {
  const weapons = ["Dagger", "Club", "Sickle", "Spear", "Quarterstaff", "Longsword", "Greatsword", "Hand Axe", "Battle Axe"];

  return (
    <div>
      <h1>Weapons: </h1>
      <Armory weapons={weapons} />
    </div>
  );
};

export {ArmoryCatalog};