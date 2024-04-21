import { itemProps } from "../../components/items";


type updatedItems = {
  name: string;
  items: itemProps[]
}

const getUpdatedItems = async (items: itemProps[])=> {
      const response = await fetch("http://localhost:5001/alloptions", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({'items': items})

      });
      if (response) {
        const data: updatedItems = await response.json();
        return data.items
      }
      return []
  };

  export default getUpdatedItems;