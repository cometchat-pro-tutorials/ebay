const MenuItem = ({ menu }) => {
  return (
    <div className="menu__item">
      {menu.icon ? <img src={menu.icon} alt="menu"/> : <></>}
      <span>{menu.title}</span>
    </div>
  );
};

export default MenuItem;