import { TAOOption } from "../../App";
import { itemProps } from "../../components/items";

const getOptionDropDowns = async (items: itemProps[])=> {
      const response = await fetch("http://localhost:5001/blocks", {
        method:'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({'items': items})

      });
      if (response) {
        const data: TAOOption[] = await response.json();
        return data
      }
      return []
  };

  export default getOptionDropDowns;