import { TAOOption } from "../App";
import { OptionType } from "../components/FilterPanel"




export const getOptions = (options:string[]) => {
    return   options.map((option, idx) => {
        return {'label': option, 'value': idx.toString()}
    });
}

export const getOptionsWithId = (options:TAOOption[]) => {
    console.log('options', options)
    const newOptions:OptionType[] = options.map((option) => {
        return {'label': option.value, 'value': option.id.toString()}
    });
    return newOptions
}