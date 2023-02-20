import React, { useEffect, useState } from "react";
import Table from "./components/Table";
import ImageList from "./components/ImageList";
import DropDown from "./components/DropDown";
import ActionButtons from "./components/ActionButtons";

function App() {
  const [products, setProducts] = useState([]);
  const [closeModal, setCloseModal] = useState(false);
  const imagesPerRow = 3;
  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((data) => setProducts(data.products));
  }, []);

  function hanldeCategoryCopy(data) {
    navigator.clipboard.writeText(data.category);
    setCloseModal(!closeModal);
  }

  function hanldeCategoryDelete(data) {
    setProducts(products.filter((item) => item.id !== data.id));
    setCloseModal(!closeModal);
  }

  function hanldeItemBuy(data) {
    setCloseModal(!closeModal);
    window.open(`https://www.${data.brand}.com/`);
  }

  function checkIfCanBuy(data) {
    const brand = data.brand;
    if (
      brand === "Apple" ||
      brand === "Samsung" ||
      brand === "Huawei" ||
      brand === "Microsoft"
    ) {
      if (data.rating > 3 && data.discountPercentage > 11) return true;
    }

    return false;
  }

  const tableActions = [
    {
      actionName: "Buy Item",
      callback: hanldeCategoryDelete,
      render: (_, data) => (
        <>
          {checkIfCanBuy(data) && (
            <li
              className={"actionSelection"}
              onClick={() => hanldeItemBuy(data)}
            >
              Buy Now
            </li>
          )}
        </>
      ),
    },
    { actionName: "Copy Category", callback: hanldeCategoryCopy },
    {
      actionName: "Remove from the list",
      callback: hanldeCategoryDelete,
      class: "redColor",
    },
  ];

  const cols = [
    {
      header: "NAME",
      value: "title",
      render: (_, data) => (
        <>
          <div className={"nameColumn"}>
            <ImageList images={[data.thumbnail]} />
            <span>{data.title}</span>
          </div>
        </>
      ),
    },
    { header: "BRAND", value: "brand" },
    {
      header: "GALLERY",
      value: "images",
      render: (_, { images, brand }) => (
        <>
          {images.length <= imagesPerRow ? (
            <ImageList images={images} brand={brand} />
          ) : (
            <>
              <ImageList images={images.slice(0, imagesPerRow)} brand={brand} />
              <DropDown
                triger={
                  <ImageList
                    images={[
                      "https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77700453341.jpg",
                    ]}
                    text={`+${images.length - imagesPerRow}`}
                  />
                }
                closeModal={closeModal}
              >
                <ImageList images={images.slice(imagesPerRow)} brand={brand} />
              </DropDown>
            </>
          )}
        </>
      ),
    },
    {
      header: "ACTIONS",
      value: "actions",
      render: (_, data) => (
        <>
          <DropDown triger={<h2>...</h2>} closeModal={closeModal}>
            <ActionButtons actions={tableActions} data={data} />
          </DropDown>
        </>
      ),
    },
  ];

  return (
    <div className="returns-table">
      <Table data={products} columns={cols} />
    </div>
  );
}

export default App;
