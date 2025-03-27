import menu from "../../data/menu";

const Sidebar = ({ onSelectCategory, activeCategory }) => {
  const menutest = menu.categories.map((category) => {
    return category.name;
  });

  const scrollLeft = () => {
    const container = document.querySelector(".menuSidebarMain");
    container.scrollBy({ left: -200, behavior: "smooth" });
  };

  const scrollRight = () => {
    const container = document.querySelector(".menuSidebarMain");
    container.scrollBy({ left: 200, behavior: "smooth" });
  };

  return (
    <>
      <div className='menuSidebar'>
        <button
          className='scroll-arrow left'
          onClick={scrollLeft}
        >
          &#8249;
        </button>
        <div className='menuSidebarMain'>
          <ul>
            {menutest.map((item, index) => (
              <div
                className={`menuSidebarItems ${
                  activeCategory === item ? "active" : ""
                }`}
                key={index}
                onClick={() => onSelectCategory(item)}
              >
                <li>
                  <h4>{item}</h4>
                </li>
              </div>
            ))}
          </ul>
        </div>
        <button
          className='scroll-arrow right'
          onClick={scrollRight}
        >
          &#8250;
        </button>
      </div>
    </>
  );
};

export default Sidebar;
