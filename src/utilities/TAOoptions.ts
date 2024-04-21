import { TAOOption } from "../App";
import { OptionType } from "../components/FilterPanel"
import { SelectedValueResult } from "../components/items";



export const getOptions = (options:SelectedValueResult[]) => {
    return   options.map((option, idx) => {
        return {'label': option.name + ' (' + option.count + ')', 'value': idx.toString()}
    });
}

// export const getOptionsWithId = (options:TAOOption[]) => {
//     console.log('options', options)
//     const newOptions:OptionType[] = options.map((option) => {
//         return {'label': option.value, 'value': option.id.toString()}
//     });
//     return newOptions
// }