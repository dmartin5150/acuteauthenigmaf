import { ValueResult } from "../components/items";


export const getOptions = (options:ValueResult[]) => {
    return   options.map((option) => {
        return {'label': option.name + ' (' + option.count + ')', 'value': option.name}
    });
}

