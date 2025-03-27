import { useState, useMemo } from "react";
import Sidebar from "../components/UI/Sidebar";
import Menu from "../components/UI/Menu";
import menu from "../data/menu";
import AbstractBackground from "../media/AbstractBackground.jpg";

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState(menu.categories[0]);
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("none");

  const handleCategorySelect = (categoryName) => {
    const category = menu.categories.find((cat) => cat.name === categoryName);
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
    // Clear selected category when searching
    if (e.target.value) {
      setSelectedCategory({ ...selectedCategory, name: "" });
    } else {
      setSelectedCategory(menu.categories[0]);
    }
  };

  const handleSortChange = (e) => {
    setSortOrder(e.target.value);
  };

  // Search across all categories if search term exists
  const filteredItems = useMemo(() => {
    let items = searchTerm
      ? menu.categories.flatMap((cat) => cat.items)
      : selectedCategory.items;

    // First filter by search term
    items = items.filter(
      (item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        (item.description || "")
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
    );

    // Then sort by price
    if (sortOrder === "asc") {
      items = [...items].sort((a, b) => Number(a.price) - Number(b.price));
    } else if (sortOrder === "desc") {
      items = [...items].sort((a, b) => Number(b.price) - Number(a.price));
    }

    return {
      ...selectedCategory,
      items,
    };
  }, [selectedCategory, searchTerm, sortOrder]);

  return (
    <>
      <div className='menuPage'>
        <div className='abstractBackground'>
          <img
            src={AbstractBackground}
            alt='.'
          />
        </div>
        <div className='menuPageHeader'>
          <h1>Our Menu</h1>
          <p>Choose what you want to order</p>
        </div>
        <div className='menuPageMain'>
          <Sidebar
            onSelectCategory={handleCategorySelect}
            activeCategory={selectedCategory.name}
          />
          <div className='menuContent'>
            <div className='menuContentHeader'>
              <div className='filterSection'>
                <input
                  type='text'
                  placeholder='Search across all menu items...'
                  value={searchTerm}
                  onChange={handleSearchChange}
                  className='searchInput'
                />
                <select
                  value={sortOrder}
                  onChange={handleSortChange}
                  className='priceSort'
                >
                  <option value='none'>Sort by price</option>
                  <option value='asc'>Price: Low to High</option>
                  <option value='desc'>Price: High to Low</option>
                </select>
              </div>
            </div>
            <Menu category={filteredItems} />
          </div>
        </div>
      </div>
    </>
  );
};

export default MenuPage;
