import { OptionType } from "../components/FilterPanel"

export type OptionWithId = {
    id: number;
    option:string;
}


export const getOptions = (options:string[]) => {
    return   options.map((option, idx) => {
        return {'label': option, 'value': idx.toString()}
    });
}

export const getOptionsWithId = (options:OptionWithId[]) => {
    return   options.map((option) => {
        return {'label': option.option, 'value': option.id.toString()}
    });
}